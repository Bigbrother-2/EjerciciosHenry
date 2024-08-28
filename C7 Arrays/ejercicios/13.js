function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrayPares = []
  for(let i = 0;i<array.length;i++){
      let variableAnalizada = array[i]
    if(variableAnalizada%2===0){
      arrayPares.push(variableAnalizada)
    }
  }
  return arrayPares
}

module.exports = filtrarNumerosPares;
