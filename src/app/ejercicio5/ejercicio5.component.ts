import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})

export class Ejercicio5Component {
  comentarios: string[] = [];
  nuevoComentario: string = '';

  @Output() comentarioEnviado = new EventEmitter<string>();

  enviarComentario() {
    if (this.nuevoComentario.trim()) {
      this.comentarios.push(this.nuevoComentario.trim());
      this.comentarioEnviado.emit(this.nuevoComentario.trim());
      this.nuevoComentario = '';
    }
  }
}
