
import requests
import random
from util import mycursor,mydb
from objects.theater import Theater
from objects.street import Street
import requests 
from bs4 import BeautifulSoup , Tag 
import math 
import os 
cities = {
    u"ירושלים",
    u"תל אביב",
    u"רחובות",
    u"חיפה",
    u"רעננה",
    u"אילת",
} 


def getTile(name): 
    def translate(lat , lon ,zoom):
        n= 2 ** zoom 
        resX = math.floor(n * ((lon +180) /360))
        resY = math.floor(n * (1 - (math.log(math.tan(math.radians(lat)) + 1  / math.cos(math.radians(lat)) ) / math.pi )) / 2 )
        return zoom , resX , resY 
    res = requests.post(url=f"https://www.openstreetmap.org/geocoder/search_osm_nominatim?query={name.replace(' ','+')}" , 
             headers={
                 "cookie": "_osm_session=99d33370fe66d5ebb82cc1c4fae491f3; _osm_totp_token=869384; _pk_ref.1.cf09=%5B%22%22%2C%22%22%2C1685978987%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D; _pk_id.1.cf09=b3a1c13386aaba73.1685978987.; _pk_ses.1.cf09=1; _osm_location=34.9882|32.7641|16|M"
                ,"origin":"https://www.openstreetmap.org" ,
                 "x-requested-with" :"XMLHttpRequest",
             } , 
             data={"zoom":"16"
                   ,"minlon":"34.98338699340821",
                   "minlat":"32.75699962691665",
                   "maxlon":"34.993000030517585",
                   "maxlat":"32.771182119706424",
                   "authenticity_token":"T67qAGHx_K1jxQbV6adCqfOuo-jvTZxAeR4EH7-5JzTSI8MRQb2g8-Qia0w2EV8_sC71x3Z0HYsoOS3Q-BF1EQ"}
             )
    xml = res.text
    b = BeautifulSoup(xml, "html.parser")
    return b.ul.li.a["data-lat"] ,b.ul.li.a["data-lon"] 



streets = [] 
for city in cities : 
    res = requests.get(u"""https://data.gov.il/api/3/action/datastore_search?resource_id=bf185c7f-1a4e-4662-88c5-fa118a244bda&limit=30&q=%s"""%city).json()
    street_json = random.choice(res["result"]["records"])
    st= Street(street_json["street_name"],street_json["region_name"],street_json["city_name"])
    th = Theater(st , None)
    try : 
        mycursor.execute("""INSERT INTO `theater`( `street_name`, `city_name`, `region_name`, `id` , `lat` , `lon`) 
                         VALUES (%s,%s,%s,%s,%s,%s)""",
                         tuple(th) + getTile(th.street.city + " " + th.street.name) )
    except : 
        print("FAILED TO INSERT ",st)

mydb.commit()