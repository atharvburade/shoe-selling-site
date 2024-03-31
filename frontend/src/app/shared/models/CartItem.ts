import { shoe } from "./shoe";

export class CartItem{
  constructor(public shoe:shoe){ }
  quantity:number = 1 ;
  price: number = this.shoe.price;
}
