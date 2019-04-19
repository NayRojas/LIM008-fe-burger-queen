import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/local-service/items-to-order.service';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {

  // Estas variables inicializan los valores en el componente al cual se enviaran los datos. El 0 y el string vacio nunca se ven acá sino en el componente en el que deseas verlo reflejado
  client: string = '';
  table = 0;

  constructor(private itemsToOrder: ItemsToOrderService) { }

  ngOnInit() {
  }
// Esta funcion obtiene el valor del nombre del cliente y lo envia al servicio para luego ser reutilizado donde sea necesario
  onClick(newClient: string) {
    if( newClient !== '') {
      this.itemsToOrder.getName(newClient);
    } else if (newClient === '') {
      console.log('¿Como se llama nuestro cliente?');
    }
  }

// este metodo permite obtener el numero de la mesa y enviarlo al servicio para luego reutilizarlo en donde desees
  getTable(newTable: number) {
    console.log(newTable)
    // this.table = newTable;
    this.itemsToOrder.getTable(newTable);
    // console.log(this.table);
  }
}
