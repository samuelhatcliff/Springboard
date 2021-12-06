
from forex_python.bitcoin import BtcConverter
from forex_python.converter import CurrencyRates
from forex_python.converter import CurrencyCodes

cr = CurrencyRates()
cc = CurrencyCodes()

class Verify():
    def __init__(self):
        self.test= "dsfad"
         
    def check_code(self, cur1, cur2):
        both = {cur1, cur2}
        for item in both:
            if cc.get_symbol(item) == None:
                return False
            else:
                return True
    
    def check_number(self, amount):
        try:
            real_number = float(amount)
            return real_number
        except ValueError: 
            return False
    
    def calc(self, cur1, cur2, v_num):
        symbol = cc.get_symbol(cur2)
        rate = cr.get_rate(cur1, cur2)
        result = round((v_num * rate), 2)
        message = f'{symbol} {result}'
        return message
        
    
    
        
     
    