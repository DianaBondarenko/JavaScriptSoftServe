//  task1
let x = 1;
let y = 2;

let res1 = String(x) + String(y); 
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Number(Boolean(x) + String(y)); 
console.log(res4); // NaN
console.log(typeof res4); // "number"


//  task2
let number = prompt("Enter any number: ");
if (number > 0 && number % 2 == 0){
    console.log("This is a positive even number");
}
if (number % 7 == 0){
    console.log("This number is the multiple of seven");
}


//  task3
let array = [];
array[0] = 17;
array[1] = "some string";
array[2] = true;
array[3] = null;
console.log(array.length);
array[4] = prompt("Enter anything: ");
console.log(array[4]);
array.shift();
console.log(array);


// task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
let result = "";
cities.forEach(function(item, i, cities){
    if(i < (cities.length-1)){
       result += item + "*";
    } else{
        result += item;
    }    
});
console.log(result); // Rome*Lviv*Warsaw


// task5
let isAdult = prompt("Введіть, будь ласка, Ваш вік");
if(isAdult >= 18){
    alert("Ви досягли повнолітнього віку");
} else if(isAdult < 10){
    alert("Ви ще надто молоді");
} else {
    alert("Ви - підліток");
}


//  task6.1
let a = Number(prompt("Введіть першу сторону трикутника: "));
let b = Number(prompt("Введіть другу сторону трикутника: "));
let c = Number(prompt("Введіть третю сторону трикутника: "));
if(isNaN(a) || isNaN(b) || isNaN(c)){
    elert("Incorrect data");
} else if(a + b > c && a + c > b && b + c > a){
    let p = (a + b + c) / 2;
    let S = (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3);
    alert("Площа трикутника дорівнює  " + S + " кв.од.");
} else {
    alert("Такого трикутника не існує")
}

//  task6.2
if ((a**2 + b**2 == c**2) || (a**2 + c**2 == b**2) || (c**2 + b**2 == a**2)){
    alert("Трикутник прямокутний");
} else if ((a**2 + b**2 > c**2) || (a**2 + c**2 > b**2) || (c**2 + b**2 > a**2)){
    alert("Трикутник гострокутний");
} else {
    alert("Трикутник тупокутний");
}


//  task7
let now = new Date();
let hours = now.getHours();
//  way1
if (hours>5 && hours <= 11){
    alert("Доброго ранку!");
} else if (hours>11 && hours <= 17){
    alert("Доброго дня!");
} else if (hours>17 && hours <= 23){
    alert("Доброго вечора!");
} else {
    alert("Доброї ночі!");
}
//  way2
switch(true) {
    case hours > 23 || hours <= 5:
        alert("Доброї ночі!");
        break;
    case hours > 17:
        alert("Доброго вечора!");
        break;
    case hours > 11:
        alert("Доброго дня!");
        break;
    case hours > 5:
        alert("Доброго ранку!");
        break;
    default:
        alert("Вітаємо!");
}

