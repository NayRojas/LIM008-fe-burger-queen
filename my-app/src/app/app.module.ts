import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientInformationComponent } from './components/client-information/client-information.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchDinerComponent } from './components/lunch-diner/lunch-diner.component';
import { SandwichJamCheeseComponent } from './components/sandwich-jam-cheese/sandwich-jam-cheese.component';

import { FooterComponent } from './components/footer/footer.component';

import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { OrderResumeComponent } from './components/order-resume/order-resume.component';
import { OrderButtonComponent } from './components/order-button/order-button.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { Routes, RouterModule } from '@angular/router';
import { provideForRootGuard } from '@angular/router/src/router_module';
import { HistorialComponent } from './pages/historial/historial.component';
import { ReadyToServeComponent } from './pages/ready-to-serve/ready-to-serve.component';
import { BrandWelcomeComponent } from './components/brand-welcome/brand-welcome.component';
import { WaitressGetNameComponent } from './components/waitress-get-name/waitress-get-name.component';

const appRoutes: Routes = [
 {path: '', component: OrdersPageComponent}, // Este será el path anonimo
 {path: 'ordenes', component: OrdersPageComponent},
 {path: 'listoparaservir', component: ReadyToServeComponent},
 {path: 'historial', component: HistorialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientInformationComponent,
    MenuComponent,
    BreakfastComponent,
    LunchDinerComponent,
    SandwichJamCheeseComponent,
    FooterComponent,
    OrdersPageComponent,
    OrderHeaderComponent,
    OrderResumeComponent,
    OrderButtonComponent,
    OrderItemsComponent,
    OrderTotalComponent,
    HistorialComponent,
    ReadyToServeComponent,
    BrandWelcomeComponent,
    WaitressGetNameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
