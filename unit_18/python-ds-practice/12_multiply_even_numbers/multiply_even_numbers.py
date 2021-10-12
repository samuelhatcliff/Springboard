def multiply_even_numbers(nums):
    def multiply_even_numbers(nums):
    only_evens = []
    product = 1
    for num in nums:
        if num % 2 ==0:
            only_evens.append(num)
    for num in only_evens:
        product *= num
    return product
    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """
