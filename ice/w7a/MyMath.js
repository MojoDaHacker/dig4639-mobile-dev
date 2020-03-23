function Sum (a, b) {
  return a + b
}

console.log("Hello!");
console.log(Sum(2,3));
console.log(Sum(-10, -20) == -30);
console.log((Sum(-10, 'Twenty')));


var result;


function addList(arr){
  let result = 0;

  if (arr === null)
    return undefined;
  else
    arr.forEach(element => {
      result += element;
    });
  return result;
}
function divideBy(divisor,dividend){
  result = dividend / divisor;
}
function containsString(str1,str2){
  if(typeof str1 != 'string' || typeof str2 != 'string')
    return 'Both arguments must be strings!'
  else
    result
}
function reSortedNumbers(){
   
}
function adder(){
   
}

export { Sum, addList};
