
import requests
import random
from util import mycursor,mydb
from objects.theater import Theater
from objects.street import Street
cities = {
    u"ירושלים",
    u"תל אביב",
    u"רחובות",
    u"חיפה",
    u"באר שבע",
    u"אילת",
} 

streets = [] 
for city in cities : 
    res = requests.get(u"""https://data.gov.il/api/3/action/datastore_search?resource_id=bf185c7f-1a4e-4662-88c5-fa118a244bda&limit=30&q=%s"""%city).json()
    street_json = random.choice(res["result"]["records"])
    st= Street(street_json["street_name"],street_json["region_name"],street_json["city_name"])
    th = Theater(st , None)
    try : 
        mycursor.execute("""INSERT INTO `theater`( `street_name`, `city_name`, `region_name`, `id`) 
                         VALUES (%s,%s,%s,%s)""",
                         tuple(th))
    except : 
        print("FAILED TO INSERT ",st)

mydb.commit()