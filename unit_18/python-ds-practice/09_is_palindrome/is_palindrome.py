def is_palindrome(phrase):
    reverse = phrase[::-1].lower()
    lowered_phrase = phrase.lower()
    if reverse == lowered_phrase:
        return True
    else:
        return False     """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
