"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var listaAutos = [
    {
        Id: 1,
        Modelo: 'Chevrolet Aveo',
        Marca: 'Chevrolet',
        Anio: 2020,
        Precio: 4500
    },
    {
        Id: 2,
        Modelo: 'Chevrolet Camaro',
        Marca: 'Chevrolet',
        Anio: 2021,
        Precio: 6500
    },
    {
        Id: 3,
        Modelo: 'Koleos',
        Marca: 'Renault',
        Anio: 2021,
        Precio: 65000
    }
];
console.table(listaAutos);
var contarAutos = (0, Auto_1.totalAutos)(listaAutos);
console.log('El total de autos es de ', contarAutos);
