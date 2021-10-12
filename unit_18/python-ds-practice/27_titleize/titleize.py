def titleize(phrase):
    lst = list(phrase.split(" "))
    new_phrase = ""
    for word in lst:
        new_word = f"{word[0].upper()}"
        for letter in word:
            if word.index(letter) > 0:
                new_word += letter.lower()
        new_phrase += f"{new_word} "
    result = new_phrase[:-1]
    return result
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
