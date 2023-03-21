
class GenereMovie : 
    def __init__(self, gn_id , mv_id ): 
        self.gn_id  = gn_id 
        self.mv_id = mv_id 
    def __str__(self): 
        return f"""
            {self.gn_id}  => name 
            {self.mv_id} => mv_id 
        """
    def __iter__(self): 
        """(`mv_id`, `gn_id`)"""
        return iter((
            self.mv_id, 
            self.gn_id ))