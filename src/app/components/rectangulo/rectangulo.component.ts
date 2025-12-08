import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styleUrls: ['./rectangulo.component.scss'],
  standalone: true,
  imports: [FormsModule ,IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton],
})
export class RectanguloComponent  implements OnInit {

  lado1Str = '';
  lado2Str = '';  
  //lado3Str = '';
  //lado4Str = '';

  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const lado1 = parseFloat(this.lado1Str) || 0;
    const lado2 = parseFloat(this.lado2Str) || 0;
    //const lado3 = parseFloat(this.lado3Str) || 0;
    //const lado4 = parseFloat(this.lado4Str) || 0;

    const perimetro = 2 * (lado1 + lado2) ;
    this.resultado = `El perímetro del rectángulo es: ${perimetro}`;

  }

  ngOnInit() {}

}
