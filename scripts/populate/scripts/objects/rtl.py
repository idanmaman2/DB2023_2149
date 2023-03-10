class Rtl : 
    def __init__(self,st : str)->str : 
         self.st = st 
    def __str__(self):
        return " ".join(list(map(lambda x : x[::-1] ,self.st.split(" ")))[::-1])