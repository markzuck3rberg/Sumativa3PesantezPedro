import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Busqueda: string = "";

  onBuscar(event: string) {
    this.Busqueda = event;
  }

}
