
export class Menu {
  id: string;
  type: string;
  name: string;
  price: number;
  category: string}

export class Orders {
  order: number;
  type: string;
  items: string;
  total: number;
  date: number;
  client: string;
  waitress: string;
}

export interface Order {
  orderNumber: string;
  items?: Item[];
  cartTotal: number;
  cartNumItems?: number;
}

export interface Item {
  id?: number;
  name: string;
  price: number;
  item_type: string;
  img_name?: string;
  img_url?: string;
  quantity: number;
}