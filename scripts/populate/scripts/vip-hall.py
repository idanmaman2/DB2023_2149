from util import mycursor,mydb
import random

#I am not creative and lazy - deal with it ! 
feturesOptions = [
    u"""
        ספות מעור אמיתי
        כיסאות מחוממים
        מזגנים
                        
    """ , 
    u"""
    שמיכות
    פופים
    """, 
    u"""
    רמקולים משודרגים - דולבי אטמוס
    כיסאות מעור 
    """
    
    
    
]

menueOptions = [
    u""" 
    פוקפורן 
    שתייה
    """ ,
    u""" 
    פסטות : שמנת , עגבניות
    פיצות עם מגוון תוספות
    שתייה חופשית 
    ציפס
    """ ,
    u"""
    שניצלים 
    המבורגרים 
    ציפס
    שתייה 
    """
    
    
]


mycursor.execute("""SELECT id FROM `theater-hall`;""")
theaters = list(map(lambda x : x[0] , mycursor.fetchall()))
for i in random.choices(theaters,k=random.randint(len(theaters)//20,len(theaters)//10)): 
    print
    mycursor.execute("""INSERT INTO `viphall`(`menu`, `theater_hall_id`, `features`) VALUES (%s,%s,%s)""",
                         (
                             random.choice(menueOptions),
                             i,
                             random.choice(feturesOptions),
                         ) 
                         )
mydb.commit()