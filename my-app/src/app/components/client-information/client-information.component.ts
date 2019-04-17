import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-information',
  templateUrl: './client-information.component.html',
  styleUrls: ['./client-information.component.css']
})
export class ClientInformationComponent implements OnInit {
  client: string = '';
  table: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick(newClient: string){
    if(newClient !== ''){
      this.getName(newClient)
    } else if(newClient === ''){
      console.log('¿Como se llama nuestro cliente?')
    }
  }

  onClickTable(newTable: number){
    this.getTable(newTable);
  }

  getName(newWaitress: string) {
    this.client = newWaitress;
    console.log(this.client)
  }

  getTable(newTable: number){
    this.table = newTable;
    console.log(this.table)
  }
}
