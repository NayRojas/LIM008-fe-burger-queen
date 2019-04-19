import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/local-service/items-to-order.service';
import { FirestoreService } from '../../services/firebase-service/firebase-service.service';
import { Item } from '../../menu.model';


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  // ---------------------------------
  ticket: Item[] = []

  cartTotal = 0;
  cartNumItems = 0;
  quantity = 0;
  // ---------------------------------

  counter: number;
  name: string;
  table: number;
  product: string;

  constructor(
    private itemsToOrder: ItemsToOrderService,
    private fb: FirestoreService) {



    this.itemsToOrder.currentNumber.subscribe(numb => { this.counter = numb });
    this.itemsToOrder.currentName.subscribe(name => { this.name = name });
    this.itemsToOrder.currentTable.subscribe(tab => { this.table = tab });
    this.itemsToOrder.currentItem.subscribe(item => { this.product = item });
  }

  ngOnInit() {
    // ---------------------------------------
    this.itemsToOrder.currentTicket.subscribe(data => this.ticket = data)
    this.itemsToOrder.currentTotal.subscribe(total => this.cartTotal = total)
    this.itemsToOrder.currentCartNum.subscribe(num => this.cartNumItems = num)
    // ---------------------------------------
  }

  addItem(item: Item) {
    if(this.ticket.includes(item)){
      this.ticket[this.ticket.indexOf(item)].quantity += 1;
    } else {
      this.ticket.push(item)
    }
    this.syncTicket();
    this.calculateTotal();
  }

  syncTicket() {
    this.itemsToOrder.changeTicket(this.ticket)
  }

  calculateTotal() {
    let total = 0;
    let cartItems = 0;

    this.ticket.forEach((item: Item) => {
      total += (item.price * item.quantity);
      cartItems += item.quantity;
    })
    this.cartTotal = total;
    this.cartNumItems = cartItems;

    this.itemsToOrder.updateNumItems(this.cartNumItems);
    this.itemsToOrder.updateTotal(this.cartTotal);
  }

  checkout(){
    if(this.ticket.length > 0){
      this.fb.pushOrders(this.ticket, this.cartTotal, this.cartNumItems);
      this.clearCart();
    }
  }
  
  clearCart(){
    this.ticket.forEach((item: Item) => {
      item.quantity = 1;
    })
    this.ticket = [];
    this.syncTicket();
    this.calculateTotal();
  }
  lessItem() {
    const newNumber = this.counter - 1;
    this.itemsToOrder.changeNumber(newNumber);
  }

  getClientName() {
    const newClient = this.name;
    this.itemsToOrder.getName(newClient);
  }

  getTableNumber() {
  const newTable = this.table;
  this.itemsToOrder.getTable(newTable);
  }

  getItem() {
    const newItem = this.product;
    this.itemsToOrder.changeItem(newItem);
    console.log('entro al ts del componente')
  }
}
