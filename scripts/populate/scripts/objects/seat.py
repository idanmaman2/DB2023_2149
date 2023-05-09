from dataclasses import dataclass

@dataclass
class Seat: 
    theater_hall_id : int 
    row : int 
    column : int 
    id : int 
    def __iter__(self): 
        """(`theated_hall_id`, `rowseat`, `columnseat`, `id`) """
        return iter((self.theater_hall_id , 
                     self.row , 
                     self.column , 
                     self.id))