var chocolateBars=["snickers", 'hundred grand', 'kitkat','skittles']



function destructivelyAddElementToBeginningOfArray(newArray, string) {
    newArray.unshift(string)
}

function addElementToBeginningOfArray(newArray, string) {
  arrayNew=newArray
  arrayNew.unshift(string)
    return arrayNew

}
