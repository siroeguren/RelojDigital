import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoraComponent } from './Components/hora/hora.component';
import { MinutosComponent } from './Components/minutos/minutos.component';
import { SegundosComponent } from './Components/segundos/segundos.component';

@NgModule({
  declarations: [
    AppComponent,
    HoraComponent,
    MinutosComponent,
    SegundosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
