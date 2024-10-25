import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {
  tiempoSegundos: number = 0;
  diferenciaTiempo: number = 0;
  intervaloId: any;

  startTemporizador() {
    this.stopTemporizador(); // Ensure any existing timer is stopped
    this.diferenciaTiempo = this.tiempoSegundos;
    this.intervaloId = setInterval(() => {
      if (this.diferenciaTiempo > 0) {
        this.diferenciaTiempo--;
      } else {
        this.stopTemporizador();
      }
    }, 1000);
  }

  stopTemporizador() {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
      this.intervaloId = null;
    }
  }
}
