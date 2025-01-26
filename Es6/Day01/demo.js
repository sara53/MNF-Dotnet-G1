/**
 * Array API
 * ----------------------
 * == find
 * == findIndex
 * == map
 * == every // and
 * == some /// or
 *
 */

//let itiTracks = ["Dotnet", "OS", "PD", "AFront"];

// var result = itiTracks.forEach((track, index, arr) => {
// 	console.log(`${track} ${index}`);
// });

// console.log(result);
// const result = itiTracks.some((track) => track.startsWith("A"));
// console.log(result);

// var result = itiTracks.map(function (track, index) {
// 	return `<div>
//         <h1>${track}</h1>
//     </div>`;
// });

// document.body.innerHTML = result[0];
// document.body.innerHTML = result[1];
// var result = arr.map(function (item, index) {
// 	return {
// 		id: index,
// 		trackName: item,
// 	};
// });

// let arr = [10, 20, 45, 60, 13]; // 45

// var result = arr.findIndex((item) => item > 35);

// console.log(result);
// function findElement(item, index, arr) {
// 	console.log("item : ", item);
// 	console.log("index : ", index);
// 	console.log("arr : ", arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 35) {
// 			return arr[i];
// 		}
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("---------------------");
// }

let products = [
	{
		id: 1,
		name: "book",
		price: 200,
		category: "school",
	},
	{
		id: 2,
		name: "pen",
		price: 100,
		category: "school",
	},
	{
		id: 3,
		name: "mouse",
		price: 100,
		category: "electronics",
	},
	{
		id: 4,
		name: "notebook",
		price: 100,
		category: "school",
	},
	{
		id: 5,
		name: "phone",
		price: 100,
		category: "electronics",
	},
];

var result = products.filter(({ name, id, price }) => {
	console.log(name);
	console.log(price);
	return false;
});

console.log(result);

// var result = products.filter((product) => {
// 	return false;
// });

// console.log(result);
// reduce
// array
