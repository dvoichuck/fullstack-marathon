function total(addCount, addPrice, currentTotal) {
    return currentTotal ? addPrice * addCount + Number.parseFloat(currentTotal) :
        (addCount * addPrice)
}