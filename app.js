//Comment
/*
Multi
Line
*/
a = 3.14;
const b = "lol";
let c = 0;
c = 0;
c += 1;
c++;
console.log("Hello Javascript");

//value or data types
{
console.log("Hello form Javascript!");
console.log("Let's do some math...");
console.log(4 + 7);
console.log(12 / 0);
console.log("Goodbye");
console.log(a);
console.log(b);
console.log(c);
//const d = 9;error
}
//console.log(d);error
const country = "France";
console.log(`I live in ${country}`) //show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x+ y}`); //show "3 + 7 = 10"
console.log(4+5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2;
console.log(g);
const h = "5";
console.log(h + 1);
const i = Number(h);
console.log(i + 1);
const j = 6;
console.log("5" + String(j));
const k = "dog";
console.log(Number(k));
let num = 0;
let str = "0";
console.log(num === num); //ture
console.log(str === str); //true
console.log(num === str); //false
console.log(str === num); //false
console.log(num == str); //true
console.log(str == num); //true
//SWITCH
const z = "def";
switch (z) {
    case "abc":
        console.log("z = #1");
        break;
    case "def":
        console.log("z = #2");
        break;
    default:
     console.log("otherwise");
}
    for (let i = 1; i <= 5; i++) {
        console.log(i); // OK
    }
    console.log(i); // Error: the i variable is not visible here