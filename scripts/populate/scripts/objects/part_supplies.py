from dataclasses import dataclass
from typing import List 
@dataclass
class PartSupplies:
    part_id : int 
    quantity : int  
    cost : int 
    job_id : int 

    def __iter__(self): 
        return iter((self.part_id,self.quantity,self.cost,self.job_id))
    
    