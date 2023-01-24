/* ---------------------------------- login -------------------------------------- */
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

/* ---------------------------------- productos-------------------------------------- */

class bebidas{
    constructor (producto, precio, marca) {
        this.producto = producto;
        this.precio = precio;
        this.marca = marca;
    }
}

let fernet = new bebidas("fernet", 500, "branca");
let gin = new bebidas("gin", 600, "bombai"); 
let vodka = new bebidas("vodka", 400, "absolut");

const productos = [];
productos.push (fernet);
productos.push (gin); 
productos.push (vodka);

/* ---------------------------------- carrito -------------------------------------- */
const carrito = []; 
carrito.push(gin); 
