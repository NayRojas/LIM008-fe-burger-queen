import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { FirestoreService } from 'src/app/services/firebase-service/firebase-service.service';
import { Menu, Item } from '../../menu.model';
import { ActivatedRoute, Routes, Router, NavigationEnd } from '@angular/router';
import { FirestoreService } from '../../services/firebase-service/firebase-service.service';
import { ItemsToOrderService } from '../../services/local-service/items-to-order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  counter: number;
  // Inicializo la variables vacias para llenarlas con lo que se actualice en el servicio
  // --------------------------------
  // Ahora
  products: any = [];
  ticket: Item[];
  cartTotal = 0;
  cartNumItems = 0;
  items: any;
  //----------------------------------

  // Antes
  // item: string = '';
  // price: number;


  constructor(
    // Los servicios que almacenan la logica pura 
    // Este almacena la lógica Firebase
    public firebaseService: FirestoreService,
    // Este almacena la lógica local
    private itemsToOrder: ItemsToOrderService,
    // Estos alamacenan los modulos enrutadores de @Angular
    private route: ActivatedRoute,
    private router: Router,
    ) {}
    // Antes todos estos this del constructor
    // {
    //   this.itemsToOrder.currentNumber.subscribe(numb => { this.counter = numb });
    //   this.itemsToOrder.currentItem.subscribe(product => { this.item = product });
    //   this.itemsToOrder.currentPrice.subscribe(money => { this.price = money });
    // this.itemsToOrder.currentItem.subscribe(item => { this.item = item });
    // }

  order: Menu[];
  id = this.route.snapshot.paramMap.get('id');

  // Event para obtener la ruta hija como param y que esta entre como argumento al metodo (gettingData) que traera la data de Firebase
  ngOnInit() {
    // -------------------------------------------
    // Ahora todos estos this del constructor
    this.itemsToOrder.currentTicket.subscribe(data => { this.ticket = data });
    this.itemsToOrder.currentTotal.subscribe(total => { this.cartTotal = total });
    this.itemsToOrder.currentCartNum.subscribe(num => { this.cartNumItems });
    //-------------------------------------------
    
    // Subscriptor de eventos para el enrutador permite que la ruta hija sea el parametro de la obtención de la data de Firebase ingresandola como parametro
    this.gettingData(this.id); // la llamada a este metodo de primero permite que el menu desayuno se muestre por defecto
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const menuItems = e.url.substring(e.url.lastIndexOf('/') + 1, e.url.length);
        this.gettingData(menuItems);
      }
    });
  }
  //-------------------------------------------
  // Este metodo añade el producto seleccionado a la orden
  addToCheck(item: Item){
    // Si el item existe, añade 1 a la cantidad
    if(this.ticket.includes(item)){
      this.ticket[this.ticket.indexOf(item)].quantity += 1;
    } else {
      this.ticket.push(item)
    }
    console.log('Entro a addToCheck')
    // this.calculateTotal();
  }
  // Metodo que calcula el cart total
  calculateTotal(){
    let total = 0;
    let cartNum = 0;
    // Multiplicamos el precio por la cantidad del item, lo añadimos al total
    this.ticket.forEach((item: Item) => {
      total += (item.price * item.quantity)
      cartNum += item.quantity
    })
    this.cartTotal = total;
    this.cartNumItems = cartNum;
    this.itemsToOrder.updateNumItems(this.cartNumItems);
    this.itemsToOrder.updateTotal(this.cartTotal)
  }
  syncTicket() {
    this.itemsToOrder.changeTicket(this.ticket)
  }
  // ---------------------------------------------

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

  getItem(newItem: string) {
    const addItem = newItem;
    console.log(newItem)
    // La llamada la metodo itemsToOrder actualiza el dato en el servicio para hacerlo disponible en todo el proyecto
    this.itemsToOrder.changeItem(newItem);
    console.log('entro a getItem');
  }

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