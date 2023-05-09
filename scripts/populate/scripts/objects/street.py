from dataclasses import dataclass
from typing import List 
@dataclass
class Street : 
    name : str 
    region : str 
    city : str  
    def __iter__(self): 
        """( `street_name`, `city_name`, `region_name`, `id`) """
        return iter((
            self.name , 
            self.city ,
            self.region  
        )) 