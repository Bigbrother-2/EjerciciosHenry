function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let arrayNuevo = []
    for(let i = 0;i<array.length;i++){
        let indiceAnalizado = array[i]
        let indice = i
        let suma = indiceAnalizado*indice
        arrayNuevo.push(suma)
        
    }
    return arrayNuevo
}

module.exports = multiplicarElementosPorIndice;
