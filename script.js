/* login */

let edad = 0;
do {
    edad = prompt("ingresar edad");
    if (edad <= 18 ){
        alert("ingresar edad mayor a 18 años")
    } else{
        alert("La edad ingresada es: " + edad)
    }
} while (edad <= 18); 

do {
    nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado: " + nombreUsuario);
    alert("Bienvenido "+ nombreUsuario+"." + " Ya podes navegar por nuestro sitio!")
}
} while (nombreUsuario == ""); 

/* pago de impuestos */
  
const suma  = (monto1,monto2) => monto1 + monto2
const resta = (monto1,monto2) => monto1 - monto2
const iva   = x => x * 0.21

let servicio1 = prompt ("Nombre del 1er servicio que desea abonar")
let monto1 = Number(prompt ("Ingrese el valor del 1er servicio") )

let servicio2 = prompt ("Nombre del 2do servicio que desea abonar")
let monto2 = Number(prompt ("Ingrese el valor del 2do servicio") )

alert("Los servicios que desea pagar son: "+servicio1+ " y "+servicio2)

let descuento = 100
let subtotal1 = resta(suma(monto1, iva(monto1)), descuento)
let subtotal2 = resta(suma(monto2, iva(monto2)), descuento)
let total = resta(suma(monto1,monto2, iva(monto1,monto2)), descuento) 
alert("El total de "+servicio1+" es: "+subtotal1+"."+" El total de "+servicio2+" es: "+subtotal2)
alert("El total con IVA y descuento incluido es: "+total) 
alert("PAGO REALIZADO CON ÉXITO")
