var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, element) {
    [element, ...newArray]
    return newArray

}

function destructivelyAddElementToBeginningOfArray(newArray, element) {
    newArray.unshift(element)
    return newArray
}

function addElementToEndOfArray (newArray, element) {
    [newArray,...element]
    return newArray

}

function destructivelyAddElementToEndOfArray(newArray, element) {
    newArray.push(element)
    return newArray
}
