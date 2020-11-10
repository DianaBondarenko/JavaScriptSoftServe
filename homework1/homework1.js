//  task2
console.log("Bondarenko");

//  task3
let age = prompt("Please enter your age: ", "20");
let isStudent = true;
alert("Your age is " + age +"\nThe fact that you're a student is "+isStudent);
isStudent = age;
alert("age = "+age);
alert("isStudent = "+isStudent);

//  task4
let student = {
    String: "Diana",
    Number: 19,
    Boolean: true,
    Null: null,
    Undefined: undefined
}

//  task5
let isAdult = confirm("Are you already 18 y.o.?");
console.log(isAdult);

//  task6
let name = "Diana";  //string
let lastName = "Bondarenko";  //string
let group = "Lv-548.JS Core";  //string
let yearOfBirth = 2001;  //number
let isMarried = false;  //boolean
console.log(yearOfBirth);
console.log(isMarried);
console.log(name);
console.log(lastName);
console.log(group);
let nullVar = null;
let undefinedVar;
console.log(typeof nullVar);  //object
console.log(typeof undefinedVar);  //undefined

//  task7
let login = prompt("Please enter your login: ", "userexample");
let email = prompt("Please enter your e-mail: ", "example.gmail.com");
let password = prompt("Please enter your password: ");
alert(`Dear ${login}, your e-mail is ${email}, your password is ${password}`);

//  task8
let secondsInHour = 60*60;
let secondsInDay = secondsInHour*24;
let secondsInMonth = secondsInDay*30;
document.write(`There are ${secondsInHour} seconds in an hour, ${secondsInDay} seconds in a day 
and ${secondsInMonth} seconds in a month`);