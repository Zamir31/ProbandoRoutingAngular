import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraPantallaComponent } from './primera-pantalla/primera-pantalla.component';
import { SegundaPantallaComponent } from './segunda-pantalla/segunda-pantalla.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraPantallaComponent,
    SegundaPantallaComponent,
    TarjetasComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
