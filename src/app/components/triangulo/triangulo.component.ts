
import { Component, OnInit } from '@angular/core';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent

} from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class TrianguloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
