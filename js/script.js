let transporte = parseFloat(prompt("Ingrese el costo del transporte (en USD):"));
let alojamiento = parseFloat(prompt("Ingrese el costo del alojamiento por noche (en USD):"));
let noches = parseInt(prompt("¿Cuántas noches se quedará?"));
let comida = parseFloat(prompt("Ingrese el costo diario de comida (en USD):"));
let actividades = parseFloat(prompt("Ingrese el costo de las actividades planeadas (en USD):"));

function calcularAlojamiento(costoPorNoche, numeroDeNoches) {
    return costoPorNoche * numeroDeNoches;
}

function calcularComida(costoDiario, numeroDeNoches) {
    return costoDiario * numeroDeNoches;
}

function calcularCostoTotal(transporte, alojamiento, comida, actividades) {
    return transporte + alojamiento + comida + actividades;
}

let costoAlojamiento = calcularAlojamiento(alojamiento, noches);
let costoComida = calcularComida(comida, noches);
let costoTotal = calcularCostoTotal(transporte, costoAlojamiento, costoComida, actividades);

console.log("Resumen del costo del viaje:");
console.log(`Transporte: $${transporte}`);
console.log(`Alojamiento: $${costoAlojamiento}`);
console.log(`Comida: $${costoComida}`);
console.log(`Actividades: $${actividades}`);
console.log(`Costo total del viaje: $${costoTotal}`);

alert(`El costo total de tu viaje es: $${costoTotal}`);

let destinos = [
    { nombre: "Nueva York", transporte: 300, alojamiento: 150, comida: 50, actividades: 100 },
    { nombre: "París", transporte: 700, alojamiento: 200, comida: 60, actividades: 150 },
    { nombre: "Tokio", transporte: 1000, alojamiento: 250, comida: 70, actividades: 200 },
];

let destinosEconomicos = destinos.filter(destino => destino.transporte < 500);
console.log("Destinos con transporte económico:");
console.log(destinosEconomicos);
