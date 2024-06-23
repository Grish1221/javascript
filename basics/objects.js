mySym = Symbol("key");
user = {
    name: "grish",
    age: 19,
    gender: "female",
    isLoggedIn: true,
    [mySym]: "mykey",
    "rollNo": "2301EE12"
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user[mySym]);
// console.log(user["rollNo"]);

// Object.freeze(user);
user.rollNo = "2301EC15";
// console.log(user);

user.greetings = function(){
    console.log(`Hello ${this["name"]}` );
}

// user.greetings();

let newUser = {
    username: {
    fullname: {
       firstname: "grishmita",
       lastname: "agrawal",
      }
    },
    roll: 12,
}

// console.log(newUser.username.fullname.firstname);

let obj1 = {
    1: "a",
    2: "b"
}
let obj2 = {
    3: "c",
    4: "d"
}

// let obj3 = Object.assign({}, obj1, obj2);
// let obj3 = {obj1, obj2};
let obj3 = {... obj1, ... obj2};
// console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("rollNo"));