//  task1
function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
        console.log("String starts with uppercase character");
    } else {
        console.log("String doesn't start with uppercase character ");
    }
}
upperCase("regexp");  // String doesn't start with uppercase character
upperCase("RegExp");  // String starts with uppercase character


//  task2
function checkEmail(email) {
    let regexp =/^[A-Za-z0-9]+(_-\.!#\$%&'\*\+-\/=`{\|}~\?\^)*[A-Za-z0-9]+@[a-z0-9-]{2,}\.[a-z]{2,4}$/;
    return regexp.test(email);
}
checkEmail("Qmail2@gmail.com");  // true


//  task3
// let headers = document.querySelectorAll("h2.head");
// console.log(headers);
// for (let h of headers) {
//     h.style.background = "green";
//     let hInner = h.children;
//     for (hIn of hInner) {
//         if (hIn.className == "inner") {
//             hIn.style.fontSize = "35px";
//         }
//     }
// }


//  task 3
let regexp = /d(b+)(d)/i;
console.log( regexp.exec("cdbBdbsbz") );


//  task4
// let checkboxes = document.querySelectorAll("#checkboxes input");
// for (let i=0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener("change", function(){
//         let n = 0;
//         for (let ch of checkboxes) {
//             if (ch.checked) {
//                 n++;
//             }
//             if (n >= 3 ) {
//                 for (let ch of checkboxes) {
//                     ch.disabled = true;
//                 }
//             }
//         }
//   });
// }


//  task
function swap(str) {
    let arr = str.split(" ");
    return arr[1] + ", " + arr[0];
}
swap("Java Script");  // "Script, Java"


//  task5
function checkCard(card) {
    let regexp = /\d{4}-?\d{4}-?\d{4}-?\d{4}/;
    return regexp.test(card);
}
checkCard("9999-9999-9999-9999");  // true


//  task6
function checkEmail(email) {
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9_]*-?[A-Za-z0-9_]*@[a-z0-9-]{2,}\.[a-z]{2,4}$/;
    if (regexp.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is incorrect!");
    }
}
checkEmail("my_mail@gmail.com");  // Email is correct!
checkEmail("#my_mail@gmail.com");  // Email is incorrect!


//  task7
function checkLogin(login) {
    let regexp = /^[a-z][a-z0-9\.]{1,9}$/i
    console.log( regexp.test(login) );
    let regexp2 = /[0-9]\.[0-9]|[0-9]/g;
    console.log( login.match(regexp2) );
}

checkLogin('ee1.1ret3');  // true  // ["1.1", "3"]
checkLogin('ee1*1ret3');  // false  // ["1", "1", "3"]
