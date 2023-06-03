var Factura = /** @class */ (function () {
    function Factura(productos) {
        this.productos = productos;
    }
    Factura.prototype.setCalculadoraTotal = function (calculadoraTotal) {
        this.calculadoraTotal = calculadoraTotal;
    };
    Factura.prototype.calcularTotal = function () {
        if (!this.calculadoraTotal) {
            throw new Error("La calculadora de total no ha sido asignada.");
        }
        return this.calculadoraTotal.calcular(this.productos);
    };
    return Factura;
}());
var CalculadoraTotal = /** @class */ (function () {
    function CalculadoraTotal() {
    }
    CalculadoraTotal.prototype.calcular = function (productos) {
        var total = 0;
        for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
            var producto = productos_1[_i];
            total += producto.precio * producto.cantidad;
        }
        return total;
    };
    return CalculadoraTotal;
}());
// Uso de las clases
var productos = [
    { nombre: "Camiseta", precio: 20, cantidad: 2 },
    { nombre: "Pantalón", precio: 50, cantidad: 1 },
];
var calculadoraTotal = new CalculadoraTotal();
var factura = new Factura(productos);
factura.setCalculadoraTotal(calculadoraTotal);
var total = factura.calcularTotal();
console.log("Total de la factura:", total);
