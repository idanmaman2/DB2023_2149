
from dataclasses import dataclass
from typing import List 
@dataclass
class Costumer : 
    first_name : str 
    last_name : str 
    email : str 
    password : str 
    id : str 
    def __iter__(self): 
        """(`first_name`, `last_name`, `id`, `email`, `password`)"""
        return iter((self.first_name,
                     self.last_name , 
                     self.id , 
                     self.email , 
                     self.password))