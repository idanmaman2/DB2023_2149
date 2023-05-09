from util import mycursor,mydb
import requests 
import json 
import datetime 
import re 
import traceback
from itertools import cycle
from objects.movie import Movie 
from objects.genre import Genre
from objects.genere_movie import GenereMovie
apikey= None #create file in the keys directory named api.key with your own api key from omdbapi - just enter google mail...
# HIGH QUALITY :  https://www.google.com/search?as_st=y&tbm=isch&as_q=puss+in+boots+the+last+wish+poster&as_epq=&as_oq=&as_eq=&cr=countryUS&as_sitesearch=&tbs=ctr:countryUS,isz:lt,islt:svga,itp:photo,iar:t,ift:png#imgrc=PLynD_nPSNorpM

def uniqueInOrder(ls : iter )->list: 
    """I didnt use set cause I didnt want to change the order of them """
    uniqeTrailers = []
    for tr in ls:
        if tr not in uniqeTrailers : 
            uniqeTrailers.append(tr)
        if len(uniqeTrailers) == 3 : 
            break 
    return uniqeTrailers

def fetch_trailer(movie,year): 
  page : str  = requests.get(f"https://www.youtube.com/results?search_query={movie.strip().replace(' ','+')}+{year}+trailer"
                             ,headers={
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
                            }
                             ).text
  res : list[str]=  re.findall('''\"videoId\"\:\"([\\w]{11})\"''',page);
  trailers = map(lambda id : "https://www.youtube.com/embed/%s"%id , res)
  return uniqueInOrder(trailers)

def fetch_posters(movie,year): 
    page:str = requests.get(f"https://www.google.com/search?q={movie.strip().replace(' ','%20')}%20{year}%20the%20movie&tbm=isch&hl=iw" ,
                            headers={
                                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
                            }).text
    linksHash  = re.finditer("data-tbnid=\"([\\w]{14})\"" , page )
    links = list()
    for refind in linksHash :
        try:
            hash,start= refind.group(1) , refind.span()[0]+len('data-tbnid=\"')
            start = page.index(hash,start ) + len(hash)
            start = page.index(hash,start ) + len(hash)
            start = page.index("[" , start) + 1 
            start = page.index("[" , start) + 2 
            end = page.index('"',start)
            if page[start : end] not in links : 
                links.append(page[start : end])
        except : 
            ...
        if len(links) == 10 : 
            break 
    return links

with open("../keys/api.key",'r') as file : 
    apikey :str = file.read() 
    
with open("../data/titles.json" , 'r') as file : 
    jsonfile : dict  = json.load(file) 
    for i in jsonfile["titles"]: 
        res : dict = requests.get(f"https://www.omdbapi.com/?t={i}&apikey={apikey}").json()
        if res["Response"] == "True":
            mv : Movie  = None 
            glist : list[Genre] = [] 
            try:
                date : datetime = datetime.datetime.strptime(res["Released"], '%d %b %Y')
                mv = Movie(
                    res["Title"],
                    Movie.Rating(res["Rated"]) ,
                    res["Plot"],
                    datetime.timedelta(minutes=int(res["Runtime"].split(" ")[0])  ) ,
                    date,
                     fetch_posters(res["Title"],date.strftime( '%Y'))[0] , 
                     list(fetch_trailer(res["Title"],date.strftime( '%Y'))) [0] , 
                     None
                    )
               
            except Exception as e:  
                print(f"UNVALID MOVIE { '' if not mv else  mv.name}  : {e}")
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
                    glist.extend(map(Genre , res["Genre"].split(",") ))
                    for gn in glist : 
                        try : 
                            mycursor.execute("""INSERT INTO `genre`(`id`, `name`) 
                                                VALUES (%s,%s)""" , 
                                                tuple(gn))
                                                
                            mydb.commit()
                        except : 
                            print("GENRE EXSITS...(IT IS NORMAL WARNNING)")
                    
                    gidlist = [] 
                    for gn in glist : 
                        mycursor.execute(f"SELECT id FROM `genre` WHERE `genre`.name = '{gn.name}'")
                        id = mycursor.fetchone()
                        print(id,gn.name)
                        gidlist.append(id[0])
                        
                        
                    gnmvlist = [] 
                    gnmvlist.extend(map(GenereMovie ,gidlist  , cycle([ mv_id[0]])))
                    
                    
                    mycursor.executemany("""INSERT INTO `movie_genre`(`movie_id`, `genre_id`) VALUES (%s,%s)""" ,
                                         tuple(map(tuple,gnmvlist)))
                        
                except Exception as e: 
                    print(f"FAILED {mv.name}  ::: {e}")
                    print(traceback.format_exc())
