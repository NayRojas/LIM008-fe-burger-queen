import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { FirestoreService } from 'src/app/services/firebase-service/firebase-service.service';
import { Menu } from '../../menu.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FireStoreService } from '../../services/firebase-service/firebase-service.service';
import { ItemsToOrderService } from '../../services/local-service/offline-local-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  btn = document.querySelector('.menu-btn');
  menu: any = [];
  pedidos = {};

  products: any = [];

  constructor(
    public firebaseService: FireStoreService,
    // Los servicios que almacenan la logica pura
    // Este almacena la lógica Firebase
    private itemsToOrder: ItemsToOrderService,
    // Estos alamacenan los modulos enrutadores de @Angular
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.firebaseService.getMenu(this.id).subscribe(menus => {
        this.menu = menus;
      });

      this.itemsToOrder.menus.subscribe(menu => {
        this.pedidos = menu;
      });
    }

  order: Menu[];
  id = this.route.snapshot.paramMap.get('id');

  // Event para obtener la ruta hija como param y que esta entre como argumento al metodo (gettingData) que traera la data de Firebase
  ngOnInit() {

    // Subscriptor de eventos
    this.gettingData(this.id); // la llamada a este metodo de primero permite que el menu desayuno se muestre por defecto
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const menuItems = e.url.substring(e.url.lastIndexOf('/') + 1, e.url.length);
        this.gettingData(menuItems);
      }
    });
  }

  // Metodo para obtener menu de Firebase
  gettingData(typeMenu: string) {
    this.firebaseService.getMenu(typeMenu)
    .subscribe((data: any) => {
      this.order = data.map((e: any) => {
        return { id: e.payload.doc.id, ...e.payload.doc.data() } as Menu;
      });
    });
  }

  askingOrder(value: any, i: any) {
    const newPedido = {
      ...value,
      id: i,
      cantidad: 1,
      totalPrice: value.price
      };
    this.itemsToOrder.getProducts(newPedido);
  }
}
