import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/items-to-order/items-to-order.service';


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  counter: number;
  datos: string;
  constructor(private itemsToOrder: ItemsToOrderService) { 
    this.itemsToOrder.currentNumber.subscribe(numb => {
      this.counter = numb;
    })
  }

  ngOnInit() {
  }

  
  lessItem(){
    const newNumber = this.counter - 1;
    this.itemsToOrder.changeNumber(newNumber);
  }
}
