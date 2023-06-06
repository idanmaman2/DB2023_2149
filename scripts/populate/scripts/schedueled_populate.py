from util import mycursor,mydb
import random
import datetime
SHCEDULES = 3000 
THISWEEK = 300 
MOVIESNUMBER = 30
mycursor.execute("SELECT id FROM `movie`;")
movies =list(map(lambda mv : mv[0] ,mycursor.fetchall()))
mycursor.execute("SELECT id FROM `theater_hall`;")
theaters =list(map(lambda x : x[0],mycursor.fetchall()))
mycursor.execute("""SELECT id FROM `movie` WHERE movie.reales_date > "2005-1-1";""")
movies2015 = random.sample(list(map(lambda mv : mv[0] ,mycursor.fetchall())) , k = MOVIESNUMBER)
for i in range(SHCEDULES):
    try : 
       
         mycursor.execute("""INSERT INTO `schedule`(`id`, `mv_id`, `theater_hall_id`, `time`, `3D`) 
                        VALUES (NULL,%s,%s,%s,%s)""",
                        ( random.choice(movies) , 
                         random.choice(theaters) , 
                         (datetime.datetime.utcnow() -   datetime.timedelta(days=random.randint(0,365) , hours = random.randint(0,24) ) ).strftime('%Y-%m-%d %H:%M:%S'),
                         not bool(random.randint(0,10))))
        
      
    except : 
        print("DUPLICATE @1 ")
        

for i in range(THISWEEK):   
    try : 
        mycursor.execute("""INSERT INTO `schedule`(`id`, `mv_id`, `theater_hall_id`, `time`, `3D`) 
                        VALUES (NULL,%s,%s,%s,%s)""",
                        ( random.choice(movies2015) , 
                         random.choice(theaters) , 
                         (datetime.datetime.utcnow() + datetime.timedelta(days=random.randint(0,10) , hours = random.randint(0,24)   ) ).strftime('%Y-%m-%d %H:%M:%S'),
                         not bool(random.randint(0,10)))
                        
                        )
    except : 
        print("DUPLICATE @2 ")
        
mydb.commit()