//  task1
let result = 1;
let arr = [2, 3, 4, 5];

//  way1
for (let i=0; i<arr.length; i++)
 {
    result *= arr[i]; 
}
console.log(result);  // 120

//  way2
result = 1;
let i=0;
while (i<arr.length){
    result *= arr[i]; 
    i++;
}
console.log(result);  // 120



//task2
for( let i=0; i<=15; i++){
    if (i%2 == 0){
        console.log(i+" is even");
    } else{
        console.log(i+" is odd");
    }
}



//  task3
function randArray(k){
    let arr =[];
    for( let i = 0; i<k; i++){
        arr[i] = Math.round(1+Math.random()*500);
    }
    return arr;
}

console.log(randArray(5));  // [328, 417, 116, 99, 295]

// or function returning a string
function randArray(k){
    let res = "";
    for( let i = 0; i<k; i++){
        if(i == (--k)){
            res += Math.round(1+Math.random()*500);
        } else {
        res += (Math.round(1+Math.random()*500) + ", ");
        }
    }
    return res;
}

console.log(randArray(5));  // 223, 218, 256, 209, 371



//  task4
function raiseToDegree(a, b){
    let result = a**b;
    return result;
}

let a = prompt("Enter an integer: ");
let b = prompt("Enter a degree: ");
if(isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)){
    alert("Incorrect data");
} else {
    alert(raiseToDegree(a, b));
}



//  task5
function findMin(){
    let min = arguments[0];
    for(let i=0; i < arguments.length; i++){
        if (arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}

console.log(findMin(12, 4.8, -7, 3.9, 19));  // -7



//  task6
function findUnique(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i!=j && arr[i] === arr[j]){
                return false;
            } 
        }
    }
    return true;
}

findUnique([1, "two", 3, 5, 6, 5]);  // false



//task7
function lastElem(arr, n){
    let result = [];

    if(n === undefined){
        result.push(arr[arr.length-1]);
        return result;
    }

    if(n > arr.length){
        result = arr;
        return result;
    }
    
    for (let i = arr.length-n; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

let array = [1, -2.5, 35, 17, 8];
console.log(lastElem(array, 2));  // [17, 8]
console.log(lastElem(array, 7));  // [1, -2.5, 35, 17, 8]
console.log(lastElem(array));  // [8]



//task8
function firstLetterToUpperCase(str){
    let result = [];
    let piece = str.split(" ");
    for( let s of piece){
        result.push(s[0].toUpperCase()+s.substr(1));
    }
    return result.join(" ");
}

const str = "i love java script";
console.log(firstLetterToUpperCase(str));  // I Love Java Script