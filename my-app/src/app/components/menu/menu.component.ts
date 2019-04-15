import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase-service/firebase-service.service';
import { Menu } from 'src/app/menu.model';
import { ActivatedRoute, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  order: Menu[];
  constructor(
    public firebaseService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router
    ) { console.log('constructor');
  }

  id = this.route.snapshot.paramMap.get('id');

  ngAfterViewInit() {
  this.gettingData(this.id); // la llamada a este metodo de primero permite que el menu desayuno se muestre por defecto
  }
  // Event para obtener la ruta hija como param y que esta entre como argumento al metodo (gettingData) que traera la data de Firebase
  onSelectMenuType(typeMenu: string) {
    typeMenu = this.id;
    this.gettingData(typeMenu);
  }
   //  Metodo para obtener menu de Firebase
   gettingData(typeMenu: string) {
    this.firebaseService.getMenu(typeMenu)
    .subscribe((data: any) => {
      this.order = data.map((e: { payload: { doc: { id: string; data: () => Menu; }; }; }) => {
        return { id: e.payload.doc.id, ...e.payload.doc.data() } as Menu;
      });
    });
  }


}
