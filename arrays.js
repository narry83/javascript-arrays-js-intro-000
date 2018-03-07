var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, string) {
    [string,...arrayNew]
    return arrayNew

}

function destructivelyAddElementToBeginningOfArray(newArray, string) {
    newArray.unshift(string)
    return newArray
}

function addElementToEndOfArray (newArray, string) {
    [arrayNew,...string]
    return arrayNew

}

function destructivelyAddElementToEndOfArray(newArray, string) {
    newArray.push(string)
    return newArray
}
