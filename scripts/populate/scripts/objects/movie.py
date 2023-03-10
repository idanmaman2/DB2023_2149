from enum import Enum
from datetime import datetime,timedelta
import json 
class Movie: 
    class Rating(Enum): 
        PG = "PG" 
        PG_13 = "PG-13"
        R ="R"
        G= "G"
    def __init__(self,name:str,rating:Rating,description:str,duration:timedelta,reales_date:datetime,poster:dict,trailer:dict,id=None):
        self.name= name  
        self.rating=rating
        self.description=description
        self.duration=duration
        self.reales_date=reales_date
        self.poster = poster
        self.trailer =trailer
        self.id = id 
    def __str__(self) -> str:
        return f"""
            Name : {self.name}
            rating: {self.rating}
            description : {self.description}
            duration : {self.duration}
            realse_date : {self.reales_date}
            poster : {self.poster}
            trailer : {self.trailer}
        """
    def __iter__(self): 
        """(`Name`, `rating`, `id`, `description`, `duration`, `reales_date`, `poster_images`, `trailer`)"""
        return iter((
            self.name, 
            self.rating.value , 
            self.id , 
            self.description ,
            self.duration , 
            self.reales_date.strftime("%Y-%m-%d") , 
            json.dumps(self.poster) , 
            json.dumps(self.trailer)
        ))
        


