from objects.part_supplies import PartSupplies
from objects.part import Part
from objects.maintenance_job import MaintenanceJob
from random import choices,randint
from util import mydb,mycursor
PARTS_SUPPLIES_NUM = 1000 
mycursor.execute("SELECT * FROM `part`")
parts = list(map(lambda  x : Part(*x) , mycursor.fetchall()))
mycursor.execute("SELECT * FROM `maintenance_job`")
jobs = list(map(lambda x : MaintenanceJob(*x) , mycursor.fetchall()))
parts_supplies =  [ PartSupplies(part.id , quantity, randint(0,300) * quantity ,job.id   ) 
                   for quantity , job , part in 
                   zip(
                       choices(range(1,10) ,k = PARTS_SUPPLIES_NUM)  ,
                       choices(jobs ,k = PARTS_SUPPLIES_NUM) , 
                       choices( parts , k = PARTS_SUPPLIES_NUM)
                    )]
for part_supply in parts_supplies : 
    try : 
        mycursor.execute("""
                            INSERT INTO `part_supplies`(`part_id`, `quantity`, `cost`, `job_id`) 
                            VALUES (%s,%s,%s,%s)
                            """ , tuple(part_supply))
        print("ENTERED %s"%part_supply)
    except Exception as e : 
        print("ERROR %s : %s"%(part_supply,e))
mydb.commit()