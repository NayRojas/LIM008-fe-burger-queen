import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Menu } from 'src/app/menu.model';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService { constructor(private firestore: AngularFirestore) {}


  getMenu() {
    return this.firestore.collection('Menu').snapshotChanges();
    // return this.firestore.collection('Menu').where('type', '==', 'desayuno')

  }
  getOrders() {
    return this.firestore.collection('Orders').snapshotChanges();
  }

}


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
