
from datetime import datetime

class Schedule : 


    def __init__(self , mv_id : int , theater_hall_id : int , time :datetime , is3d : bool , id : int = None  ) -> None:
        self.mv_id = mv_id
        self.theater_hall_id = theater_hall_id  
        self.time = time 
        self.is3d = is3d 
        self.id = id 
    def __str__(self): 
        return f"""
        {self.mv_id} => mv_id
        {self.theater_hall_id} => theater_hall_id  
        {self.time} => time 
        {self.is3d} => is3d 
        {self.id} => id 
            """

    def __iter__(self)->iter: 
        """(`id`, `mv_id`, `theater_hall_id`, `time`, `3D`)"""
        return iter((self.id , 
                     self.mv_id , 
                     self.theater_hall_id ,
                     self.time.strftime("%Y-%m-%d") , 
                     self.is3d  ))