/**
 * var
 * ---------------------
 * -- reassign values with differnt datatypes
 * -- redeclare
 * -- Hoisting
 * -- added to window object
 * -- function scope
 *--------------------------------------
 let 
 -----------------------------------------
    == reassign 
    == can't redeclare
    == Can't be Hoisted
    == not added to window object
    == block scope
 --------------------------------------------
const
 -----------------------------------------
    == can't reassign 
    == can't redeclare
    == Can't be Hoisted
    == not added to window object
    == block scope
 --------------------------------------------
 */

// let fname = "ahmed";
// console.log(window.fname); // undefined
// TDZ
// console.log(fname); // Error
// // let fname = "mona";
// console.log(fname);
// let fname = "alaa"; // Error
// let fname = "mona";
// fname = "ahmed";
// fname = 10;
// fname = true;
// console.log(fname);
// function showData() {
// 	let trackName = "dotnet";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(trackName);
// 	}
// 	// console.log("i outside loop is :", i);
// }

// showData();

// var fname = "mona";
// console.log(window.fname);
// console.log(fname);

// const PI = 3.14;
// console.log(pi);
// const arr = ["ahmed"]; //

// arr[0] = "dotnet";
// // arr.push("mona");
// // arr = []; //
// console.log(arr);
/************************************** */
// const arr = []; //0X1223
// arr = []; //  Pointer
// arr.push("ali");
// console.log(arr);

// var fname = [];
// let arr = ["mona", "ahmed", 20, 40];

// let [, , z] = arr; //
// // let x = arr[0];
// // let y = arr[1];
// // let z = arr[2];

// console.log(z);

// let [x, y] = [10, 20, 40];

// console.log(x);
// console.log(y);
// React
// function useState(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("Hello");
// 		},
// 		30,
// 	];
// }

// let [x, y] = useState("mona"); // [10,20,30]
// y();
// Destructuring
let person = {
	fname: "Ali",
	age: 25,
	color: "red",
	products: ["book", "pen"],
};
// let { fname: fname, color: color } = person;
let { fname, color, products } = person;

// let x = person.fname;

// let y = person.age;

console.log(fname);
console.log(color);

console.log(products);
//spread Operator
// let arr1 = [10, "mona", "ahmed"];
// let arr2 = [...arr1];

// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);
// let arr = [10, 20, 50, 80, 3];

// console.log(Math.max(...arr));

// let person = {
// 	fname: "ahmed",
// 	age: 33,
// 	color: "red",
// };

// let person2 = { ...person, products: [] };

// console.log(person);
// console.log(person2);

// // rest params
// // rest params
// function showData(x, y, ...z) {
// 	console.log(z);
// 	console.log(x + y);
// }

// showData(3, 4, 6, 7, "mona");
// let [x, ...y] = ["hello", true, "ahmed", "ali"];

// console.log(x);
// console.log(y);
// default values
// function sum(x = 0, y = 0) {
// 	console.log(x + y);
// }

// sum();
/* Functions
    - built in functions
    - user defined functions
        - function statement (declaration)
        -- function expression
        -- Arrow function
        -- IIFE 
        -- callback function
        -- anonymous function
*/
/** ----------Es6 --------  */
// (function () {
// 	let fname = "alaa"; // code
// })();

// let fname = "hoda";
/**------------------------------ */
//function statement
// function sum(x, y) {
// 	console.log(x + y);
// }
// // function expression
// let add = function (x, y) {
// 	console.log(x + y);
// };
// arrow function
// let calc = (x, y) => {
// 	console.log(x + y);
// };

// Arrow function
// let sayHello = () => console.log("Hello dotnet");

// let square = (x) => x * x;

// let sum = (x = 0, y = 0) => {
// 	console.log("sum");
// 	return x + y;
// };
// let add = (x, y) => x + y;
// this -- window
// var fname = "mona";
// let person = {
// 	fname: "ali",
// 	display: function () {
// 		console.log(this); // person
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000); // window
// 	},
// };

// person.display(); // person

// new Features
// let fname = "ali";
// let key = "age";

// let color = "red";
// let person = {
// 	fname, // fname:fname
// 	[key]: 25, // age:25
// 	color, // color:red
// 	display() {
// 		console.log("hello display");
// 	},
// };

// person.display();
// console.log(person);
//let str = "hello at ITI";

/** trim include  */
// console.log(str + " " + ":)");

// var name = "dotnet";
// var i = 1;

// document.writeln("<h" + i + ">" + name + "</h" + i + ">");

// document.writeln(`<h${i}>${name}</h${i}>`);
// console.log(`${str}

//     :)

//     `);
