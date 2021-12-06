from app import app
from unittest import TestCase
from forex_classes import Verify


class Tests(TestCase):
    '''tests to make sure homepage connects to server and that html loads'''
    def test_form(self):
        with app.test_client() as client:
            res=client.get('/')
            html = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn('<label for="from">Convert from:</label>', html)
    
    def test_currency(self):
        with app.test_client() as client:
            
            res=client.get('/check')
            data=client.get('/check', query_string={'from': 'USD', 'to':'USD', 'amount':5})
            
            print(data.get_data)            

    