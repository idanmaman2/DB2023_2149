import random 
from util import mycursor,mydb
import hashlib 
import binascii
from objects.costumer import Costumer 
ROWS = 10000

with open("../data/populate_passwords/passwords.txt",'w') as passwords:
    with open("../data/first_names.txt") as firstNamesFile : 
        with open("../data/last_names.txt") as lastNamesFile : 
            firstNames = tuple(map(lambda name : name.strip("\n "), firstNamesFile.readlines()))
            lastNames = tuple(map(lambda name : name.strip("\n "), lastNamesFile.readlines()))
            for i in range(ROWS): 
                fname = random.choice(firstNames).title()
                lname = random.choice(lastNames).title()
                while not random.randint(0,10): 
                    fname +=" " +random.choice(firstNames).title()
                email = f"{fname[:3].lower()}{lname[:5].lower()}{ '' if random.randint(0,2) else random.randint(0,1000)}@cinematown.com"
                password = "".join([chr(random.randint(0x21,0x79)) for i in range(8)])
                id = str(random.randint(0,999999999)).rjust(9,'0')
                cs = Costumer(fname , lname  , email , binascii.b2a_hex(hashlib.md5(password.encode('ascii')).digest()).decode() , id )                
                try:
                    print(tuple(cs))
                    mycursor.execute("""INSERT INTO `registered_costumers`(`first_name`, `last_name`, `id`, `email`, `password`) 
                                        VALUES (%s,%s,%s,%s,%s)""" , tuple(cs))
                    mydb.commit()
                except : 
                    print("FAILED")
                    continue 
                passwords.write(f"{cs.first_name},{cs.last_name},{cs.email},{cs.id} : {cs.password} : {password}\n")
