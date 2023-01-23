import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minutos',
  templateUrl: './minutos.component.html',
  styleUrls: ['./minutos.component.css']
})
export class MinutosComponent 
{
  @Input() item : Date;
}
