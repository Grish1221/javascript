let course = {
    courseName: "javascript in hindi",
    courseCode: "001",
    coursePrice: 999 
}

const {courseCode: code} = course;
console.log(code); 

let{coursePrice} = course;
console.log(coursePrice);