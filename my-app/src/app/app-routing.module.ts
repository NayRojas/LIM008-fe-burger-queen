import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitPageComponent } from './pages/init-page/init-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
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

 ];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
 })

 export class AppRoutingModule {}

