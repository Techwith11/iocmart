import Axios from "axios";

class Product {
	constructor(product) {
		this.id = product.id;
		this.name = product.name;
		this.price = product.price;
		this.images = product.images;
		this.description = product.description;
		this.category_id = product.category_id;
		this.quantity = product.quantity;
		this.categoryName = this.getCategoryName();
		this.imageUrl = this.getPrimaryImage();
		this.created_at = product.created_at;
		this.updated_at = product.updated_at;
	}

	get getCategoryName() {
		Axios.get("/v1/categories/" + this.category_id)
			.then(function(response) {
				this.category = response.data;
				return this.category;
			})
			.catch();
	}

	get isAvailable() {
		return this.quantity > 0 ? true : false;
	}

	get getPrimaryImage() {
		// TODO: Find out how the image response looks like and implement
	}
}

export default Product;
