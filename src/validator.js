const validator = {
  // ...isValid 
  isValid(creditCardNumber){
    //Variable donde convertimos el string a array
    let arrayNum= creditCardNumber.split("").reverse().map(Number);
     //Multiplicar los numeros pares
      if (arrayNum.lenght % 2 == 0){
        arrayNum = arrayNum.map((numero,idx)=> idx % 2 === 0 ? numero * 2 : numero);
      }
        else{
         arrayNum = arrayNum.map((numero,idx)=> idx % 2 === 1 ? numero * 2 : numero);
        }
       //Sumar los numeroos que pasen de 9
      arrayNum = arrayNum.map(numero => numero > 9 ? numero -9 : numero);
       //Sumar todo
      let suma= arrayNum.reduce((acc, numero)=> acc += numero, 0);
       //validacion de tarjeta
    const sumaValor= suma % 10 ===0;
      if (sumaValor){
        true 
        console.log ("Tu tarjeta es valida")
      } 
       else{
         false
         console.log("Tu tarjeta es invalida")       
        }
       console.log(arrayNum);
       console.log(suma);
       console.log(sumaValor);
       return sumaValor;
  },
  // ... maskify
  maskify(creditCardNumber){
    
   if(creditCardNumber.lenght > 5){
    return "#".repeat(creditCardNumber.lenght -4) + creditCardNumber.substring(creditCardNumber.lenght -4);
    console.log(creditCardNumber.value)
  }
  return creditCardNumber;
  },
}
export default validator;