
class TheaterHall : 
    def __init__(self, theater_id : int , id : int ) :
        self.theater_id = theater_id 
        self.id = id 
    def __str__(self): 
        return f"""
            {self.theater_id} => theater_id 
            {self.id} => id 
            """
    def __iter__(self):
        """(`id`, `Theater_id`)"""
        return iter((
            self.id , 
            self.theater_id
        ))
    