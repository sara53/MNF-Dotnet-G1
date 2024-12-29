// var fname = "alaa";

// console.log(fname);
// console.log(window.fname);

// console.log(window);
// function sayHello() {
// 	console.log("Hello dotnet");
// }

// setTimeout(); //window
// window.setTimeout(); // window
// sayHello(); //window

// sayHello(); //window

// var person = {
// 	fname: "ali",
// 	age: 25,
// 	display: function () {
// 		console.log("Hello");
// 	},
// };

// person.display();
// this -- caller
// this -- window
// this -- person
// this -- window
// var fname = "ali";
// function getFname() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "mona",
// 	display: function () {
// 		getFname.call(this);
// 	},
// };

// person.display(); // person
/**
 * == ali == 5
 * == mona -- 9
 *
 *
 *
 *
 */
// var person1 = {
// 	fname: "ahmed",
// 	lname: "ali",
// 	display: function (emoji, data) {
// 		console.log(emoji + " " + this.fname + "  " + this.lname + " " + data);
// 	},
// };
// var person2 = {
// 	fname: "mona",
// 	lname: "kareem",
// };
// var result = person1.display.bind(person2);

// result(":)", "hello");

// person1.display.apply(person1, [":)", "hello"]);
// person1.display.apply(person2);

//person1.display();
// person1.display.call(person1, ":)", "Hello");
// person1.display.call(person1, );
// person1.display.call(person2);

//person2.display(); // error

// var product = {
// 	name: "book",
// 	bind: function () {
// 		return function () {
// 			console.log("hello");
// 		};
// 	},
// };
// var output = product.bind();
// output();

// var fname = "ali";

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			2000
// 		);
// 	},
// };

// person.display();
// that pattern
// var fname = "ali";

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// function getData(trackName) {
// 	var sup = "ali";
// 	return function () {
// 		console.log("Hello at iti " + trackName + sup);
// 	};
// }

// var result = getData("dotnet");

// result();

// function getArr() {
// 	var arr = [];
// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }

// /**
//  * [f,f,f] -- i = 3
//  *
//  */
// var result = getArr();
// result[0](); // 0 1 2
// result[1]();
// result[2]();
/**
 * 0
 * 1
 * 2
 * ------------------
 * 2
 * 2
 * 2
 * -------------------------
 *
 */
/**=================================== */

// var product1 = {
// 	id: 1,
// 	name: "book",
// 	price: 200,
// 	category: "school",
// 	discount: function () {},
// };
// var product2 = {
// 	id: 2,
// 	name: "book",
// 	discount: function () {},
// };
// var product2 = {
// 	id: 3,
// 	discount: function () {},
// };

// document.writeln(`<h1>Product Name : ${product1.name}</h1>`);
// document.writeln(`<p>Product price : ${product1.price}</p><hr/>`);

// document.writeln(`<h1>Product Name : ${product2.name}</h1>`);
// document.writeln(`<p>Product price : ${product2.price}</p><hr/>`);
// factory pattern
// function product(_id, _name, _price) {
// 	return {
// 		id: _id || "",
// 		name: _name || "",
// 		price: _price || "",
// 		discount: function (rate) {
// 			return this.price * rate;
// 		},
// 	};
// }

// var p1 = product(1, "book", 200);
// var p2 = product(1, "pen", 500);

// console.log(p1.discount(0.5));
// console.log(p1.discount(0.2));
