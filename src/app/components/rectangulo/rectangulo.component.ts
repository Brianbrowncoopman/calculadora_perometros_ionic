import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonList, IonImg, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';
 import { CommonModule } from '@angular/common';
 import { Rectangulo } from 'src/app/modelo/clases';

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styleUrls: ['./rectangulo.component.scss'],
  standalone: true,
  imports: [FormsModule ,IonList,IonImg, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, CommonModule],
})
export class RectanguloComponent  implements OnInit {

  lado1Str = '';
  lado2Str = '';  
  

  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const lado1 = parseFloat(this.lado1Str) || 0;
    const lado2 = parseFloat(this.lado2Str) || 0;
    //const lado3 = parseFloat(this.lado3Str) || 0;
    //const lado4 = parseFloat(this.lado4Str) || 0;

    const miRectangulo = new Rectangulo(lado1, lado2);  

    const perimetro: number = miRectangulo.calcularPerimetro();

    this.resultado = `El perímetro del rectángulo es: ${perimetro.toFixed(2)} cm`;

  }

  ngOnInit() {}

}
