function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0
  for(let i = 0; i<arrayOfNums.length;i++){
    let indiceAnalizada = arrayOfNums[i]
    suma+=indiceAnalizada
  }
  return suma
  
  
}

module.exports = agregarNumeros;
