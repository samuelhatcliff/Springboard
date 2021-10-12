def same_frequency(num1, num2):
    lst1 = list(map(int, str(num1)))
    lst2 = list(map(int, str(num2)))
    sorted1 = sorted(lst1)
    sorted2 = sorted(lst2)
    if sorted1 ==sorted2:
        return True
    return False
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
