
class Genere : 
    def __init__(self, name , mv_id ): 
        self.name  = name 
        self.mv_id = mv_id 
    def __str__(self): 
        return f"""
            {self.name}  => name 
            {self.mv_id} => mv_id 
        """
    def __iter__(self): 
        """(`mv_id`, `genre`)"""
        return iter((
            self.mv_id, 
            self.name ))