import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-waitress-get-name',
  templateUrl: './waitress-get-name.component.html',
  styleUrls: ['./waitress-get-name.component.css']
})
export class WaitressGetNameComponent implements OnInit {
  waitress: string = '';
  public activated: { ordenes: boolean }
  private router: Router;


  constructor(router: Router) { 
    this.router = router;
    this.activated = {
        ordenes: false,
    }
  }

  ngOnInit() {
    // Se pretende que la ruta inicialice desactivada
    this.activated.ordenes = this.router.isActive( "/ordenes/desayuno", false );

  }

  // Metodo para activar la ruta si el mesero ingresa su nombre correctamente
  onClick(newWaitress: string){
    if(newWaitress !== ''){
      this.getName(newWaitress)
      this.activated.ordenes = this.router.isActive( "/ordenes/desayuno", true );
    } else if(newWaitress === ''){
      this.activated.ordenes = this.router.isActive( "/ordenes/desayuno", false );
      console.log('Vamos, dime tu nombre')
    }
  }

  // Metodo para obtener el nombre
  getName(newWaitress: string) {
    this.waitress = newWaitress;
    console.log(this.waitress)
  }

  // onKey(value: string) {
  //   this.waitress += value;
  //   console.log(this.waitress)
  // }
}
