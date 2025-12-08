import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonList, IonCard ,IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton

 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.scss'],
  standalone: true,
 imports: [FormsModule ,IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton],
})
export class CuadradoComponent  implements OnInit {

  ladoStr = '';

  resultado = '';

  constructor() { }

  calcularPerimetro() {
    const lado = parseFloat(this.ladoStr) || 0;
    
    const perimetro = 4 * lado;
    this.resultado = `El perímetro del cuadrado es: ${perimetro}`;
  }

  ngOnInit() {}

}
