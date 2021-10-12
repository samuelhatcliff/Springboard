def flip_case(phrase, to_swap):
    def flip_case(phrase, to_swap):
    flipped = ""
    if to_swap.islower() == True:
        for letter in phrase:
            if letter == to_swap:
                flipped +=letter.upper()
            elif to_swap.upper() == letter:
                flipped += letter.lower()
            else: 
                flipped += letter
    else:
        for letter in phrase:
            if letter == to_swap:
                flipped += letter.lower()
            elif to_swap.lower() == letter:
                flipped += letter.upper()
            else: 
                flipped += letter
    return flipped
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
