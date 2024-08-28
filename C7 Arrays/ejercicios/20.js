function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let contador = 0
  let comparador = array[0]
  for(let i = 0; i<array.length;i++){
    if(comparador!==array[i]){
      contador++
    }
  }
  if(contador!==0){
    return false
  } return true


}

module.exports = todosIguales;
