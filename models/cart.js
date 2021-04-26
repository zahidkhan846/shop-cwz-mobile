class Cart {
  constructor(
    quantity,
    productPrice,
    productTitle,
    productImage,
    productDesc,
    sum
  ) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.productImage = productImage;
    this.productDesc = productDesc;
    this.sum = sum;
  }
}

export default Cart;
