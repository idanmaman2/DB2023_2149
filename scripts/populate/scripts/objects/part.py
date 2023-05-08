from dataclasses import dataclass
from typing import List 
@dataclass
class Part:
    id : int 
    part_name : str 
    cost : int 
    def __iter__(self): 
        return iter((self.id,self.part_name,self.cost))
    
    