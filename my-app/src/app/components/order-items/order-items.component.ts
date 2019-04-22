import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/local-service/offline-local-service';
import { FireStoreService } from '../../services/firebase-service/firebase-service.service';


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  name: string;
  today: any;
  table: number;
  numOrder = 0 + 1;
  menuOrders: any[] = [];
  totalPrice: number;



  constructor(
    private itemsToOrder: ItemsToOrderService,
    private fb: FireStoreService) {

    this.itemsToOrder.currentName.subscribe((name: any) => { this.name = name; } );
    this.itemsToOrder.currentTable.subscribe((tab: any) => { this.table = tab; } );
    this.itemsToOrder.montoTotal.subscribe((total: number) => { this.totalPrice = total; } );
    this.itemsToOrder.menus.subscribe((menu: any) => { this.menuOrders = menu; } );
  }
  

  lessItem(event: any, cantidadNueva: number, id: any) {
    const newNumber = cantidadNueva - 1;
    this.itemsToOrder.getNewQuantity(event, newNumber, id);
  }

  moreItem(event: any, cantidadNueva: any, id: any) {
    const sum = (parseInt(cantidadNueva) + 1);
    this.itemsToOrder.getNewQuantity(event, sum, id);
  }

  getQuantity(event: any, cantidadNueva: number, id: any) {
    this.itemsToOrder.getNewQuantity(event, cantidadNueva, id);
  }

  delete(id: string) {
  this.itemsToOrder.updateProduct(id);
  }

  sendToKitChen(date: any, totalPrice: number) {
    if (confirm('¿Has verificado la orden del cliente?') === true ) {
      this.itemsToOrder.sendOrderConfirm(date, totalPrice);
      // this.menuOrders = [];
      // this.totalOrder = 0;
      this.numOrder = this.numOrder + 1;
    } else {
      alert('Tu pedido no se ha enviado a cocina');
    }
  }

  ngOnInit() {
    this.today = new Date();
  }

  getClientName() {
    const newClient = this.name;
    this.itemsToOrder.getName(newClient);
  }

  getTableNumber() {
  const newTable = this.table;
  this.itemsToOrder.getTable(newTable);
  }
}
