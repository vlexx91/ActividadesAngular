import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  tarea: string[] = [];
  nuevaTarea: string = '';

  addTarea() {
    if (this.nuevaTarea.trim()) {
      this.tarea.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';  // input?
    }
  }
}
