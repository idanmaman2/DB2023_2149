from util import mycursor,mydb
import requests 
import json 
import datetime 
import re 
import requests 

apikey= None #create file in this directory named api.key with your own api key from omdbapi - just enter google mail...

from enum import Enum
class movie: 
    class movieRating(Enum): 
        PG = "PG" 
        PG_13 = "PG-13"
        R ="R"
        G= "G"
        
    def __init__(self,name,genre,rating,description,duration,reales_date,poster,trailer):
        self.Name= name  
        self.genre=genre
        self.rating=rating
        self.description=description
        self.duration=duration
        self.reales_date=reales_date
        self.poster = poster
        self.trailer =trailer
    def __repr__(self) -> str:
        return f"""
            Name : {self.Name}
            genere : {self.genre}
            rating: {self.rating}
            description : {self.description}
            duration : {self.duration}
            realse_date : {self.reales_date}
            poster : {self.poster}
            trailer : {self.trailer}
        """








def fetch_trailer(movie,year): 
  page : str  = requests.get(f"https://www.youtube.com/results?search_query={movie.strip().replace(' ','+')}+{year}+trailer"
                             ,headers={
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
                            }
                             ).text
  res : list[str]=  re.findall('''\"videoId\"\:\"([\\w]{11})\"''',page);
  trailers = map(lambda id : "https://www.youtube.com/watch?v=%s"%id , res)
  uniqeTrailers = []
  for tr in trailers:#I didnt use set cause I didnt want to change the order of them 
    if tr not in uniqeTrailers : 
        uniqeTrailers.append(tr)
    if len(uniqeTrailers) == 3 : 
        break 
  return uniqeTrailers

def fetch_posters(movie,year): 
    page:str = requests.get(f"https://www.google.com/search?q={movie.strip().replace(' ','%20')}%20{year}%20the%20movie&tbm=isch&hl=iw" ,
                            headers={
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
                            }
                            
                            ).text
    linksHash  = re.finditer("data-tbnid=\"([\\w]{14})\"" , page )
    links = set()
    for refind in linksHash :
        try:
            hash,start= refind.group(1) , refind.span()[0]+len('data-tbnid=\"')
            start = page.index(hash,start ) + len(hash)
            start = page.index(hash,start ) + len(hash)
            start = page.index("[" , start) + 1 
            start = page.index("[" , start) + 2 
            end = page.index('"',start)
            links.add(page[start : end])
        except : 
            ...
        if len(links) == 10 : 
            break 
    return list(links)



with open("../keys/api.key",'r') as file : 
    apikey :str = file.read() 
    
with open("../data/titles.json" , 'r') as file : 
    jsonfile : dict  = json.load(file) 
    for i in jsonfile["titles"]: 
        res : dict = requests.get(f"https://www.omdbapi.com/?t={i}&apikey={apikey}").json()
        if res["Response"] == "True":
            mv : movie  = None 
            try:
                date : datetime = datetime.datetime.strptime(res["Released"], '%d %b %Y')
                mv = movie(
                    name=res["Title"],
                    rating=movie.movieRating(res["Rated"]) ,
                    description=res["Plot"],
                    duration=datetime.timedelta(minutes=int(res["Runtime"].split(" ")[0])  ) ,
                    reales_date=date,
                    genre=res["Genre"].split(","),
                    poster={ "images" : [res["Poster"]] + fetch_posters(res["Title"],date.strftime( '%Y')) } , 
                    trailer = {"trailers" : list(fetch_trailer(res["Title"],date.strftime( '%Y')))} 
                    
                    )
            except : 
                print(f"UNVALID MOVIE { '' if not mv else  mv.Name}")
                continue
    
            print(mv)
            if mv.rating : 
                try: 
                    mycursor.execute("""
                        INSERT INTO `movies` (`Name`, `rating`, `id`, `description`, `duration`, `reales_date`, `poster_images`, `trailer`) VALUES (%s,%s,NULL,%s,%s,%s,%s,%s);""" , 
                        (mv.Name , mv.rating.value, mv.description , mv.duration, mv.reales_date.strftime("%Y-%m-%d") , json.dumps(mv.poster) , json.dumps(mv.trailer)))
                    mydb.commit()
                    mycursor.execute("SELECT LAST_INSERT_ID();")
                    mv_id  = mycursor.fetchone()
                    mv_id = mv_id[0]
                    mycursor.executemany("""INSERT INTO `movie_generes`(`mv_id`, `genre`) VALUES (%s,%s)""" ,list(map(lambda x : (mv_id,x) , mv.genre)) )
                except: 
                    print(f"FAILED {mv.name}")
