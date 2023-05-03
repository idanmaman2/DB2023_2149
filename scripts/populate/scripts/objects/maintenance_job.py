from dataclasses import dataclass
from typing import List 
@dataclass
class maintance_job:
    id : int 
    worker_id : int  
    maintance_schedule : int 
    job_description : int 
    hall_id : int 

    def __iter__(self): 
        return iter((self.id,self.worker_id,self.maintance_schedule,self.hall_id))
    
    