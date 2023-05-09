from enum import Enum
from dataclasses import dataclass
from typing import List 
@dataclass
class Transaction : 
    class PayingMethods(Enum): 
        VISA = "VISA"
        CASH = 'CASH'
        CUPON = 'CUPON'
    
    paying_method : PayingMethods
    costumer_id : str 
    seat_id : str 
    total_price : int 
    sched_id : int 
    id : int 
    def __iter__(self)->iter:
        """`id`, `paying_method`, `costumer_id`, `seat_id`, `total_price`, `sched_id`"""
        return iter(
            (   self.id , 
                self.paying_method.value , 
                self.costumer_id , 
                self.seat_id , 
                self.total_price , 
                self.sched_id ))