var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, element) {
    return [element, ...newArray]

}

function destructivelyAddElementToBeginningOfArray(newArray, element) {
    newArray.unshift(element)
    return newArray
}

function addElementToEndOfArray (newArray, element) {
    return [...newArray, element]

}

function destructivelyAddElementToEndOfArray(newArray, element) {
    newArray.push(element)
    return newArray
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (newArray) {
    newArray.shift()
    return newArray
}
