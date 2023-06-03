interface CalculadoraTotal {
    calcular(productos: Producto[]): number;
  }
  
  class Factura {
    private productos: Producto[];
    private calculadoraTotal: CalculadoraTotal;
  
    constructor(productos: Producto[], calculadoraTotal: CalculadoraTotal) {
      this.productos = productos;
      this.calculadoraTotal = calculadoraTotal;
    }
  
    calcularTotal(): number {
      return this.calculadoraTotal.calcular(this.productos);
    }
  }
  
  class CalculadoraTotalImpl implements CalculadoraTotal {
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
  
  const calculadoraTotal = new CalculadoraTotalImpl();
  const factura = new Factura(productos, calculadoraTotal);
  const total = factura.calcularTotal();
  
  console.log("Total de la factura:", total);
  