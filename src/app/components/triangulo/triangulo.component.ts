
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule ,IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton],
})
export class TrianguloComponent  implements OnInit {

  lado1Str = '';
  lado2Str = '';
  lado3Str = '';

  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const lado1 = parseFloat(this.lado1Str) || 0;
    const lado2 = parseFloat(this.lado2Str) || 0;
    const lado3 = parseFloat(this.lado3Str) || 0;

    const perimetro = lado1 + lado2 + lado3;
    this.resultado = `El perímetro del triángulo es: ${perimetro}`;
  }


  ngOnInit() {}

}
