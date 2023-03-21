class Genre: 
    def __init__(self, name , id=None ): 
        self.name  = name 
        self.id = id 
    def __str__(self): 
        return f"""
            {self.name}  => name 
            {self.id} => mv_id 
        """
    def __iter__(self): 
        """(`id`, `name`)"""
        return iter((
            self.id, 
            self.name ))