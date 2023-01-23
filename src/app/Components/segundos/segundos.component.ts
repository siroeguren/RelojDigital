import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segundos',
  templateUrl: './segundos.component.html',
  styleUrls: ['./segundos.component.css']
})
export class SegundosComponent 
{
  @Output() eventoHijo = new EventEmitter<string>();
  @Input() item : Date;
  
  enviarPadre()
  {
    this.eventoHijo.emit("Mensaje desde el hijo");  
  }
}
