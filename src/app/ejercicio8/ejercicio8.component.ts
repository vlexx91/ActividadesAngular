import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

interface Item {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio8.component.html',
  styleUrl: './ejercicio8.component.css'
})
export class Ejercicio8Component {
  items: Item[] =[
    {nombre: 'CBD', precio: 20, cantidad: 0},
    {nombre: 'Maikel', precio: 30, cantidad: 0},
    {nombre: 'Rich', precio: 50, cantidad: 0}
  ];

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
  }

  incrementarCantidad(item: Item){
    item.cantidad++;
  }

  restarCantidad (item: Item){
    if (item.cantidad > 0){
      item.cantidad--;
    }
  }
}
