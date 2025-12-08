import { Component, OnInit } from '@angular/core';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class CuadradoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
