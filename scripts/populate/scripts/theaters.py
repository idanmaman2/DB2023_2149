import requests
import random
from util import mycursor,mydb
cities = {
    u"ירושלים",
    u"תל אביב",
    u"רחובות",
    u"חיפה",
    u"באר שבע",
    u"אילת",
} 
class street : 
    def __rtl__(st:str):
        return " ".join(list(map(lambda x : x[::-1] ,st.split(" ")))[::-1])
    def __init__(self, name , region ,city): 
        self.name = name 
        self.region = region 
        self.city = city 
    @property
    def namertl(self):
        return street.__rtl__(self.name)
    @property
    def regionrtl(self):
        return street.__rtl__(self.region)
    @property
    def cityrtl(self):
        return street.__rtl__(self.city)
    def __str__(self): 
        return f"""
        {self.namertl} => name 
        {self.regionrtl} => region 
        {self.cityrtl} => city 
        """
        
        
streets = [] 
for city in cities : 
    res = requests.get(u"""https://data.gov.il/api/3/action/datastore_search?resource_id=bf185c7f-1a4e-4662-88c5-fa118a244bda&limit=30&q=%s"""%city).json()
    street_json = random.choice(res["result"]["records"])
    st= street(street_json["street_name"],street_json["region_name"],street_json["city_name"])
    print(st)
    try : 
        mycursor.execute("""INSERT INTO `theater`( `street_name`, `city_name`, `region_name`, `id`) 
                         VALUES (%s,%s,%s,NULL)""",
                         (st.name , st.city,st.region))
    except : 
        print("FAILED TO INSERT ",st)

mydb.commit()