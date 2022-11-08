/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  let stringgrande = [];
  for (let i = 0; i < strings.length; i++){
  if (strings [i] > stringgrande)
  stringgrande = strings[i];
  }
   return stringgrande;
 }
// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga