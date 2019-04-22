import { Component, OnInit } from '@angular/core';
import { ItemsToOrderService } from '../../services/local-service/offline-local-service';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {
  // Variables inicializan valores en componente para enviar datos.
  client = '';
  table = 1;

  constructor(private itemsToOrder: ItemsToOrderService) { }

  ngOnInit() {
  }
// Esta funcion obtiene el valor del nombre del cliente y lo envia al servicio para luego ser reutilizado donde sea necesario
  onClick(newClient: string) {
    if (newClient !== '') {
      this.itemsToOrder.getName(newClient);
    } else {
      alert('¿Como se llama nuestro cliente?');
    }
  }

// este metodo permite obtener el numero de la mesa y enviarlo al servicio para luego reutilizarlo en donde desees
  getTable(newTable: number) {
    this.itemsToOrder.getTable(newTable);
  }
}
