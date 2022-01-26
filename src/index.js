import validator from './validator.js';
const botonValidacion= document.getElementById("Btnvalidar")
const botonValidarOtraVez= document.getElementById("ValidarOtraVez")
const nombreCliente= document.getElementById("Client")
const creditCardNumber= document.getElementById("Cardnumber")
const mensajesValido= document.getElementById("mensajesValidacion")
const mensajesInvalido= document.getElementById("mensajesInvalidacion")

function ValidarNumTarjeta() {
 if(validator.isValid(creditCardNumber.value)==true){
     //mensaje valido o invalido
     mensajesValido.innerHTML="Tu tarjeta es válida " + nombreCliente.value;
 }
  else{
    mensajesInvalido.innerHTML="Tu tarjeta es inválida "+ nombreCliente.value;
  }
 //ocultar con maskify
 creditCardNumber.value= validator.maskify(creditCardNumber.value);
}  
function ValidarNuevamente(){
//limpiar datos
nombreCliente.value="";
creditCardNumber.value="";
mensajesValido.innerHTML="";
mensajesInvalido.innerHTML="";
}

//botones con eventos
botonValidacion.addEventListener("click", ValidarNumTarjeta);
botonValidarOtraVez.addEventListener("click", ValidarNuevamente);


 
