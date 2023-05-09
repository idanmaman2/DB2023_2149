from dataclasses import dataclass
from typing import List 
@dataclass
class TheaterHall : 
    theater_id : int 
    id : int 
    def __iter__(self):
        """(`id`, `Theater_id`)"""
        return iter((
            self.id , 
            self.theater_id
        ))
    