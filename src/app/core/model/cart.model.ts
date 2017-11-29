export interface Item {
  price: number;
  title: string;
  description: string;
}

export class Cart {
  cartItems: CartItem[] = [];

  totalHT(): number {
    return this.cartItems.reduce((sum, ci) => (sum + ci.amount()), 0);
  }

  totalTTC(): number {
    return this.cartItems.reduce((sum, ci) => (sum + ci.amount()), 0);
  }
}

export class CartItem {
  constructor(public item: Item, public quantity: number) {
  }

  amount(): number {
    return this.item.price * this.quantity;
  }
}
