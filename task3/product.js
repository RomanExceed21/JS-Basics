export class Product {
	constructor(id, price) {
		this.id = id;
		this.price = price;
	}
	showProduct() {
		console.log(`Продукт с id ${this.id} имеет цену ${this.price}`);
	}
	getPrice() {
		console.log(`Цена товара: ${this.price}`)
	}
}