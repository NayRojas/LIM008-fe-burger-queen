
export interface Orders {
  nombreDcliente: string;
  fecha: number;
  mesa: number;
  productos: Producto[];
  totalPriceOrder: number;
}

export interface Producto {
  id: number;
  type: string;
  name: string;
  price: number;
  category: string;
  cantidad: number;
  totalPrice: number;
}

export class Menu {
  id: string;
  type: string;
  name: string;
  price: number;
  category: string}
