from enum import Enum
from datetime import datetime,timedelta
from dataclasses import dataclass
@dataclass
class Movie: 
    class Rating(Enum): 
        PG = "PG" 
        PG_13 = "PG-13"
        #R ="R"
        G= "G"
    name : str 
    rating : Rating 
    description : str  
    duration : datetime  
    reales_date : datetime 
    poster : str 
    trailer : str  
    id : int 
    def __iter__(self): 
        """(`Name`, `rating`, `id`, `description`, `duration`, `reales_date`, `poster_images`, `trailer`)"""
        return iter((
            self.name, 
            self.rating.value , 
            self.id , 
            self.description ,
            self.duration , 
            self.reales_date.strftime("%Y-%m-%d") , 
            self.poster , 
            self.trailer
        ))
        


