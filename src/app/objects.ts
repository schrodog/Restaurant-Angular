export class Table {
  tableNo: string;
  numOfSeat: number;
  available: boolean;
}

export class OrderData {
  orderID: number;
  quantity: number;
  foodID: string;
  price: number;
}

export class OrderDisplay {
  orderID: string;
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







