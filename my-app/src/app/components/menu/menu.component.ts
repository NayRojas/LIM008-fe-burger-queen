import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase-service/firebase-service.service';
import { Menu } from 'src/app/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  order: Menu[];
  constructor(
    public firebaseService: FirestoreService) {
      console.log('constructor');
     }

  typeMenu = 'desayuno';

  ngOnInit() {

    console.log('OnInit');
  }
  onSelectMenuType(typeMenu: string) {
    this.typeMenu = typeMenu;
    this.firebaseService.getMenu(this.typeMenu)
    .subscribe((data: any) => {
      this.order = data.map(e => {
        return { id: e.payload.doc.id, ...e.payload.doc.data() } as Menu;
      });
    });
  }
}


// export class menuType {
//   show: boolean = true;
// }
