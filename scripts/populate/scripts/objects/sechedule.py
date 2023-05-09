
from datetime import datetime
from dataclasses import dataclass
from typing import List 
@dataclass
class Schedule : 
    mv_id : int 
    theater_hall_id : int  
    time : datetime 
    is3d :  bool 
    id : int 
    def __iter__(self)->iter: 
        """(`id`, `mv_id`, `theater_hall_id`, `time`, `3D`)"""
        return iter((self.id , 
                     self.mv_id , 
                     self.theater_hall_id ,
                     self.time.strftime("%Y-%m-%d") , 
                     self.is3d  ))