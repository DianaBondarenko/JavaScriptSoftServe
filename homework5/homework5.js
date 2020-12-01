//  task1
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

//  way2
// function propsCount(currentObject) {
//     result = 0;
//     for (let prop in currentObject){
//         result++;
//     }
//     return result;
// }

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
console.log( propsCount(mentor) );  // 3


//  task2
let student = {
    firstName : "Diana",
    lastName : "Bondarenko",
    group : "121-18-2",
    age : 19,
    course : 3
}

function showProps(obj) {
    console.log("Keys: ");
    console.log(Object.keys(obj) );
    console.log("Values: ")
    console.log(Object.values(obj) );
}

console.log( showProps(student) );  


//  task3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return(this.surname + " " + this.name)
    }
}

class Student extends Person {
    constructor(name, surname, year){
    super(name, surname);
    this.year = year;
    }
    showFullName(middleName) {
        return( super.showFullName() + " " + middleName);
    }
    showCourse() {
        let now = new Date();
        if ( now.getMonth() >=9 ) {
            return ( now.getFullYear() - this.year +1);
        } else {
            return ( now.getFullYear() - this.year);
        }
    }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6


//  task4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        console.log( this.fullName + " salary:  " + this.dayRate * this.workingDays );
    }
    _experience = 1.2;
    showSalaryWithExperience() {
        console.log( this.fullName + " salary:  " + this.dayRate * this.workingDays * this._experience );
    }
    getSalaryWithExperience() {
        return this.dayRate * this.workingDays * this._experience ;
    }
    set setExp(value) {
        if (value < 0) throw new Error("Negative value");
        this._experience = value;
    }
    get showExp() {
        return this._experience;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);      
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);      
worker2.showSalary();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);      
worker3.showSalary();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

console.log("Sorted salary: ");
let workers = [worker1, worker2, worker3];
workers.sort(function(a, b) {
    return a.getSalaryWithExperience() - b.getSalaryWithExperience();
})
for (let worker of workers) {
    console.log( worker.showSalaryWithExperience() );
}


//  task5
class GeometricFigure {
    getArea() {
        return 0;
    }; 
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    };
}

class Triangle extends GeometricFigure {
    constructor (a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea(){
        let p = (this.a + this.b + this.c) / 2;
        return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

class Square extends GeometricFigure {
    constructor (a) {
        super();
        this.a = a;
    }
    getArea(){
        return this.a**2;
    }
}

class Circle extends GeometricFigure {
    constructor (r) {
        super();
        this.r = r;
    }
    getArea(){
        return 3.14 * this.r**2;
    }
}

function handleFigures(figures) {
    let totalArea = 0;
    for (let f of figures) {
        if (f instanceof GeometricFigure) {
           console.log("Geometric figure: " + f.toString() + " - area: " + f.getArea());
            totalArea += Number(f.getArea());
        }
    }
    return totalArea.toFixed(3);
}

const figures = [new Triangle(4, 5, 8), new Square(7), new Circle(5)];
console.log("Total area:  " + handleFigures(figures));
