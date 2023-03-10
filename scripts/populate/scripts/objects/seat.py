class Seat: 
    """Reprsents Seat class - used in order to populate the DB for testing"""
    def __init__(self,theater_hall_id, row , column  , id = None  ): 
        self.column = column 
        self.row = row 
        self.theater_hall_id = theater_hall_id 
        self.id = id 
    def __str__(self) -> str:
         return f"""
                {self.column} => column 
                {self.row} => row 
                {self.theater_hall_id} => theater_hall_id 
                {self.id} => id 
                """
    def __iter__(self): 
        """(`theated_hall_id`, `rowseat`, `columnseat`, `id`) """
        return iter((self.theater_hall_id , 
                     self.row , 
                     self.column , 
                     self.id))