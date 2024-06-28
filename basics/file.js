let coding = ["codeforces", "hello world", "nodjes", "java", "dsa", "cpp"];

// let val = coding.forEach( (item) => {
//    return item;
// })

// console.log(val);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = num.filter((item) => (item > 6));
// console.log(newNum);

// let newnum = [];
// num.forEach((item) => {
//     if (item > 8) {
//         newnum.push(item);
//     }
// })
// console.log(newnum);

// let nums = num.map((item)=>(item+10));
// console.log(nums);

let newNums = num.map( (item) => item+5).map( (item) => item+2 ).filter( (item) => item<15)
// console.log(newNums);

let numbers = [1, 2, ,3 ,4 ];
// let sum = numbers.reduce( (acc, currVal)=>{
//     return acc+currVal;
// },0 )
// console.log(sum);

let sum = numbers.reduce( (acc , currVal) => (acc+currVal),0 );
console.log(sum);
