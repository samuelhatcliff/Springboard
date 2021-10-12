def capitalize(phrase):
    lst = list(phrase.split(" "))
    new_phrase = ""
    for word in lst:
        new_word = f"{word[0].upper()}"
        for letter in word:
            if word.index(letter) > 0:
                new_word += letter
        new_phrase += f"{new_word} "
    result = new_phrase[:-1]
    return result
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
