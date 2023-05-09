from dataclasses import dataclass
@dataclass
class GenereMovie : 
    gn_id : int 
    mv_id : int 
    def __iter__(self): 
        """(`mv_id`, `gn_id`)"""
        return iter((
            self.mv_id, 
            self.gn_id ))