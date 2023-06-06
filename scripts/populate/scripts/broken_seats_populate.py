from objects.maintenance_job import MaintenanceJob
from objects.maintnance_workers import MaintenaceWorkers
from objects.theaters_hall import TheaterHall
from util import mycursor,mydb
import random
import datetime
from objects.seat import Seat
BROKEN_SEATS = 10 
mycursor.execute("""SELECT id FROM `seats`;""")
seats = random.sample(list(map(lambda x : x[0] , mycursor.fetchall())) , k = BROKEN_SEATS)
print(seats)
mycursor.execute("SELECT * FROM `maintnance_workers`")
workers = list(map(lambda x :MaintenaceWorkers(*x)  , mycursor.fetchall()))
chosen_ones = random.sample(workers , BROKEN_SEATS)
mycursor.execute("SELECT theater_id,id FROM `theater_hall`")
halls = list(map(lambda x : TheaterHall(*x), mycursor.fetchall()))
jobs = [  MaintenanceJob(
                            None , 
                            worker.id, 
                            (datetime.datetime.utcnow() + datetime.timedelta(days=random.randint(0,30))).strftime('%Y-%m-%d'), 
                            "Reparing Seat : %s  - The Seat have a broken peace - cant be booked by client currently - urgent repair !!! "%seat, 
                             "Repair Seat - %s"%seat, 
                            random.choice(halls).id ) 
          for worker,seat in zip(chosen_ones,seats) ]
for job, seat_id in zip(jobs, seats) : 
    try : 
            print(tuple(job))
            print(seat_id)
            mycursor.execute("""
                                INSERT INTO 
                                `maintenance_job`(`id`, `worker_id`, `maintance_schedule`, `job_description`, `job_title`, `hall_id`) 
                                VALUES (%s,%s,%s,%s,%s,%s)
                                """ ,tuple(job) )
            mycursor.execute("SELECT LAST_INSERT_ID();")
            last_id  = mycursor.fetchone()[0]
            mycursor.execute("""INSERT INTO `broken_seats`(`seat_id`, `job_id`) 
                                 VALUES (%s,%s)""",(seat_id , last_id)) 
            print("ENTERED %s"%job)
    except Exception as e:  
            print("ERROR %s : %s"%(job,e))
            
  
mydb.commit()
