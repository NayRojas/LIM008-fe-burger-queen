import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitPageComponent } from './pages/init-page/init-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ReadyToServeComponent } from './pages/ready-to-serve/ready-to-serve.component';
import { NotFoundComponent } from './pages/core/not-found/not-found.component'
// import { provideForRootGuard } from '@angular/router/src/router_module';

const appRoutes: Routes =
[
  {path: '', component: InitPageComponent},  // Este será el path anonimo
  {path: 'ordenes/:id', component: OrdersPageComponent,
  children: [
    { path: 'desayuno', component: OrdersPageComponent },
    { path: 'resto-del-dia', component: OrdersPageComponent }
  ]
},
  {path: 'ordenes', component: OrdersPageComponent},
  {path: 'listoparaservir', component: ReadyToServeComponent},
  {path: 'historial', component: HistorialComponent}
  // {path: '**', component: NotFoundComponent}
 ];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
 })

 export class AppRoutingModule {}

