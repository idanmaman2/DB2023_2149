from objects.maintenance_job import MaintenanceJob
from objects.maintnance_workers import MaintenaceWorkers
from objects.theaters_hall import TheaterHall
import json 
from datetime import datetime,timedelta
from util import mycursor,mydb
from random import choice,sample,choices,randint

JOBS_NUM = 300
with open("../data/jobs.json") as file : 
    jobs = json.load(file)['jobs']
    mycursor.execute("SELECT * FROM `maintnance_workers`")
    workers = list(map(lambda x :MaintenaceWorkers(*x)  , mycursor.fetchall()))
    chosen_ones = sample(workers , JOBS_NUM)
    mycursor.execute("SELECT theater_id,id FROM `theater_hall`")
    halls = list(map(lambda x : TheaterHall(*x), mycursor.fetchall()))
    jobs = [  MaintenanceJob(
                             None , 
                             worker.id, 
                             (datetime.utcnow() + timedelta(days=randint(0,30))).strftime('%Y-%m-%d'), 
                             job["description"], 
                             job["name"], 
                             choice(halls).id ,) 
            for worker,job in zip(chosen_ones,choices(jobs,k=JOBS_NUM)) ]
    for job in jobs : 
        try : 
            mycursor.execute("""
                                INSERT INTO 
                                `maintenance_job`(`id`, `worker_id`, `maintance_schedule`, `job_description`, `job_title`, `hall_id`) 
                                VALUES (%s,%s,%s,%s,%s,%s)
                                """ ,tuple(job) )
            print("ENTERED %s"%job)
        except Exception as e:  
            print("ERROR %s : %s"%(job,e))
    mydb.commit()
   