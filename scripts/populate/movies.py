from util import mycursor,mydb
import requests 
import json 
import datetime 
from enum import Enum
apikey= None 



class movie: 
    class movieRating(Enum): 
        PG = "PG" 
        PG_13 = "PG-13"
        R ="R"
        G= "G"
        NA = 'N/A'
        Passed = "Passed"
        notRated ='Not Rated'
    def __init__(self,name,genre,rating,description,duration,reales_date):
        self.Name= name  
        self.genre=genre
        self.rating=rating
        self.description=description
        self.duration=duration
        self.reales_date=reales_date
    def __repr__(self) -> str:
        return f"""
            Name : {self.Name}
            genere : {self.genre}
            rating: {self.rating}
            description : {self.description}
            duration : {self.duration}
            realse_date : {self.reales_date}
    
    
        """


with open("./api.key",'r') as file : 
    apikey = file.read() 
    
with open("./data/titles.json" , 'r') as file : 
    jsonfile = json.load(file) 
    for i in jsonfile["titles"]: 

        res = requests.get(f"https://www.omdbapi.com/?t={i}&apikey={apikey}").json()
        if res["Response"] == "True":
            mv = None 
            try : 
                mv = movie(
                    name=res["Title"],
                    rating=movie.movieRating(res["Rated"]) ,
                    description=res["Plot"],
                    duration=datetime.timedelta(minutes=int(res["Runtime"].split(" ")[0])  ) ,
                    reales_date=datetime.datetime.strptime(res["Released"], '%d %b %Y'),
                    genre=res["Genre"].split(",")
                    
                    )
            except : 
                continue
            print(mv)
            if mv.rating : 
                try:
                    mycursor.execute(f"""
                        INSERT INTO `movies` (`Name`, `genre`, `rating`, `id`, `description`, `duration`, `reales_date`) 
                        VALUES ("{mv.Name}", "{",".join(mv.genre)}", '{mv.rating.value}', NULL, "{mv.description}", '{mv.duration}', "{mv.reales_date.strftime("%Y-%m-%d")}");
                        """)
                except : 
                    print(f"FAILED {mv.Name}")

mydb.commit()
print(mycursor.rowcount, "was inserted.")
