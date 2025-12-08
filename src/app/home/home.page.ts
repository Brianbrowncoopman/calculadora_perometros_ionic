import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonFooter
} from '@ionic/angular/standalone';
import { CirculoComponent } from '../components/circulo/circulo.component';
import { CuadradoComponent } from '../components/cuadrado/cuadrado.component';
import { RectanguloComponent } from '../components/rectangulo/rectangulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    CommonModule,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    CuadradoComponent,
    RectanguloComponent,
    TrianguloComponent,
    IonFooter
  ],
})
export class HomePage {
  tipoDeFigura = '';

  constructor() {}

  manejarSeleccionFigura(event: CustomEvent) {
    this.tipoDeFigura = event.detail.value;
  }

  esCirculo()   { return this.tipoDeFigura === 'circulo'; }
  esTriangulo() { return this.tipoDeFigura === 'triangulo'; }
  esCuadrado()  { return this.tipoDeFigura === 'cuadrado'; }
  esRectangulo(){ return this.tipoDeFigura === 'rectangulo'; }
}

