from dataclasses import dataclass
from typing import List 
from enum import Enum
@dataclass
class MaintenaceWorkers:
    class Roles(Enum):
        SIMPLE_WORKER ="Simple_Worker"
        PRIVILLEGED_WORKER = "Privillged_Worker"
        MANAGER = "Manager"
    id : int 
    role : Roles
    def __iter__(self): 
        return iter((self.id , self.role.value))