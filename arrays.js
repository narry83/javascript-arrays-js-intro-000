var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']


function addElementToBeginningOfArray(newArray, string) {
    arrayNew=newArray
    arrayNew.unshift(string)
    return arrayNew

}

function destructivelyAddElementToBeginningOfArray(newArray, string) {
    newArray.unshift(string)
    return newArray
}
