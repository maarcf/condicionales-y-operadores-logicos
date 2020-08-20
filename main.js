// Ejercicio 1
const puedeVerPelicula = (edad, tieneAutorizacion) => {
  if (edad >= 15 || tieneAutorizacion === true /*es un booleando podría obviarse el agregar la igualdad*/) {
    return true
  } else {
    return false
  }
}

console.log(puedeVerPelicula(12, false)) // false
console.log(puedeVerPelicula(12, true))  // true
console.log(puedeVerPelicula(16, false)) // true
console.log(puedeVerPelicula(18, true))  // true


// Ejercicio 2
const estaEnRango = (valor, minimo, maximo) => {
 if (valor >= minimo && valor <= maximo) {
   return true
 } else {
   return false
 }
}

console.log(estaEnRango(3, 1, 10))   // true
console.log(estaEnRango(1, 1, 10))   // true
console.log(estaEnRango(10, 1, 10))  // true
console.log(estaEnRango(12, 1, 10))  // false
console.log(estaEnRango(-3, 1, 10))  // false


// Ejercicio 3
// let rtaUsauarie = prompt('¿Qué color de luz tiene el semaforo?a')
const avanzarSemaforo = colorActual => {
  if (colorActual === "verde") {
    return 'El próximo color del semáforo es amarillo.'
  } else if (colorActual === "amarillo"){
    return 'El próximo color del semáforo es rojo.'
  } else if (colorActual === "rojo"){
    return 'El próximo color del semáforo es verde.'
  } else {
    return `${colorActual} no es un color válido para este semáforo.` 
  }
}

console.log(avanzarSemaforo('rojo'));
console.log(avanzarSemaforo('amarillo'));
console.log(avanzarSemaforo('verde'));
console.log(avanzarSemaforo('violeta'));
// console.log(avanzarSemaforo(rtaUsauarie));


// Ejercicio 4
const esVocal = letra => {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return true
  } else {
    return false
  }
}

console.log(esVocal('a'));
console.log(esVocal('u'));
console.log(esVocal('n'));


// Ejercio 5
const esConsonante = letra => {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return false
  } else {
    return true
  }
}

console.log(esConsonante('a'));
console.log(esConsonante('u'));
console.log(esConsonante('n'));


// Ejercicio 6
const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => {
  if (pasoTest === true && tieneMultasImpagas === false && pagoImpuestos === true) /* (pasoTest && tieneMultasImpagas === false && pagoImpuestos) esto es más abstracto*/ {
    return 'Puede renovar su carnet'
  } else {
    return `Usted no puede renovar el carnet`
  }
}

console.log(puedeRenovarCarnet(true, true, true))    // Usted no puede renovar el carnet
console.log(puedeRenovarCarnet(true, true, false))   // Usted no puede renovar el carnet
console.log(puedeRenovarCarnet(true, false, true))   // Puede renovar su carnet
console.log(puedeRenovarCarnet(true, false, false))  // Usted no puede renovar el carnet
console.log(puedeRenovarCarnet(false, true, true))   // Usted no puede renovar el carnet
console.log(puedeRenovarCarnet(false, true, false))  // Usted no puede renovar el carnet
console.log(puedeRenovarCarnet(false, false, true))  // Usted no puede renovar el carnet
console.log(puedeRenovarCarnet(false, false, false)) // Usted no puede renovar el carnet


// Ejercicio 7
const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
  if (asistencia >= 75 && materiasAprobadas === 50 && tesisAprobada) {
    return true
  } else {
    return false
  }
}

console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false


// Ejercicio 8
const esParOImpar = num => {
  if (num % 2 === 0) {
    return `El ${num} es PAR`
  } else {
    return `El ${num} es IMPAR`
  }
}

console.log(esParOImpar(3))  // 'impar'
console.log(esParOImpar(10)) // 'par'


// Ejercicio 9
const esPositivoONegativo = num => {
  if (num >= 0) {
    return `El ${num} es POSITIVO`
  } else {
    return `El ${num} es NEGATIVO`
  }
}

console.log(esPositivoONegativo(-5)); // Negativo
console.log(esPositivoONegativo(44)); // Positivo
console.log(esPositivoONegativo(0)); // Positivo


// Ejercicio 10
const obtenerSensacion = temp => {
  if (temp < 0) {
    return `¡Está helando!`
  } else if (temp >= 0 && temp < 15) {
    return `¡Hace frío!`
  } else if (temp >= 15 && temp < 25) {
    return `Está lindo`
  } else if (temp >= 25 && temp < 30) {
    return `Hace calor`
  } else if (temp >= 30) {
    return `¡Hace muuuuucho calor!`
  }
}

console.log(obtenerSensacion(-5)); // ¡Está helando!
console.log(obtenerSensacion(8)); // ¡Hace frío!
console.log(obtenerSensacion(18)); // Está lindo
console.log(obtenerSensacion(26)); // Hace calor
console.log(obtenerSensacion(30)); // ¡Hace muuuuucho calor!


// Ejercicio 11
const obtenerNota = puntaje => {
  if (puntaje <= 0) {
    return `El ${puntaje} no es un formato válido para este ejercicio.`
  }
  else if (puntaje < 6) {
    return `DESAPROBADO`
  }
  else if (puntaje >= 6 && puntaje < 7) {
    return `REGULAR`
  }
  else if (puntaje >= 7 && puntaje < 8) {
    return `BUENO`
  }
  else if (puntaje >= 8 && puntaje < 10) {
    return `MUY BUENO`
  }
  else if (puntaje === 10) {
    return `EXCELENTE`
  }
  else {
    return `El ${puntaje} no es un formato válido para este ejercicio.`
  }
}

console.log(obtenerNota(7))    // "Bueno"
console.log(obtenerNota(9.6))  // "Muy Bueno"
console.log(obtenerNota(12))   // "Puntaje inválido"


// Ejercicio 12
const jugarPiedraPapelTijera = (a, b) => {
  if ((a === 'tijera' && b === 'piedra') || (a === 'piedra' && b === 'tijera')) {
    return `¡Ganó piedra!`
  }
  else if ((a === 'papel' && b === 'piedra') || (a === 'piedra' && b === 'papel')) {
    return `¡Ganó papel!`
  }
  else if ((a === 'papel' && b === 'tijera') || (a === 'tijera' && b === 'papel')) {
    return `¡Ganó tijera!`
  }
  else if ((a === 'piedra' && b === 'piedra') || (a === 'papel' && b === 'papel') || (a === 'tijera' && b === 'tijera')) {
    return `¡Empate!`
  }
  else {
    return `Valor inválido`
  }
}


console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!
