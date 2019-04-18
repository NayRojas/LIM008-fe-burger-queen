import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  // Asi cambiamos el dato a traves de un observable
  currentName = this.nameSource.asObservable();
  currentNumber = this.numberSource.asObservable();
  currentItem = this.itemSource.asObservable();
  currentPrice = this.itemPrice.asObservable();
  currentTable = this.tableNumber.asObservable();

  client: string;
  table: number;

  constructor() { }

  changeNumber(value: number) {
    this.numberSource.next(value);
  }

  changeItem(value: string) {
    this.itemSource.next(value);
  }

  changePrice(value: number) {
    this.itemPrice.next(value);
  }

  getName(newClient: string) {
    this.nameSource.next(newClient);
  }

  getTable(newTable: number) {
    this.table = newTable;
    this.tableNumber.next(newTable);
    console.log('queremos arepa');
  }

}
