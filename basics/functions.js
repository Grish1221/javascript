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

// console.log(calCartPrice(1 ,34));

const user={
   name: "grish",
   age: 19,
   message: function(){
       console.log(`Hello, ${this.name}`);
       console.log(this);
   }
}

// user.message();
// user.name="naitik";
// user.message();
// console.log(this);

// var my_func = function(){
//     name: "grish",
//     console.log(this);
// }

// my_func();

// var my_func1 = () => {
//     name: "grish",
//     console.log(this);
// }

// my_func1();

const arrowFunc = (num1, num2) => {
    return num1+num2;
}
console.log(arrowFunc(2,3));

const arrowFunc2 = (num1, num2) => (num1+num2);

console.log(arrowFunc2(3,3));

const arrowFunc3 = () => ({name: "Naitik"});

console.log(arrowFunc3());