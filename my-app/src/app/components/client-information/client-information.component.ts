import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/local-service/items-to-order.service';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {
  client: string = '';
  table = 0;

  constructor(private itemsToOrder: ItemsToOrderService) { }

  ngOnInit() {
  }

  onClick(newClient: string) {
    if( newClient !== '') {
      this.itemsToOrder.getName(newClient);
    } else if (newClient === '') {
      console.log('¿Como se llama nuestro cliente?');
    }
  }


  getTable(newTable: number) {
    // this.table = newTable;
    this.itemsToOrder.getTable(newTable);
    // console.log(this.table);
  }
}
