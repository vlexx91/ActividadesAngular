import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {

    saludo: string = '';

  constructor() {
    this.generarSaludo();
  }

  generarSaludo(){
    const hora = new Date().getHours();

    if (hora < 12){
      this.saludo = 'Buenos días';
    }else if (hora < 20){
      this.saludo = 'Buenas tardes';
    }else{
      this.saludo = 'Buenas noches';
    }
  }
}
