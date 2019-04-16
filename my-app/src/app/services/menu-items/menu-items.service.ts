import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() {
   }

   selectItem() {
     console.log('item seleccionado');
   }

}
