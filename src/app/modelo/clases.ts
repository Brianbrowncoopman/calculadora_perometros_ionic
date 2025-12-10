// Clase abstracta
export abstract class FiguraGeometrica {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // Método abstracto: las hijas deben implementarlo
  abstract calcularPerimetro(): number;
}

// Círculo
export class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super("Círculo");
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

// Triángulo Escaleno
export class TrianguloEscaleno extends FiguraGeometrica {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super("Triángulo Escaleno");
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}

// Triángulo Equilátero
export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) {
    // Los tres lados iguales
    super(ladoA, ladoA, ladoA);
  }
}





export class Cuadrado extends FiguraGeometrica{
  private lado: number;

  constructor(lado: number){
    super("Cuadrado");
    this.lado = lado;
  }

  calcularPerimetro(): number {
    return 4 * this.lado;
  }
}

export class Rectangulo extends FiguraGeometrica{
  private lado1: number;
  private lado2: number;    
  
  constructor(lado1: number, lado2: number){
    super("Rectángulo");
    this.lado1 = lado1;
    this.lado2 = lado2;        
  }

  calcularPerimetro(): number {
    return 2 * (this.lado1 + this.lado2) ;
  }
}



const c = new Circulo(5);
console.log(c.calcularPerimetro());

const tEscaleno = new TrianguloEscaleno(3, 4, 5);
console.log(tEscaleno.calcularPerimetro());

const tEquilatero = new TrianguloEquilatero(6);
console.log(tEquilatero.calcularPerimetro());