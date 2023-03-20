from util import mycursor,mydb
import requests 
import json 
import datetime 
import re 
import requests 
from itertools import cycle
from objects.movie import Movie 
from objects.genere import Genere
apikey= None #create file in the keys directory named api.key with your own api key from omdbapi - just enter google mail...
# HIGH QUALITY :  https://www.google.com/search?as_st=y&tbm=isch&as_q=puss+in+boots+the+last+wish+poster&as_epq=&as_oq=&as_eq=&cr=countryUS&as_sitesearch=&tbs=ctr:countryUS,isz:lt,islt:svga,itp:photo,iar:t,ift:png#imgrc=PLynD_nPSNorpM
def fetch_trailer(movie,year): 
  page : str  = requests.get(f"https://www.youtube.com/results?search_query={movie.strip().replace(' ','+')}+{year}+trailer"
                             ,headers={
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
                            }
                             ).text
  res : list[str]=  re.findall('''\"videoId\"\:\"([\\w]{11})\"''',page);
  trailers = map(lambda id : "https://www.youtube.com/embed/%s"%id , res)
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
                            }).text
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
            mv : Movie  = None 
            glist : list[Genere] = [] 
            try:
                date : datetime = datetime.datetime.strptime(res["Released"], '%d %b %Y')
                mv = Movie(
                    name=res["Title"],
                    rating=Movie.Rating(res["Rated"]) ,
                    description=res["Plot"],
                    duration=datetime.timedelta(minutes=int(res["Runtime"].split(" ")[0])  ) ,
                    reales_date=date,
                    poster={ "imagesHigh" :  fetch_posters(res["Title"],date.strftime( '%Y')) , "imageLow" : [res["Poster"]] } , 
                    trailer = {"trailers" : list(fetch_trailer(res["Title"],date.strftime( '%Y')))} 
                    )
               
            except : 
                print(f"UNVALID MOVIE { '' if not mv else  mv.name}")
                continue
    
            print(mv)
            if mv.rating : 
                try: 
                    mycursor.execute("""
                        INSERT INTO `movie` (`Name`, `rating`, `id`, `description`, `duration`, `reales_date`, `poster_images`, `trailer`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s);""" , 
                        tuple(mv)
                        )
                    mydb.commit()
                    mycursor.execute("SELECT LAST_INSERT_ID();")
                    mv_id  = mycursor.fetchone()
                    glist.extend(map(Genere , res["Genre"].split(",") , cycle([ mv_id[0]])))
                    mycursor.executemany("""INSERT INTO `movie_generes`(`mv_id`, `genre`) VALUES (%s,%s)""" ,
                                         tuple(map(tuple,glist)))
                except: 
                    print(f"FAILED {mv.name}")
