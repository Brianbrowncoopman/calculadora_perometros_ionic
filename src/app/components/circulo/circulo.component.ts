import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  IonCard ,IonCardHeader, IonImg, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { Circulo } from 'src/app/modelo/clases';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, CommonModule],
})
export class CirculoComponent  implements OnInit {
  lado1Str = '';
  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const radio = parseFloat(this.lado1Str) || 0;
    const miCirculo = new Circulo(radio);

    const perimetro = miCirculo.calcularPerimetro();
    this.resultado = `El perímetro del círculo es: ${perimetro.toFixed(2)} cm`;
  }

  ngOnInit() {}

}
