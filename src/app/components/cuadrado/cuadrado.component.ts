import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonImg, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';
 import { CommonModule } from '@angular/common';
 import { Cuadrado } from 'src/app/modelo/clases';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.scss'],
  standalone: true,
 imports: [FormsModule ,IonImg, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, CommonModule],
})
export class CuadradoComponent  implements OnInit {

  ladoStr = '';

  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const lado = parseFloat(this.ladoStr) || 0;

    const miCuardado = new Cuadrado(lado);
    
    const perimetro: number = miCuardado.calcularPerimetro();

    this.resultado = `El perímetro del cuadrado es: ${perimetro.toFixed(2)} cm`;
  }

  ngOnInit() {}

}
