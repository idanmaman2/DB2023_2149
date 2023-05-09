from dataclasses import dataclass
@dataclass
class Genre: 
    name : str 
    id : int = None 
    def __iter__(self): 
        """(`id`, `name`)"""
        return iter((
            self.id, 
            self.name ))