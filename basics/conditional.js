// falsy values 
// 0 , -0 , null , undefined, BigInt 0n, "", NaN

//truthy values
// [], "0", " ", "false", {}, function(){}

const user = [];
if (user.length === 0) {
    console.log("Its an empty array");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("it is an empty object");
}

let val;
// val = 5 ?? 10;
// val = null ?? 187;
// val = undefined ?? 8;
// val = null ?? undefined ?? 0;
val = null ?? 2 ?? 0;
console.log(val);