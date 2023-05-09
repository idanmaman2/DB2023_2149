from .street import Street
from itertools import chain 
from dataclasses import dataclass
from typing import List 
@dataclass
class Theater : 
    street : Street 
    id : int 
    def __iter__(self):
        """( `street_name`, `city_name`, `region_name`, `id`)"""
        return chain(iter(self.street) , 
                     iter((self.id,)))
        