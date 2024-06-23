let addNums = function(a , b){
    // console.log(a+b); that would not store any value in result.
    return (a+b);
}
let result = addNums(2, 4);
// console.log(result);

function isLoggedIn(name="user"){
    if(!name){
     return `Please enter a valid username`;
    }   
     return `${name} just logged in.`;
}

//  console.log(isLoggedIn(""));

function calCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calCartPrice(1 ,34));