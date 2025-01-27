let person = {
	fname: "ali",
	age: 25,
	color: "red",
};

var keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
let result = entries.map((item, index) => {
	return { id: index, prop1: item };
});

console.log(result);
// Object.assign
// let person1 = { fname: "ahmed", age: 25 };
// let person2 = { color: "red", age: 55 };
// let result = Object.assign(person1, person2, { gender: "male" });
// console.log("person1 :", person1);
// console.log("person2 :", person2);

// console.log(result);
// let person1 = { fname: "ahmed", age: 25 };
// let person2 = { color: "red", age: 55 };
// let result = Object.assign({}, person1, person2, { gender: "male" });
// console.log("person1 :", person1);
// console.log("person2 :", person2);

// console.log(result);
function showData(options = {}) {
	let defaultValues = {
		fname: "default Values",
		age: "default Age",
		address: "Default Address",
	};
	Object.assign(defaultValues, options);
	console.log(`fname=${defaultValues.fname}
       age=${defaultValues.age}
       address=${defaultValues.address} `);
}

showData();
showData({ fname: "ahmed", age: 20, address: "alex" });
showData({ fname: "mona" });
// function first() {
// 	console.log("First");
// 	second();
// 	console.log("Third");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After setTimeout ");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");
// console.log("End");

// setTimeout( () => {
//     console.log("First")
// }, 2000 )

// setTimeout( () => {
//     console.log("Second")
// }, 1000 )

// console.log("End")

// var products; //

// setTimeout(() => {
// 	products = [100, 200, 300]; //
// 	setTimeout(() => {
// 		let product = {
// 			id: products[0],
// 			name: "book",
// 			price: 200,
// 		};
// 		setTimeout(() => {
// 			var price = product.price;
//             console.log( price );

// 		}, 500);
// 	}, 1000);
// }, 2000);

// function mearn(supName) {
// 	console.log("Welcome mearn");
// 	console.log("Your Supervisor : ", supName);
// }

// let dotnet = (x) => {
// 	x(function () {
// 		console.log("Hello");
// 	});
// 	console.log("From dotnet func");
// };

// function greet(myFun1, myFun2) {
// 	myFun1(myFun2);
// 	myFun2();
// }

// greet(dotnet, function (x) {
// 	console.log(x);
// 	console.log("inner function");
// });
// greet(function (name) {
// 	console.log("Hello mearn", name);
// }, "ahmed");
// console.log("------------------");
// greet(function (name) {
// 	console.log("Hello dotnet", name);
// }, "mona");

// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("inner function 1");
// 		},
// 		function () {
// 			console.log("inner fun 2");
// 		}
// 	); //
// }

// greet(function (x, y) {
// 	x();
// 	y();
// });

// pending
// fulfilled -- success
// rejected -- error
// var promise = new Promise(function (x, y) {
// 	//x({ id: 1, name: "ali" });
// 	y("Error message");
// });

// promise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Then func");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 		console.log("Catch Func");
// 	});
