//import {aa} from "./a.js";

// Functions

console.log("Functions & re-usability");

function ourFunct() {
    console.log("This function is my 1st function in JS");
}

ourFunct();
export {ourFunct};

function ourFunctWithParams(a, b) {
    console.log(`${a-b} Addition = ${a+b}`);
}

ourFunctWithParams(2, 3);

// If else if else
function ourFunctIfElse(a, b, c) {
    if (a>b>c) {
        console.log("Hey there");
    }
    else if (b>a>c) {
        console.log("Its B bruh");
    }
    else {
        console.log("Sorry");
    }
    
}

ourFunctIfElse(1,3,4);

// Switch 

function ourFunctSwitch(a, b) {
    var res = "";
    switch (a, b) {
    // switch (true) {
        //case (a===1 && b==1):
        case (1 && 1):
            console.log("its here")
            res = "its One";
            break;
        //case (a===2 && b===2):
        case (2 && 2):
            console.log("2nd");
            res = "Its B 1";
            break;
        default:
            res = "Default";
            break;
    }
    return res;
}

console.log(ourFunctSwitch(1,1));

// while
i = 0;
while (i<5) {
    console.log(i++)
}

// Do while
i = 0
do {
    console.log("Do while == " + i);
} while (i>0)

// For loop
ar = [];

for (i=0; i<5; i++) {
    ar.push(i);
}
console.log(ar);

// for Each
function doneIt(i) {
    console.log(i);
}
ar.forEach(doneIt);

//  Every
const x = xx => x < 3;

if (ar.every(x)) {
    console.log("its true");
}
else {
    console.log("False")
}

// Map

sq = x => Math.pow(x, x);

console.log(ar.map(sq));

// conversions
console.log("convert string to integer");

console.log(typeof parseInt('3'));

console.log(parseFloat(9));

// Ternary Operator ? :
console.log(0>1 ? "miracle" : 1<0?"Normal":"Fail");


// Object Freeze
const dict = {
    PI: 3.14
};
console.log(dict);
Object.freeze(dict);
dict.PI = 4.12;
console.log(dict);


// Filter
ar = [1,2,3,4, 0]

a = ar.filter(x=>x>1);
console.log(a, ar);

// reduce
ar = [1,2,3,4]

console.log(ar.reduce((x,y)=>x+y));

// Var vs Let
console.log("var allows you to declare same variable twice, let doesnt");

var a = 'hey';
var a = 1;

let b = 'he';
//let b = 'hsdjhs';   // error

console.log("Var and Let scope");
function varlet() {
    if (true) {
        let i = 'he';
        console.log(i);
    }
    console.log(i);     // throws error as LET is just limited to that block level scope.
}

function varlet1() {
    if (true) {
        var i = 'he';
        console.log(i);
    }
    console.log(i);     // works.
}


// Destructuring 
console.log("Assigning multiple values from an object to single variable");
var obj = {
    x: 'a',
    y: 1,
    z: 2
}
var {x:i, y:j, z:k} = obj;
console.log(i, j, k);   // 'a'12

console.log("Destructuring using Array");
arr = [1,2,3,4];

var [xx,yy, ,zz] = arr;       //takes 1,2, 4 -- skips past 3.

var [ , ,...arr2] = arr;   // assigns 3,4 to arr2 as an array

dd = {
    a: 1,
    b: 2,
    c: 3
};

function destruct(stat) {
    console.log("destruct using func args");
    console.log(a, b);
}

destruct(dd);


// Spread Operator [...array]
console.log("Spread operator just helps to copy the content alone and use a new reference address");

ar = [1,2,3,4];
ar1 = ar;
ar1[0] = 'potato'
console.log(ar); // prints potato at 1st index.

ar2 = [...ar1];
ar2[0] = 'spread';
console.log(ar1);   // originals doesnt change

// set gear
console.log("ways to update dynamic values to const variable")
const obj1 = {
    a: 1,
    setGear(newGear) {
        this.gear = newGear;
    }
}

obj1.setGear(4);
console.log(obj1.gear);

// Class
class FirstClass {
    constructor(name) {
        this.name = name;
    }
}

console.log("Creating an object for the class");

var f = new FirstClass("Ram");
console.log(f.name);

// getter and setter

class GetSet {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(updated) {
        this._name = updated;
        return this._name;
    }
}

g = new GetSet('Ra');
g.name;
g.name = 'Druv Sarah';
console.log(g.name);


// Export and import
console.log("we are gonna import some variable from different file and use it here");

console.log(aa);


// import *


// export default