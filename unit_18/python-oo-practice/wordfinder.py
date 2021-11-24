"""Word Finder: finds random words from a dictionary."""

import random

class WordFinder:
    def __init__(self, file):
        file = open(file,'r')
        self.words = self.convert_to_list(file)
        print(f"{len(self.words)} words read")   
    
    def convert_to_list(self, file):
        lst = []
        for word in file:
            lst.append(word)
        return lst

    def select_random(self):
        choice= random.choice(self.words)
        return choice
    
    def random(self):
        find_word = self.select_random()
        result = find_word.replace('\n', "")
        return result
    


class TheRandomWordFinder(WordFinder):
    def __init__(self, file):
        file = super().__init__(file)
        
    def parse(self):
        lst = super().convert_to_list(file)
        for word in lst:
            if word.startswith('#') == False:
                lst.append(word.strip())
                return lst
            
    def random(self):
        result = super().random()
        return result 
    