function getAllProducts() {
	return new Promise((resolve, reject) => {
		let products;
		setTimeout(() => {
			products = [100, 200, 300];
			products ? resolve(products) : reject("Error on Products List");
		}, 2000);
	});
}

function getProductDetails(productId) {
	let myPromise = new Promise((resolve, reject) => {
		let product = {
			id: productId,
			name: "book",
			price: 300,
			colors: ["red", "green", "blue"],
		};

		product ? resolve(product) : reject("Error on product Details");
	});

	return myPromise;
}

function getPrice(product) {
	let myPromise = new Promise((resolve, reject) => {
		var price = product.price;
		price ? resolve(price) : reject("Error on price");
	});
	return myPromise;
}

function getColors(product) {
	let myPromise = new Promise((resolve, reject) => {
		let colors = product.colors;
		colors ? resolve(colors) : reject("Colors Error");
	});

	return myPromise;
}

async function execute() {
	try {
		let products = await getAllProducts();
		let product = await getProductDetails(products[0]);
		let colors = await getColors(product);
		console.log(colors);
	} catch (error) {
		console.log(error);
	}
}

// getAllProducts()
// 	.then((products) => {
// 		return getProductDetails(products[0]);
// 	})
// 	.then((product) => {
// 		return getColors(product);
// 	})
// 	.then((colors) => {
// 		console.log(colors);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// getAllProducts()
// 	.then((products) => {
// 		console.log(products);
// 		return getProductDetails(products[1]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function getAllUsers() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		for (let i = 0; i < data.length; i++) {
			document.writeln(`<h1>${data[i].name}</h1>`);
		}
	} catch (error) {
		console.log(error);
	}
}

getAllUsers();
