class Order {
  constructor(id, cartItems, totalAmount, createdAt) {
    this.id = id;
    this.cartItems = cartItems;
    this.totalAmount = totalAmount;
    this.createdAt = createdAt;
  }
}

export default Order;
