import validator from './validator.js';
document.getElementById("Btnvalidar").addEventListener("click", ValidarNumTarjeta);

function ValidarNumTarjeta() {
   let numTarjeta= document.getElementById("Cardnumber").value;
  
 
console.log("ValidarNumTarjeta");
validator.isValid(numTarjeta);
}

 
  