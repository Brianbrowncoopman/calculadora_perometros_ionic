
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem,IonImg, IonList, IonCard ,IonCardHeader,IonSelect, IonSelectOption, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonLabel

 } from '@ionic/angular/standalone';
 import { CommonModule } from '@angular/common';
 import { TrianguloEscaleno, TrianguloEquilatero } from '../../modelo/clases';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule , IonImg, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, CommonModule, IonSelect, IonSelectOption],
})
export class TrianguloComponent  implements OnInit {

  lado1Str = '';
  lado2Str = '';
  lado3Str = '';

  tipoTriangulo: 'escaleno' | 'equilatero' = 'escaleno';

  resultado = '';

  constructor() { }


  manejarSeleccionTipo(event: any) {
    this.tipoTriangulo = event.detail.value;
    this.lado1Str = '';
    this.lado2Str = '';
    this.lado3Str = '';
    this.resultado = '';

  }

  calcularPerimetro() {
    const lado1 = parseFloat(this.lado1Str) || 0;
    const lado2 = parseFloat(this.lado2Str) || 0;
    const lado3 = parseFloat(this.lado3Str) || 0;

    let miTriangulo;

    if (this.tipoTriangulo === 'equilatero') {
      miTriangulo = new TrianguloEquilatero(lado1);
    } else {
      miTriangulo = new TrianguloEscaleno(lado1, lado2, lado3);
    }

    const perimetro: number = miTriangulo.calcularPerimetro();
    this.resultado = `El perímetro del triángulo es: ${perimetro.toFixed(2) }`;
  }


  ngOnInit() {}

}
