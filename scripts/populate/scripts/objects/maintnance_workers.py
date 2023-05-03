from dataclasses import dataclass
from typing import List 
from enum import Enum
@dataclass
class maintenace_workers:
    class Roles(Enum):
        SIMPLE_WORKER =0 
        PRIVILLEGED_WORKER = 1 
        MANAGER = 2 
    id : int 
    role : Roles
    def __iter__(self): 
        return iter((self.id , self.role.name))