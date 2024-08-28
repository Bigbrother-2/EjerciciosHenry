function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for(let i = 0;i<array.length;i++){
    let indiceAnalizado = array[i]
    if(indiceAnalizado.length>=5){
        return indiceAnalizado
    }
    }
}

module.exports = obtenerPrimerStringLargo;
