import { Component, Input } from '@angular/core';
import { ICard } from '../ICard';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() tarjeta?: ICard 
}
