var Factura = /** @class */ (function () {
    function Factura(productos, calculadoraTotal) {
        this.productos = productos;
        this.calculadoraTotal = calculadoraTotal;
    }
    Factura.prototype.calcularTotal = function () {
        return this.calculadoraTotal.calcular(this.productos);
    };
    return Factura;
}());
var CalculadoraTotalImpl = /** @class */ (function () {
    function CalculadoraTotalImpl() {
    }
    CalculadoraTotalImpl.prototype.calcular = function (productos) {
        var total = 0;
        for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
            var producto = productos_1[_i];
            total += producto.precio * producto.cantidad;
        }
        return total;
    };
    return CalculadoraTotalImpl;
}());
// Uso de las clases
var productos = [
    { nombre: "Camiseta", precio: 20, cantidad: 2 },
    { nombre: "Pantalón", precio: 50, cantidad: 1 },
];
var calculadoraTotal = new CalculadoraTotalImpl();
var factura = new Factura(productos, calculadoraTotal);
var total = factura.calcularTotal();
console.log("Total de la factura:", total);
