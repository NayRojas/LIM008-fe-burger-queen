import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu, Item } from '../../menu.model';


@Injectable({
  providedIn: 'root'
})


export class ItemsToOrderService {


  // Me ayuda a tener le valor de nuestro contador
  private numberSource = new BehaviorSubject(0);
  private nameSource = new BehaviorSubject('');
  private itemSource = new BehaviorSubject('');
  private itemPrice = new BehaviorSubject(0);
  private tableNumber = new BehaviorSubject(0);
   // ------------------------------------------------
  //ahora
  TICKET: Item[] = [];
  private ticket = this.TICKET;
  private ticketSource = new BehaviorSubject(<Item[]>(this.ticket))

  private cartTotal = 0;
  private cartTotalSource = new BehaviorSubject(0);
  private cartNumSource = new BehaviorSubject(0);

  currentTicket = this.ticketSource.asObservable();
  currentTotal = this.cartTotalSource.asObservable();
  currentCartNum = this.cartNumSource.asObservable();
  // --------------------------------------------------------------

  // Asi cambiamos el dato a traves de un observable
  currentName = this.nameSource.asObservable();
  currentNumber = this.numberSource.asObservable();
  currentItem = this.itemSource.asObservable();
  currentPrice = this.itemPrice.asObservable();
  currentTable = this.tableNumber.asObservable();

  client: string;
  table: number;
  products: string;

  constructor() { }

  // ------------------------------
  changeTicket(ticket: Item[]) {
    this.ticketSource.next(ticket)
  }

  updateTotal(total: number){
    this.cartTotalSource.next(total)
  }

  updateNumItems(num: number){
    this.cartNumSource.next(num)
  }
 // ----------------------------


  changeNumber(value: number) {
    this.numberSource.next(value);
  }

  changeItem(newItem: string) {
    this.products = newItem;
    this.itemSource.next(newItem);
  }

  changePrice(value: number) {
    this.itemPrice.next(value);
  }

  getName(newClient: string) {
    this.client = newClient;
    this.nameSource.next(newClient);
  }

  getTable(newTable: number) {
    this.table = newTable;
    this.tableNumber.next(newTable);
  }


}
