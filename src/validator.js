const validator = {
  // ...isValid y maskify
  isValid(numTarjeta){
  
      let arraynum= numTarjeta.split("");
      let numRev= arraynum.reverse();
      let joinArr= numRev.join("");
     for(let i= 1; i < joinArr.lenght; i++){
       joinArr[i];
     }
      alert("Tu numero de tarjeta es " + joinArr);
      console.log("joinArr");
   
  }


};

export default validator;