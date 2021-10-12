def sum_up_diagonals(matrix):
    tlbr= 0
    bltr = 0
    x = len(matrix[0])
    
    for num in range(x):
        tlbr += matrix[num][num]
        bltr += matrix[num][x-num-1]
    return tlbr + bltr
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
