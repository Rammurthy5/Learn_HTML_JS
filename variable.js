/* 7 data types -- undefined, null, boolean, string, symbol, number, and object */  

// 3 ways to declare a variable
import {ourFunct} from "./functions_.js";

var a = 10;
let b = 'str';
const c = 4.5;

console.log(a, b, c);
a = 'Changed A';    // can be changed
b = 'Changed B';    // can be changed
try {
    c = 'changed C';    // cannot change value of a constant
}
catch(err) {
    console.log("custom message")
}
console.log(a, b, c);

var d;
let e;
try {
    //const f;    // cannot leave const without defined
}
catch(err2) {
    console.log(err2)
}
console.log(d, e);

d = d + 'strAdded';
e = 1;
console.log(d, e);
console.log(typeof e);
console.log(e == d);
dupe = e;
console.log(e== dupe);
let k;
console.log(typeof k == "undefined");


// String methods

console.log("String Methods")

console.log("hey \n hi \t Maggie! \n EOF".length) // Length of a string
console.log("hey check the character count".indexOf("h"))
console.log("Jello World".replace("J", "H"));

console.log("Split between indexes".substr(1, 4));
console.log("Split Across the ocean".substring(1, 4));

console.log("Split Across the ocean".toLocaleLowerCase());
console.log("Split Across the ocean".toLowerCase());

console.log("Split Across the ocean".valueOf());
console.log("Split Across the ocean".repeat(2));

// Array Methods
console.log("Array Methods")
var ar = [1, 2, 3, 4];

ar.push(5, 6);
console.log(ar);

console.log(ar.reverse());
console.log(ar);
console.log(ar.pop());
console.log(ar);
console.log(ar.shift());
console.log(ar.shift(3));
console.log(ar.sort());
console.log(ar.splice(1, 3));
console.log(ar);
console.log(ar.unshift(33));
console.log(ar);
console.log(ar.values());

console.log([3, 4, 6].join(""));
console.log("hey convert this into list".split(" "));

ar.splice(0, 0, 'Zero')
ar.splice(1, 0, 'Third')
console.log(ar);
ar.splice(0, 1);
console.log(ar);

// Objects
var dic = {
    "key": "check",
    "1": "One"
}

console.log(dic.key);
console.log(dic[1]);
dic[2]= 'simple';
console.log(dic);
delete dic[1];
console.log(dic);


export { c };