// function Person(name, age, address) {
// 	if (this.constructor == Person) {
// 		throw "can not take an object from an abstract class";
// 	}
// 	this.name = name;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.trackName = "dotnet";
// Person.prototype.display = function () {
// 	throw "Method is not implemented";
// };

// function User(name, age, address, password) {
// 	Person.call(this, name, age, address);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User; // Person
// User.prototype.generatePassword = function () {
// 	console.log(`${this.password.toUpperCase()}$%$#${this.age}`);
// };

// User.prototype.display = function () {
// 	console.log(`${this.name} ${this.age} ${this.password}`);
// };
// var myUser = new User("hoda", 20, "alex", "MONA");

// myUser.display();
// // var p1 = new Person("ali", 30, "alex"); //

// //myUser.display();
// //myUser.generatePassword();

// //console.log(Person.prototype);
// // var p1 = new Person("ali", 25, "alex");

// // var p2 = new Person("mona", 20, "banha");

// // console.log(p1.trackName);

// // console.log(p1.__proto__.__proto__.__proto__);

// // console.log(p1.toString()); //

// // console.log(p2.toString());
// // console.log(p1);
// // console.log(p2);
// /**
//  * -- new -- function constructor
//  * -- create empty object
//  * -- this == empty object
//  * -- return {}
//  *
//  *
//  */

// // var product = {
// // 	name: "book",
// // };

// // product.color = "red"; //add

// // product.discount = function () {
// // 	console.log("hello");
// // };
// // console.log(product);

// // // set
// // product.name = "pen"; //override
// // console.log(product.name); // get

// //new Object();

// // console.log(Object.prototype);

// // console.log(product.__proto__ == Object.prototype);
// // console.log(person.__proto__ == product.__proto__);
// // console.log(person.__proto__ == Object.prototype);

// // var Person = {
// // 	prototype: {
// // 		trackName: "dotnet",
// // 		display: function () {
// // 			console.log("Hello");
// // 		},
// // 	},
// // };

// // var product = { name: "book" };

// // var result = Object.create(Person.prototype);

// // console.log(result);

// // function calcArea(options) {
// // 	if (options.type == "rectangle") return options.w * options.h;
// // 	if (options.type == "circle") return Math.PI * options.r * options.r;
// // }

// // console.log(calcArea({ type: "rectangle", w: 10, h: 20 }));
// // console.log(calcArea({ type: "circle", r: 1 }));

// // var product1 = { constructor: "Person" };
// // var product2 = { constructor: "User" };

// // product2 = product1; //
// // product2.constructor =

// // console.log(product2.constructor);

// function Product(name) {
// 	// private
// 	var age = 20;
// 	this.name = name;
// 	this.getAge = function () {
// 		return age;
// 	};
// 	this.setAge = function (value) {
// 		age = value;
// 	};
// }
function Product(name) {
	var age = 20; // private
	this.name = name;
	Object.defineProperty(this, "ageHandler", {
		get: function () {
			return age;
		},
		set: function (value) {
			age = value;
		},
	});
}

var p1 = new Product("book");
p1.ageHandler = 50; // set
console.log(p1.ageHandler); //

// p1.setAge(50); // set
// console.log(p1.getAge()); // set
// p1.name = "pen"; // set
// console.log(p1.name); // get

// let person = {
// 	fname: "ahmed",
// };

// Object.defineProperty(person, "color", {
// 	value: "red",
// 	writable: true,
// 	configurable: true,
// 	enumerable: true,
// });
// person.color = "green"; //override
// // delete person.color;
// console.log(person);
// // delete person.color;

// for (var key in person) {
// 	console.log(key, person[key]);
// }
// console.log(person.fname);
// person.fname = "alaa";

// delete person.fname;
// console.log(person);
