import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientInformationComponent } from './components/client-information/client-information.component';
import { MenuComponent } from './components/menu/menu.component';

// import { input-name } from './input-name.service';

import { FooterComponent } from './components/footer/footer.component';

import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrderResumeComponent } from './components/order-resume/order-resume.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { BrandWelcomeComponent } from './components/brand-welcome/brand-welcome.component';
import { WaitressGetNameComponent } from './components/waitress-get-name/waitress-get-name.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { NotFoundComponent } from './pages/core/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientInformationComponent,
    MenuComponent,
    FooterComponent,
    OrdersPageComponent,
    OrderResumeComponent,
    OrderItemsComponent,
    BrandWelcomeComponent,
    WaitressGetNameComponent,
    InitPageComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
