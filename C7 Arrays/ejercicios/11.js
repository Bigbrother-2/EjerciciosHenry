function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrayNuevo = []
  for(let i = 0; i <array.length;i++){
    let variableAnalizada = array[i]
    arrayNuevo.push(variableAnalizada*2)
  }
  return arrayNuevo
}

module.exports = duplicarElementos;
