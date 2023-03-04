from util import mycursor,mydb
import random
import datetime
SHCEDULES = 3000 
THISWEEK = 300 
mycursor.execute("SELECT id FROM `movies`;")
movies =list(map(lambda mv : mv[0] ,mycursor.fetchall()))
mycursor.execute("SELECT id FROM `theater_hall`;")
theaters =list(map(lambda x : x[0],mycursor.fetchall()))
mycursor.execute("""SELECT id FROM `movies` WHERE movies.reales_date > "2015-1-1";""")
movies2015 = list(map(lambda mv : mv[0] ,mycursor.fetchall()))
for i in range(SHCEDULES):
    try : 
        mycursor.execute("""INSERT INTO `schedule`(`id`, `mv_id`, `theater_hall_id`, `time`, `3D`) 
                        VALUES (NULL,%s,%s,%s,%s)""",
                        ( random.choice(movies) , random.choice(theaters) , datetime.datetime.now() - datetime.timedelta(days=random.randint(0,365) , hours = random.randint(0,24)   ) ,not bool(random.randint(0,10)))
                        
                        )
    except : 
        print("DUPLICATE @1 ")
        

for i in range(THISWEEK):   
    try : 
        mycursor.execute("""INSERT INTO `schedule`(`id`, `mv_id`, `theater_hall_id`, `time`, `3D`) 
                        VALUES (NULL,%s,%s,%s,%s)""",
                        ( random.choice(movies2015) , random.choice(theaters) , (datetime.datetime.now() + datetime.timedelta(days=random.randint(0,10) , hours = random.randint(0,24)   ) ),not bool(random.randint(0,10)))
                        
                        )
    except : 
        print("DUPLICATE @2 ")
        
mydb.commit()