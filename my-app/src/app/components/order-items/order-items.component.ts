import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/local-service/items-to-order.service';


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  counter: number;
  name: string;
  table: number;
  constructor(private itemsToOrder: ItemsToOrderService) {
    this.itemsToOrder.currentNumber.subscribe(numb => {
      this.counter = numb;
    });
    this.itemsToOrder.currentName.subscribe(name => {
      this.name = name;
    });
    this.itemsToOrder.currentTable.subscribe(tab => {
      this.table = tab;
    });

  }

  ngOnInit() {
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
  console.log('Hola');
  }
}
