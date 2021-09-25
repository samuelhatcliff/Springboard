it('should calculate the high tax bracket', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
})

it('should calculate the low tax bracket', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(0)).toEqual(0);
})

it('should remove duplicates from array', function () {
    expect(removeDupes([1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4])
})
