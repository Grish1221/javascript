// arr = new Array(1, 2, 3, 4, 5, 6);
// arr1 = arr.slice(1, 4);
// console.log(arr1);
// console.log(arr);
// arr2 = arr.splice(1, 4);
// console.log(arr2);
// console.log(arr);

arr1 = [1 , 2 , 3 , 4 ];
arr2 = [5, 6, 7, 8, 9];
// arr3 = arr1.concat(arr2);
//  console.log(arr3);

arr3 = [...arr1 , ...arr2];
console.log(arr3);

// arr = [1 ,2 , 3, [4, 3], 45 , [23, [9, 10], 0]];
// new_arr = arr.flat(1);
// console.log(new_arr);

// another_arr = arr.flat(2);
// console.log(another_arr);

console.log(Array.isArray("grish"));
console.log(Array.from("grish"));
a = 1; b=2; c=3;
console.log(Array.of(a,b,c));
console.log(Array.from({name: "grish"}));