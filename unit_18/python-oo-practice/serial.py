
class SerialGenerator:
    def __init__(self, num):
        self.start_num = num
        self.next_num = num
    def generate(self):
        self.next_num += 1
        print (self.next_num -1)
    def reset(self):
        self.next_num = self.start_num

