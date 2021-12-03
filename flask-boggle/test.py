from app import app
from unittest import TestCase
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):
    
    def test_make_board(self):
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True) 
            
            self.assertEqual(res.status_code,200)
            self.assertIn('<button id="start">Start Game</button>', html)
            
    #  def test_word_check(self):
    #         with app.test_client() as client:
    #         res = client.get('/word_check')
    #         html = res.get_data(as_text=True) 
            
    #         self.assertEqual(res.status_code,200)
    #         self.assertIn('<button id="start">Start Game</button>', html)
    
    def test_score_check(self):
        with app.test_client() as client:
            # with client.session_transaction() as change_session:
            #     change_session['num_times'] = 0
            res = client.post('/score_check', data= {'scgeore': 10})
            html = res.get_data(as_text=True) 
            print(html)
            self.assertEqual(res.status_code,200)
            
    

            
            
            

    # TODO -- write tests for every view function / feature!
 
