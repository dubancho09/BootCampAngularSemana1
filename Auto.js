"use strict";
exports.__esModule = true;
exports.totalAutos = void 0;
function totalAutos(autos) {
    var contador = 0;
    autos.forEach(function (p) {
        contador = contador + 1;
    });
    return contador;
}
exports.totalAutos = totalAutos;
