
class Costumer : 
    def __init__(self, first_name, last_name , email , password : str  ,  id ) : 
        self.first_name = first_name 
        self.last_name = last_name 
        self.id = id 
        self.email = email 
        self.password = password #please enter hashed one , dont be dumb
    def __str__(self): 
        return f""" 
        {self.first_name} => first_name 
        {self.last_name} => last_name 
        {self.id} => id 
        {self.email} => email 
        {self.password} => password 
        """
    def __iter__(self): 
        """(`first_name`, `last_name`, `id`, `email`, `password`)"""
        return iter((self.first_name,
                     self.last_name , 
                     self.id , 
                     self.email , 
                     self.password))