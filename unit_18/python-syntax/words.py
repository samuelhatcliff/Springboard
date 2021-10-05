
def print_upper_words(wordlist):
    for word in wordlist:
        print(word.upper())


def print_upper_words(wordlist):
    for word in wordlist:
        if word.startswith('e'):
            print(word.upper())


def must_start_with(wordlist, starts_with):
    for word in wordlist:
        for letter in starts_with:
            if word.startswith(letter):
                print(word.upper())
