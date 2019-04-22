import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu, Orders, Producto } from '../../menu.model';
import { FirestoreService } from '../firebase-service/firebase-service.service';

@Injectable({
  providedIn: 'root'
})

export class ItemsToOrderService {

  public nameSource = new BehaviorSubject('');
  currentName = this.nameSource.asObservable();

  public tableNumber = new BehaviorSubject(0);
  currentTable = this.tableNumber.asObservable();

  public menuOrders = new BehaviorSubject([]);
  menus = this.menuOrders.asObservable();

  public montoTotalPedido = new BehaviorSubject(0);
  montoTotal = this.montoTotalPedido.asObservable();

  public arrayProducts: Producto[] = [];

  public order: Orders = {
    nombreDcliente: '',
    fecha: 0,
    mesa: 0,
    productos: [],
    totalPriceOrder: 0
  };

  constructor(public db: FirestoreService) { }

  getName(newClient: string) {
    this.order = {
      ...this.order,
      nombreDcliente: newClient
    };
    this.nameSource.next(newClient);
  }

  getTable(newTable: number) {
    this.tableNumber.next(newTable);
  }

  getNewTotalPrice() {
    const total = this.arrayProducts.reduce((acumulador, objeto) => {
        return acumulador + objeto.totalPrice }, 0);
    this.montoTotalPedido.next(total);
    }

  getProducts(obj: any) {
    this.arrayProducts.push(obj);
    this.menuOrders.next(this.arrayProducts);
    this.getNewTotalPrice();
  }

  getNewQuantity(obj: any, cantidadNueva: any, id: any) {
    this.arrayProducts = this.arrayProducts.map(ele => {
      if (ele.id === id) {
        const objModif = {
          ...obj,
          cantidad: parseInt(cantidadNueva),
          totalPrice: obj.price*parseInt(cantidadNueva)
        };
        return objModif;
      }
      return ele;
    });
    this.menuOrders.next(this.arrayProducts);
    this.getNewTotalPrice();
  }
  
  updateProduct(id: any) {
    this.arrayProducts = this.arrayProducts.filter(ele => {
      return (ele.id !== id);
    });
    this.menuOrders.next(this.arrayProducts);
    this.getNewTotalPrice();
    }

  sendOrderConfirm(date: any, totalOrder: number) {
    const currentOrden = {
      ...this.order,
      fecha: date,
      productos: this.arrayProducts,
      totalPriceOrder: totalOrder
    };
    this.db.addOrderToDB(currentOrden);
  }


}
