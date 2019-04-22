import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { FirestoreService } from 'src/app/services/firebase-service/firebase-service.service';
import { Menu } from '../../menu.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ItemsToOrderService } from '../../services/local-service/items-to-order.service';
import { FireStoreService } from '../../services/firebase-service/firebase-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  counter: number;
  item: string;
  price: number;


  constructor(
    public firebaseService: FireStoreService,
    private route: ActivatedRoute,
    private router: Router,
    private itemsToOrder: ItemsToOrderService 
    ) {
      this.itemsToOrder.currentNumber.subscribe(numb => {
      this.counter = numb;
    });
      this.itemsToOrder.currentItem.subscribe(product =>{
        this.item = product;
    });
      this.itemsToOrder.currentPrice.subscribe(money =>{
        this.price = money;
    });
    }
  order: Menu[];

  id = this.route.snapshot.paramMap.get('id');
  // prueba = this.route.snapshot.paramMap.get('id');

  // Event para obtener la ruta hija como param y que esta entre como argumento al metodo (gettingData) que traera la data de Firebase
  ngOnInit() {
    this.gettingData(this.id); // la llamada a este metodo de primero permite que el menu desayuno se muestre por defecto
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const menuItems = e.url.substring(e.url.lastIndexOf('/') + 1, e.url.length);
        this.gettingData(menuItems);
      }
    });
  }

  // metodo que permitia el cambio de la ruta hija y actualizar el param segun el fuese el menu que se seleccionase
  // onSelectMenuType(typeMenu: string) {
  //   typeMenu = this.id;
  //   console.log(this.gettingData)
  //   console.log(this.gettingData(typeMenu))
  //   this.gettingData(typeMenu);
  //   // this.prueba = this.route.snapshot.paramMap.get('id');
  //   // console.log(this.prueba);
  // }

   //  Metodo para obtener menu de Firebase
   gettingData(typeMenu: string) {
    this.firebaseService.getMenu(typeMenu)
    .subscribe((data: any) => {
      this.order = data.map((e: { payload: { doc: { id: string; data: () => Menu; }; }; }) => {
        return { id: e.payload.doc.id, ...e.payload.doc.data() } as Menu;
      });
    });
  }

  sumItem() {
    const newNumber = this.counter + 1;
    this.itemsToOrder.changeNumber(newNumber);
  }

}
