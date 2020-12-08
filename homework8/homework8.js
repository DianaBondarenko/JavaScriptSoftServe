//  task1
function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
        console.log("String starts with uppercase character");
    } else {
        console.log("String doesn't start with uppercase character ");
    }
}
upperCase("regexp");
upperCase("RegExp");


//  task2
function checkEmail(email) {
    let regexp =/^[A-Za-z0-9]+(_-\.!#\$%&'\*\+-\/=`{\|}~\?\^)*[A-Za-z0-9]+@[a-z0-9-]{2,}\.[a-z]{2,4}$/;
    return regexp.test(email);
}
checkEmail("Qmail2@gmail.com");  // true


//  task3
let headers = document.querySelectorAll("h2.head");
console.log(headers);
for (let h of headers) {
    h.style.background = "green";
    let hInner = h.children;
    for (hIn of hInner) {
        if (hIn.className == "inner") {
            hIn.style.fontSize = "35px";
        }
    }
}


//  task4
let checkboxes = document.querySelectorAll("#checkboxes input");
for (let i=0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function(){
        let n = 0;
        for (let ch of checkboxes) {
            if (ch.checked) {
                n++;
            }
            if (n >= 3 ) {
                for (let ch of checkboxes) {
                    ch.disabled = true;
                }
            }
        }
  });
}


//  task5
function swap(str) {
    let arr = str.split(" ");
    return arr[1] + " " + arr[0];
}
swap("Java Script");


//  task6
function checkCard(card) {
    let regexp = /\d{4}-?\d{4}-?\d{4}-?\d{4}/;
    return regexp.test(card);
}
checkCard("9999-9999-9999-9999");  // true


//  task7
function checkEmail(email) {
    let regexp =/^[A-Za-z0-9]+[A-Za-z0-9_]*-?[A-Za-z0-9_]*@[a-z0-9-]{2,}\.[a-z]{2,4}$/;
    if (regexp.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is incorrect!");
    }
}
checkEmail("my_mail@gmail.com");  
checkEmail("#my_mail@gmail.com");  
