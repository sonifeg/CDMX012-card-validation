import validator from './validator.js';
const botonValidacion= document.getElementById("btnValidar")
const botonValidarOtraVez= document.getElementById("validarOtraVez")
const nombreCliente= document.getElementById("client")
const creditCardNumber= document.getElementById("cardNumber")
const mensajesValido= document.getElementById("mensajesValidacion")
const mensajesInvalido= document.getElementById("mensajesInvalidacion")

function validarNumTarjeta() {
 if(validator.isValid(creditCardNumber.value)){
     //mensaje valido o invalido
     mensajesValido.innerHTML="<div class='mensajesValidacion'>"+"Tu tarjeta es válida " + nombreCliente.value+"</div>"
 }
  else{
    mensajesValido.innerHTML="<div class='mensajesInvalidacion'>"+"Tu tarjeta es inválida "+ nombreCliente.value+"</div>"
  }
 //ocultar con maskify
 creditCardNumber.value= validator.maskify(creditCardNumber.value);
}  
function validarNuevamente(){
//limpiar datos
nombreCliente.value="";
creditCardNumber.value="";
mensajesValido.innerHTML="";
mensajesInvalido.innerHTML="";
}

//botones con eventos
botonValidacion.addEventListener("click", validarNumTarjeta);
botonValidarOtraVez.addEventListener("click", validarNuevamente);


 
