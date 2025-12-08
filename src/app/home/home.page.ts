import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from '../components/circulo/circulo.component';
import { CuadradoComponent } from '../components/cuadrado/cuadrado.component';
import { RectanguloComponent } from '../components/rectangulo/rectangulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';     

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,CirculoComponent, TrianguloComponent, CuadradoComponent, RectanguloComponent],
  standalone: true,
})
export class HomePage {
  constructor() {}
}
