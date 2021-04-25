class Cart {
  constructor(
    quantity,
    productPrice,
    productTitle,
    imageUrl,
    description,
    sum
  ) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.imageUrl = imageUrl;
    this.description = description;
    this.sum = sum;
  }
}

export default Cart;
