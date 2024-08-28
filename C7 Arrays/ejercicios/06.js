function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arrayNuevo = []
    let condicional = array.length
    for(let i = 0; i<condicional;i++){
        let indiceAnalizado = array.pop()
        arrayNuevo.push(indiceAnalizado)
    }
  return arrayNuevo
}

module.exports = invertirArray;
