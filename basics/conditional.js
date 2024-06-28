// falsy values 
// 0 , -0 , null , undefined, BigInt 0n, "", NaN

//truthy values
// [], "0", " ", "false", {}, function(){}

const user = [];
if (user.length === 0) {
    // console.log("Its an empty array");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    // console.log("it is an empty object");
}

let val;
// val = 5 ?? 10;
// val = null ?? 187;
// val = undefined ?? 8;
// val = null ?? undefined ?? 0;
val = null ?? 2 ?? 0;
// console.log(val);

//for of loop
// let arr = [1 ,2 ,3 ,5 , 6];
// for (const num of arr) {
//     console.log(num);
// }

// maps
let myMap = new Map;
myMap.set(1, "Grish");
myMap.set(2, "Naitik");
myMap.set(3, "Aryan");
myMap.set(4, "Ayush");
myMap.set(5, "Khushi");

// console.log(myMap);

// for (const [key, value] of myMap) {
//     console.log(`The key is ${key} and the value is ${value}.`);
// }

let obj = new Object;
obj = {
    1: "hey",
    2: "hi"
}

// for(const [i, value] of obj){
//     console.log(`${i} => ${value}`);      doesnt work
// }

// we will use for in loop for this

// for (const key in obj) {
//     console.log(`the key is key ${key} and the value is ${obj[key]}`);
// }

let myArr = ["G", "R", "P", "K"];

// myArr.forEach(function(val){
//     console.log(val);
// }) 

// myArr.forEach( (val) => console.log(val));

// function print(anything){
//     console.log(anything);
// }

// myArr.forEach(print);


function print(item, index, arr) {
    console.log(item, index, arr);
}

// myArr.forEach(print);

let mystuff =
    [
        {
            langName: "c++",
            langFileName: "cpp"
        },
        {
            langName: "javarscript",
            langFileName: "js"
        },
        {
            langName: "python",
            langFileName: "py"
        }
    ]

    mystuff.forEach( (item) => {
        console.log(item.langFileName)
    } )