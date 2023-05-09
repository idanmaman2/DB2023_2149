from dataclasses import dataclass
from typing import List 
from datetime import datetime
@dataclass
class MaintenanceJob:
    id : int 
    worker_id : int  
    maintance_schedule : datetime 
    job_description : str
    job_title : str 
    hall_id : int 

    def __iter__(self): 
        return iter((self.id,self.worker_id,self.maintance_schedule , self.job_description , self.job_title,self.hall_id))
    
    