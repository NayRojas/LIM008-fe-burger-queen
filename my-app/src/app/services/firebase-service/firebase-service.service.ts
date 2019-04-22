import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

// import { Menu } from 'src/app/menu.model';

@Injectable({
  providedIn: 'root'
})

export class FireStoreService {
  constructor(private firestore: AngularFirestore) {}

  getMenu(typeMenu: string) {
    return this.firestore.collection('Menu', ref => ref.where('type', '==', typeMenu)).snapshotChanges();
    // return this.firestore.collection('Menu').snapshotChanges()

  }

  getOrders() {
    return this.firestore.collection('Orders').snapshotChanges();
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
