var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, string) {
    [string,...newArray]
    return newArray

}

function destructivelyAddElementToBeginningOfArray(newArray, string) {
    newArray.unshift(string)
    return newArray
}

function addElementToEndOfArray (newArray, string) {
    [newArray,...string]
    return newArray

}

function destructivelyAddElementToEndOfArray(newArray, string) {
    newArray.push(string)
    return newArray
}
