import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  public createPedido: any;

  constructor(private firestore: AngularFirestore) {}

  getMenu(typeMenu: string) {
    return this.firestore.collection('Menu', ref => ref.where('type', '==', typeMenu)).snapshotChanges();
  }

  getOrders() {
    return this.firestore.collection('Orders', ref => ref.orderBy('orderNumber', 'desc')).snapshotChanges();
  }

  addOrderToDB(createdOrder: any) {
    return this.firestore.collection('Orders').add(createdOrder);
  }

}
