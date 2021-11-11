"""Word Finder: finds random words from a dictionary."""

import random

class WordFinder:
    def __init__(self, file):
        file = open(file,'r')
        self.words = self.convert_to_list(file)
    print(f"{len(self.words)} words read")   
    
    def convert_to_list(self, file):
        return [word for word in file]

    def random(self):
        return random.choice(self.words)
