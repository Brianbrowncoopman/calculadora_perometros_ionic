import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule ,IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton],
})
export class CirculoComponent  implements OnInit {
  lado1Str = '';

  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const radio = parseFloat(this.lado1Str) || 0;
    const perimetro = 2 * Math.PI * radio;
    this.resultado = `El perímetro del círculo es: ${perimetro}`;
  }

  ngOnInit() {}

}
