import { Component, OnInit, OnDestroy } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component implements OnInit, OnDestroy {
  hora: Date = new Date();
  private contador: any;

  ngOnInit() {
    this.iniciarHora();
  }

  iniciarHora() {
    this.contador = setInterval(() => {
      this.hora = new Date();
    }, 1000);
  }

  detenerHora() {
    if (this.contador) {
      clearInterval(this.contador);
    }
  }

  ngOnDestroy() {
    this.detenerHora();
  }
}
