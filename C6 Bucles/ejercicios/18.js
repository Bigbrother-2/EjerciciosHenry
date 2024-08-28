function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let variableAcumulada = 1

  if(b>a){
    for(let i = a; i<=b;i++){
      variableAcumulada = variableAcumulada * i
    } 
  } else for(let i = b; i<=a; i++){
    variableAcumulada = variableAcumulada * i
  }
  if(variableAcumulada == 0){
    variableAcumulada = 0
  }
  return variableAcumulada
}

module.exports = productoEntreNúmeros;