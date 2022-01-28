const validator = {
  // ...funcion isValid 
  isValid(creditCardNumber){
    //Variable donde convertimos el string a array y a numero
    let arrayNum= creditCardNumber.split("").reverse().map(Number);
     //Multiplicar los numeros pares, si el resto de la longitud mi numero es igual a 0
      if (arrayNum.lenght % 2 == 0){
       arrayNum = arrayNum.map((numero,idx)=> idx % 2 === 0 ? numero * 2 : numero);
      }
        else{
         arrayNum = arrayNum.map((numero,idx)=> idx % 2 === 1 ? numero * 2 : numero);
        }
       //Habiendo multiplicado, si los numeros pasan de 9 restar 9
      arrayNum = arrayNum.map(numero => numero > 9 ? numero -9 : numero);
       //Teniendo mis numeros nuevos, sumar todo
      let suma= arrayNum.reduce((acc, numero)=> acc += numero, 0);
       //validacion de tarjeta, si el resto de mi suma es 0 valida de lo contrario invalida
    const sumaValor= suma % 10 ===0;
      if (sumaValor){
        true 
      } 
       else{
         false  
        }
       return sumaValor;
  },
  // ... funcion maskify
  maskify(creditCardNumber) {
    //Creo la variable que identifique mi longitud
    var oculto = creditCardNumber.length;
    //si la longitud de mi numero es menor a 5, regresa el numero de la tarjeta
    if (creditCardNumber < 5) {
      return creditCardNumber;
     //si es mayor a 5, mi variable oculto - valor inicial  menos 5(deja los ultimos 4 descubiertos), sustituye mi valor por #(los numeros anteriores)
    }else{
      return creditCardNumber.split('').map(function(val, idx){
        return (oculto - idx < 5) ? val : '#';
     }).join('');
    }
  }
};
export default validator;