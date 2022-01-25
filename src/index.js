import validator from './validator.js';
const botonValidacion= document.getElementById("Btnvalidar")
const nombreCliente= document.getElementById("Client")
const creditCardNumber= document.getElementById("Cardnumber")


function ValidarNumTarjeta() {
 if(validator.isValid(creditCardNumber.value)==true){
 alert("Tu tarjeta es valida "+ nombreCliente.value);
 }
 else{
 alert("Tu tarjeta es invalida "+ nombreCliente.value);
 }
}
 //ocultar con maskify
  const tarjetaOculta= validator.maskify(creditCardNumber.value);
 


botonValidacion.addEventListener("click", ValidarNumTarjeta);


 
