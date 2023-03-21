from enum import Enum

class Transaction : 
    class PayingMethods(Enum): 
        VISA = "VISA"
        CASH = 'CASH'
        CUPON = 'CUPON'
    
    def __init__(self,paying_method:PayingMethods,costumer_id:str,seat_id:int,total_price:int, sched_id:int ,id:int)->None: 
        self.paying_method = paying_method
        self.costumer_id = costumer_id 
        self.seat_id = seat_id 
        self.total_price = total_price
        self.sched_id = sched_id 
        self.id = id 
    
    
    def __str__(self)->str: 
        return f"""
        {self.paying_method} => paying_method
        {self.costumer_id} => costumer_id 
        {self.seat_id} => seat_id 
        {self.total_price} => total_price
        {self.sched_id} => sched_id 
        {self.id} => id 
        """
    def __iter__(self)->iter:
        """`id`, `paying_method`, `costumer_id`, `seat_id`, `total_price`, `sched_id`"""
        return iter(
            (   self.id , 
                self.paying_method.value , 
                self.costumer_id , 
                self.seat_id , 
                self.total_price , 
                self.sched_id ))