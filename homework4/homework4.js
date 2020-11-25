//  task1
function testThrow(exception) {
    try{
        throw exception;
    }
    catch(error){
        console.log("Caught: " + error);
    }
}
    
testThrow(5);
testThrow('Test');
testThrow( new Error('An error happened') );


//  task2
function calcRectangleArea(width, height) {
    
    if( isNaN(width) || isNaN(height) ) {
        throw new Error("Not a number values as parameters");
    }
    let result = width * height;
    return result;
}

try {
    let width = prompt("Enter a width: ");
    let height = prompt("Enter a height: ");
    let result = calcRectangleArea(width, height);
    alert(result);
}
catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}


//  task3
function checkAge(age) {
    if (age == 0) {
        throw new Error("The field is empty! Please enter your age.");
    }
    if(isNaN(age)) {
        throw new TypeError("You've entered not a number value!");
    }
    if (age < 14) {
        throw new Error("Sorry, but you are too young for this film screening.");
    }
    alert("Thank you! Enjoy the movie!")
}

try {
    let age = prompt("Enter your age: ");
    checkAge(age);
}
catch (exception) {
    console.log(exception.stack);
    alert(exception.message);
}


//  task4
class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
    showMonthName(month) {
        if( isNaN(month) || !Number.isInteger(month) || month < 1 || month > 12) {
            throw new MonthException("Incorrect month number");
        }
        let months = ["January", "February", "March", "April", "May", "June", "July", 
        "August", "September", "October", "November", "December"];
        return months[month - 1];
    }
}

try {
    m = new MonthException();
    console.log( m.showMonthName(10) ); // October
    console.log( m.showMonthName(159) );  //MonthException Incorrect month number
}
catch (exception) {
    console.log(exception.name +" "+ exception.message);
}


//  task5
function showUser(id) {
    if(id<0) {
        throw new Error("ID must not be negative: "+id);
    }
    function User(id) {
        this.id = id;
    }
    return new User(id);
}

function showUsers(ids){
    let correctIds = [];
    for(let i = 0; i < ids.length; i++){
        try{
            correctIds.push( showUser(ids[i]) );
        }
        catch(exception){
            console.log(exception.name + ": " + exception.message);
        }
        
    }
    return correctIds;
}
console.log( showUsers([654, 82, -18, 568]) );
