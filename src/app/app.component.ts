import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'RelojDigital';
  show = true;
  mensajeDesdeHijo : string;

  pasarhora : Date = new Date();
  
  mostrar()
  {
    this.show =  true;
    setTimeout(() => 
    {
      this.show = false;  
    }, 5000);
  }

  constructor()
  {
    setInterval(() => 
    {
      this.pasarhora =  new Date();
    }, 1000);
    
   
  }

  ngOnInit(): void
  {
    console.log("oninit");
  }

  onMensasjeHijo(event)
  {
    console.log(event);
    this.mensajeDesdeHijo = event;
  }
}
