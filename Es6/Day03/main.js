// Symbol
// var x = Symbol();
// var y = Symbol();

// var Symbol.iterator= Symbol(); //
// let person = {
// 	fname: "Ali",
// 	[Symbol()]: 25, // hidden
// 	[Symbol.iterator]: function () {
// 		console.log("Hello display");
// 	},
// };

// console.log(person[Symbol.iterator]);
// let person = {
// 	fname: "ali",
// 	age: 25,
// 	color: "red",
// };

// person.gender = "male"; //
// person["display"] = function () {};

// console.log(person);
// for (let value of person) {
// 	console.log(value);
// }

//for (let value of arr) {
// 	console.log(value);
// }
// console.log("====================");
// for (let i in arr) {
// 	console.log(arr[i]);
// }

// console.log("-------------");
// for (let key in person) {
// 	console.log(key, person[key]);
// }
// iterator
// function generateEventNumber() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;

// 			if (step > 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// }
// let person = {
// 	fname: "Ali",
// 	age: 25,
// 	color: "red",
// };
// let product = {
// 	name: "book",
// 	price: 200,
// };
// person[Symbol.iterator] = evenNumbers;
// product[Symbol.iterator] = evenNumbers;
// generator
// function* evenNumbers() {
// 	for (let key in this) {
// 		yield `{${key}:${this[key]}}`;
// 	}
// }

// for (let i of person) {
// 	console.log(i);
// }
// for (let i of product) {
// 	console.log(i);
// }

// let arr = ["mona", "OS", "PD"];
// // override
// arr[Symbol.iterator] = generateEventNumber;

// for (let i of arr) {
// 	console.log(i);
// }
/**
 [Symbol.iterator] : function (){

 
	return {
		next:function(){
		
			return {
			
				value:'',
				done:false
			}
		}
	
	}
 }

*/

// let arr = ["mona", "os", "dotnet"];

// arr[Symbol.iterator] = function () {
// 	var count = 0;

// 	return {
// 		next: () => {
// 			if (count < this.length) {
// 				return {
// 					value: this[count++],
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// };

// let iter = arr[Symbol.iterator]();

// for (let value of arr) {
// 	console.log(value);
// }
// oop
// class Person {
// 	name = "ali";
// 	age = 25;
// 	constructor(name = "", age = "") {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }

// let person3 = new Person();
// let person1 = new Person("mona", 20);
// let person2 = new Person("ahmed", 53);

// person1.display();
// person2.display();
// inheritance
// class Person {
// 	constructor(name = "", age = "") {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }

// class User extends Person {
// 	// constructor Overloading
// 	constructor(name = "", age = "", password = "") {
// 		super(name, age);
// 		this.password = password;
// 	}

// 	// override
// 	display() {
// 		super.display();
// 		console.log(this.password);
// 	}

// 	generatePassword() {
// 		return `${this.password.toUpperCase()}$%^#`;
// 	}
// }

// let myUser = new User("ola", 21, "alex");

// myUser.display();
// console.log(myUser);
// class Person {
// 	#name;
// 	constructor(name = "", age = "") {
// 		this.#name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		console.log(`${this.name} ${this.age}`);
// 	}

// 	get getName() {
// 		return this.#name;
// 	}
// 	set setName(value) {
// 		this.#name = value;
// 	}
// }
// var p1 = new Person("ola", 22);
// p1.setName = "ali"; // set
// console.log(p1.getName); // get

// function Product() {
// 	let price = 200;
// }

// let product1 = new Product();
//abstract
class Person {
	constructor() {
		if (this.constructor == Person) {
			throw "Can not take an object from abstract class";
		}
	}
	display() {
		throw "Method not implemented";
	}
}

class User extends Person {
	constructor() {
		super();
	}
	display() {
		console.log("Hello");
	}
}

let myUser = new User(); //
myUser.display();
