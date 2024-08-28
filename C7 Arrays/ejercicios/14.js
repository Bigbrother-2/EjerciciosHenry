function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let arrayMayoresDiez = []
  let contadorMayoresDiez = 0
    for(let i = 0; i<array.length;i++){
        let variableAnalizada = array[i]
        if(variableAnalizada>10){
            arrayMayoresDiez.push(variableAnalizada)
            contadorMayoresDiez++
        }
    }
  return contadorMayoresDiez
}

module.exports = contarElementosMayoresA10;
