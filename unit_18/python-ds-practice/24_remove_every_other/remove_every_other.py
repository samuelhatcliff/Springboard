def remove_every_other(lst):
    new = []
    for item in lst:
        if lst.index(item) % 2 == 0:
            new.append(item)
    return newReturn a new list of other item.

