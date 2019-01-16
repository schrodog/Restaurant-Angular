export class Table {
  tableNo: string;
  numOfSeat: number;
  available: boolean;
  masterOrderID?: number ;
}

export class Order {
  orderID: number;
  quantity: number;
  foodID: string;
  foodName: string;
  price: number;
}

export class MiniOrder {
  foodID: string;
  foodName: string;
  quantity: number;
  price: number;
}

export class FoodData {
  foodID: string;
  foodName: string;
  price: number;
  quantity: number;
  category: string;
}

export class FoodDisplay {
  foodID: string;
  foodName: string;
  price: number;
  quantity: number;
}

export class Login {
  username: string;
  password: string;
}

export enum Role {
  Waiter, Manager
}







