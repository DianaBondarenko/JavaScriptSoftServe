//  task1 ???
let win = window.open("https://learn.javascript.ru/", "learnjavascript/", "width=300, height=300");
//win.resizeTo(500, 500);
// setTimeout(() => function(){
//     win.resizeTo(500, 500);
// }, 2000);
//setTimeout("win.resizeTo(500, 500)", 2000);
//win.moveTo(200, 200);
setTimeout(function () {
    win.resizeTo(500, 500);
}, 2000);
setTimeout(function () {
    win.moveTo(200, 200);
}, 4000);
setTimeout(function () {
    win.close();
}, 6000);


//  task2
function changeCSS() {
    let p = document.getElementById("text");
    p.style.color = "orange";
    p.style.fontSize = "20px";
    p.style.fontFamily = "Comic Sans MS";
}
let btn = document.getElementById("btnChange");
btn.addEventListener("click", changeCSS);


//  task3
function changeBg(color) {
    document.body.style.background = color;
}
let btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click", function () {
    changeBg("blue");
});
let btnDoubleClick = document.getElementById("btnDoubleClick");
btnDoubleClick.addEventListener("dblclick", function () {
    changeBg("pink");
});
let btnClickHold = document.getElementById("btnClickHold");
btnClickHold.addEventListener("mousedown", function () {
    changeBg("brown");
});
btnClickHold.addEventListener("mouseup", function () {
    changeBg("white");
});
let linkHover = document.getElementById("linkHover");
linkHover.addEventListener("mouseover", function () {
    changeBg("yellow");
});
linkHover.addEventListener("mouseout", function () {
    changeBg("white");
});


//  task4
let list = document.getElementById("selectDelete");
let btnDelete = document.getElementById("btnDelete");

function deleteFromList() {
    list.remove(list.options.selectedIndex);
};
btnDelete.addEventListener("click", deleteFromList);


//  task5
let btnLive = document.getElementById("btnLive");

function btnPressed() {
    let p1 = document.createElement("p");
    p1.innerHTML = "I was pressed!";
    btnLive.after(p1);
}

function btnOn() {
    let p2 = document.createElement("p");
    p2.innerHTML = "Mouse is on me!";
    btnLive.after(p2);
}

function btnOut() {
    let p3 = document.createElement("p");
    p3.innerHTML = "Mouse is not on me!";
    btnLive.after(p3);
}
btnLive.addEventListener("click", btnPressed);
btnLive.addEventListener("mouseover", btnOn);
btnLive.addEventListener("mouseout", btnOut);


//  task6
let p = document.createElement("p");
p.innerHTML = "Width: " + window.innerWidth + ", Height: " + window.innerHeight;
document.body.append(p);

function windowSize() {
    p.innerHTML = "Width: " + window.innerWidth + ", Height: " + window.innerHeight;
}
window.addEventListener("resize", windowSize);


//  task7
let listCountry = document.getElementById("country");
let listCity = document.getElementById("cities");
let cur = document.getElementById("current");
let citiesGerm = ["Berlin", "Hamburg", "Munich", "Frankfurt"];
let citiesUSA = ["New-York", "Washington", "Boston", "Chicago"];
let citiesUkr = ["Kyiv", "Dnipro", "Lviv", "Odesa"];

function setSelect(select, array) {
    select.length = 0;
    for (i = 0; i < array.length; i++) {
        var opt = document.createElement("option");
        opt.textContent = array[i];
        select.options.add(opt);
        select[0].selected = true;
    }
}

function getCurrent() {
    let index = listCountry.options.selectedIndex;
    let index2 = listCity.options.selectedIndex;
    cur.innerHTML = listCountry[index].text + ", " + listCity[index2].text;
}

listCountry.addEventListener("change", function () {
    let index = listCountry.options.selectedIndex;
    switch (listCountry[index].text) {
        case "Germany":
            setSelect(listCity, citiesGerm);
            break;
        case "USA":
            setSelect(listCity, citiesUSA);
            break;
        case "Ukraine":
            setSelect(listCity, citiesUkr);
            break
    }
});
listCountry.addEventListener("change", getCurrent);
listCity.addEventListener("change", getCurrent);