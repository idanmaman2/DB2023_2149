from .rtl import Rtl

class Street : 
    def __init__(self, name : str  , region : str  ,city : str ): 
        self.name = name 
        self.region = region 
        self.city = city 
    def __str__(self): 
        return f"""
        {Rtl(self.name)} => name 
        {Rtl(self.region)} => region 
        {Rtl(self.city)} => city 
        """
    def __iter__(self): 
        """( `street_name`, `city_name`, `region_name`, `id`) """
        return iter((
            self.name , 
            self.city ,
            self.region  
        )) 