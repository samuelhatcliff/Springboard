import arithmetic 
from unittest import TestCase


class AdditionTestCase(TestCase):
    def test_adder(self):
        assert arithmetic.adder(2,3) == 9
    def test_adder_2(self):
        self.assertEqual(arithmetic.adder(2,2),0)