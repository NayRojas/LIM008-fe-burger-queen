import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waitress-get-name',
  templateUrl: './waitress-get-name.component.html',
  styleUrls: ['./waitress-get-name.component.css']
})
export class WaitressGetNameComponent implements OnInit {
  waitress = '';
  onClickMe() {
    console.log('entro al boton');
    console.log(event);
    // waitress = document.getElementsByTagName('input').value;
  }
  constructor() { }

  ngOnInit() {
  }

}
