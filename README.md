# Card Validation Bbva

## Resumen

Página de validación de tarjetas de crédito, te permite ver si la tarjeta es valida o en su defecto invalida,
además de esconder el numero y opción de validar otra tarjeta.


![Imagen final del proyecto](https://github.com/sonifeg/CDMX012-card-validation/blob/main/paginasonia.png?raw=true)
![Imagen tarjeta valida](https://github.com/sonifeg/CDMX012-card-validation/blob/main/tarjetavalida.png?raw=true)
![Imagen tarjeta invalida](https://github.com/sonifeg/CDMX012-card-validation/blob/main/tarjetainvalida.png?raw=true)


##  Investigacion UX

### Quiénes son los usuarios y los objetivos

Todas las personas que utilizan la banca en línea son los usuarios de Bbva, cuando ingresas en su página principal y accedes a tu cuenta 
aparece la opción de ingresar tu número de tarjeta, das click en aceptar, y te ingresa a otra página para ingresar contraseña, sin embargo
si tú ingresas una tarjeta erronea no te da la opción de visualizar en que te equivocaste, si en la tarjeta o la password.

El objetivo fue crear una página de ingreso, donde puedas agregar tu nombre y tu tarjeta, al dar click en validar te informa si esta es 
válida o inválida, así cuando tu quieras ingresar posteriormente a la parte de tu contraseña ya sabrás que es si es un número de tarjeta
válida.

### cómo soluciona los problemas/necesidades de usuarios.
Esto soluciona la parte de no conocer si tu contraseña o tu tarjeta es la incorrecta, al ser un paso anterior al ingreso de tu tarjeta cuando
tienes conocimiento de que es válida posteriormente sabrás que si no te deja acceder es porque la password es incorrecta.


### Boceto en papel
Se crearon 3 opciones

1. Con todo el navbar original, un texto de bienvenida, un texto para introducir tarjeta y el input con iconos para ocultar o mostrar
   un enlace de registro y un botón de validar.
2. Navbar con logo y solamente un icono para retornar al home, un texto de bienvenida, 2 input de texto uno para número de tarjeta 
   y otro para contraseña junto con los iconos de ocultar y mostrar, enlace de registro y botón para validar, así como una imagen de fondo.
3. Navbar igual a la segunda opción, Texto de bienvenida, texto de nombre de cliente junto con su input, texto de número de tarjeta con
   su input de texto, mensaje de válido o inválido y 2 botones, uno para validar y otro para volver a validar, así como un footer
  con el mismo background que el navbar.

![Imagen bocetos del proyecto](https://github.com/sonifeg/CDMX012-card-validation/blob/main/bocetos.jpeg?raw=true)


### Wireframe de baja fidelidad y feedback

 La primera imagen fue respetando como se encontraba la página actual, solamente se pretendía agregar los iconos de ocultar y mostrar, 
 cuando se tuvo feedback del coach, se sugirío no utilizar la contraseña y enfocarse en lograr que se pudiera validar una tarjeta, por
 lo que recomendó agregar un botón para volver a validar.

 1. ![wireframe1](https://github.com/sonifeg/CDMX012-card-validation/blob/main/w1.png?raw=true)

 La segunda imagen fue un avance, sin embargo al final se optó por no dejar lo de registro e implementar 2 botones, el de validar y el
 de volver a validar, así como también dejar un mensaje de texto que indicara si era o no válida la tarjeta en lugar del alert, como
 se puede visualizar en el prototipo final.

 2. ![wireframe2](https://github.com/sonifeg/CDMX012-card-validation/blob/main/w2.png?raw=true)


### Prototipo final

Este es el resultado final del prototipo, hubieron ligeros cambios con el producto final, en el tipo de letra y el icono, además se pensó
en el usuario y al informarte si la tarjeta es válida o inválida concatena tu nombre para que sea algo más personalizado.

![wireframe2](https://github.com/sonifeg/CDMX012-card-validation/blob/main/prototipo.png?raw=true)


