interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
  }
  
  class Factura {
    private productos: Producto[];
    private calculadoraTotal: CalculadoraTotal;
  
    constructor(productos: Producto[]) {
      this.productos = productos;
    }
  
    setCalculadoraTotal(calculadoraTotal: CalculadoraTotal) {
      this.calculadoraTotal = calculadoraTotal;
    }
  
    calcularTotal(): number {
      if (!this.calculadoraTotal) {
        throw new Error("La calculadora de total no ha sido asignada.");
      }
  
      return this.calculadoraTotal.calcular(this.productos);
    }
  }
  
  class CalculadoraTotal {
    calcular(productos: Producto[]): number {
      let total = 0;
      for (const producto of productos) {
        total += producto.precio * producto.cantidad;
      }
      return total;
    }
  }
  
  // Uso de las clases
  
  const productos: Producto[] = [
    { nombre: "Camiseta", precio: 20, cantidad: 2 },
    { nombre: "Pantalón", precio: 50, cantidad: 1 },
  ];
  
  const calculadoraTotal = new CalculadoraTotal();
  const factura = new Factura(productos);
  factura.setCalculadoraTotal(calculadoraTotal);
  const total = factura.calcularTotal();
  
  console.log("Total de la factura:", total);
  