import { Component } from '@angular/core';
import { ICard } from '../ICard';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  tarjetas: ICard[] = [
    {
      imagen : {
        urlImagen: 'https://picsum.photos/200/300',
        alt: 'imagen de algo',
      },
      titulo: 'Algo',
      descripcion : 'Algo de algo',
    },
    {
      imagen : {
        urlImagen: 'https://picsum.photos/200/300',
        alt: 'imagen de algo',
      },
      titulo: 'Algo',
      descripcion : 'Algo de algo',
    }
  ]
}
