import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { BrandWelcomeComponent } from './components/brand-welcome/brand-welcome.component';
import { WaitressGetNameComponent } from './components/waitress-get-name/waitress-get-name.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientInformationComponent } from './components/client-information/client-information.component';
import { MenuComponent } from './components/menu/menu.component';
import { FireStoreService } from './services/firebase-service/firebase-service.service';



@NgModule({
    declarations: [
    AppComponent,
    NavbarComponent,
    ClientInformationComponent,
    MenuComponent,
    OrdersPageComponent,
    OrderItemsComponent,
    BrandWelcomeComponent,
    WaitressGetNameComponent,
    InitPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],

  providers: [FireStoreService],
  bootstrap: [AppComponent],
})
export class AppModule { }

