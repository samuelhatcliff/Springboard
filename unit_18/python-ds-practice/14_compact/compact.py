def compact(lst):
    copy = []
    for item in lst:
        if item:
            copy.append(item)
    return copy
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """
