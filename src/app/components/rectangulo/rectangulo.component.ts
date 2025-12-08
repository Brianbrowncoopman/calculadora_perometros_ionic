import { Component, OnInit } from '@angular/core';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent

} from '@ionic/angular/standalone';

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styleUrls: ['./rectangulo.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class RectanguloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
