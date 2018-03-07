var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, element) {
    [element, ...newArray]
    return [element, ...newArray]

}

function destructivelyAddElementToBeginningOfArray(newArray, element) {
    newArray.unshift(element)
    return newArray
}

function addElementToEndOfArray (newArray, element) {
    return [newArray,...element]

}

function destructivelyAddElementToEndOfArray(newArray, element) {
    newArray.push(element)
    return newArray
}
