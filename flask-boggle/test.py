from app import app
from unittest import TestCase
from flask import session, json
from boggle import Boggle


class FlaskTests(TestCase):
    
    def test_make_board(self):
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True) 
            
            self.assertEqual(res.status_code,200)
            self.assertIn('<button id="start">Start Game</button>', html)

    def test_high_score_check(self):
        with app.test_client() as client:
            res = client.post('/score_check', json = {'score': 10})
            html = res.get_data(as_text=True) 
            
            self.assertEqual(res.status_code,200)
            res2 = client.post('/score_check', json = {'score': 5})
            data = json.loads(res2.get_data(as_text=True))
            self.assertEqual(data['highScore'], 10)
    

            
            
            

    # TODO -- write tests for every view function / feature!
 
