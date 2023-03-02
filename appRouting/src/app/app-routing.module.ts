import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeraPantallaComponent } from './primera-pantalla/primera-pantalla.component';
import { SegundaPantallaComponent } from './segunda-pantalla/segunda-pantalla.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'primera-pantalla', component: PrimeraPantallaComponent
  },
  {
    path: 'segunda-pantalla', component: SegundaPantallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
