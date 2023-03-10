from .street import Street
from itertools import chain 
class Theater : 
    def __init__(self, street:Street , id : int  = None )->None: 
        self.street = street 
        self.id = id
    def __repr__(self) -> str:
        return f"""
            {self.street} => street 
            {self.id} => id
        """  
    def __iter__(self):
        """( `street_name`, `city_name`, `region_name`, `id`)"""
        return chain(iter(self.street) , 
                     iter((self.id,)))
        