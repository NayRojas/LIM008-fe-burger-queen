import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Menu, Order, Item } from '../../menu.model';

@Injectable({
  providedIn: 'root'
})


export class FirestoreService {

  ordersCollection: AngularFirestoreCollection<Order>
  constructor(private firestore: AngularFirestore) {}

  getMenu(typeMenu: string) {
    return this.firestore.collection('Menu', ref => ref.where('type', '==', typeMenu)).snapshotChanges();
    // return this.firestore.collection('Menu').snapshotChanges()
  }

  getOrders() {
    return this.firestore.collection('Orders', ref => ref.orderBy('orderNumber', 'desc')).snapshotChanges();
  }

  pushOrders(itemList: Item[], total: number, cartNumItems: number) {
    const date = Date.now().toString();
    console.log(date)
    const ticket: Order = {orderNumber: date, items: itemList, cartTotal: total, cartNumItems: cartNumItems};

    return this.ordersCollection.add(ticket);
  }
}


// getMenuRestoDelDia() {
//   return this.firestore.collection('Menu').where('type', '==', 'resto del día');
//   // return this.firestore.collection('Menu').snapshotChanges();
// }

// export class FirestoreService {
//   title = 'my-app';
//   items: Observable<any[]>;
//   constructor(db: AngularFirestore) {}
  // getMenu() {
  //   return this.firestore.collection('Menu').snapshotChanges();
  // }
  
  // getOrders() {
  //   return this.firestore.collection('Orders').snapshotChanges();
  // }
// }

// export class FirebaseServiceService {
//   title = 'my-app';
//   items: Observable<any[]>;
//   constructor(db: AngularFirestore) {
//   this.items = db.collection('Menu').valueChanges();
//   console.log(this.items);
//   }
// }
