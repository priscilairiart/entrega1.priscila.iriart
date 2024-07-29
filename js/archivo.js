// // de dolar a pesos
let precioJuego1= parseFloat(prompt("ingrese el precio del juego en usd"));
let precioJuego2= parseFloat(prompt("ingrese el precio del  segundo juego en usd"));
let valorDolar= parseFloat(prompt("ingrese el valor de USD en ARS"));
let iva=0.21;
let pesos1=0;
let pesos2=0;
do{
    pesos1=precioJuego1*valorDolar*(1+iva);
}while(false);
alert("el valor del  primer juego es: "+ pesos1);

do{
    pesos2=precioJuego2*valorDolar*(1+iva);
}while(false);
alert("el valor del segundo juego es: "+ pesos2);

// // comparar que es mas economico
function compararPrecios(precioJuego1,precioJuego2){
    if(precioJuego1<precioJuego2){
        return "el juego 1 es mas economico"
    }else if (precioJuego1>precioJuego2){
        return "el juego 2 es mas economico"
    }else {
        return "los juegos tienen el mismo precio"
    }
}
let resultado=compararPrecios(pesos1,pesos2);
console.error("el juego mas barato es: " + resultado);
// algo para ir abansando y tocar otros temas anteriores 
class juego {
    constructor(titulo, genero, calificacion, precio) {
        this.titulo = titulo;
        this.genero = genero;
        this.calificacion = calificacion;
        this.precio = precio;
    }
}

const juego1 = new juego("The Last of Us", "Acción-Aventura", 9.5, 50);
const juego2 = new juego("Minecraft", "Sandbox", 9.0, 30);
const juego3 = new juego("Grand Theft Auto V", "Acción-Aventura", 9.5, 60);
const juego4 = new juego("Tetris", "Puzzle", 8.5, 10);
const juego5 = new juego("The Legend of Zelda: Breath of the Wild", "Acción-Aventura", 9.5, 60);
const juego6 = new juego("PlayerUnknown's Battlegrounds", "Battle Royale", 8.5, 30);
const juego7 = new juego("Super Mario Odyssey", "Plataformas", 9.0, 50);
const juego8 = new juego("The Elder Scrolls V: Skyrim", "RPG", 9.0, 40);
const juego9 = new juego("Fortnite", "Battle Royale", 8.0, 20);
const juego10 = new juego("Resident Evil 7: Biohazard", "Terror", 9.0, 50);

const juegos = [juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10];
// mostrar los juegos

// let mostrarjuegos= parseFloat(prompt("ingrese la cantidad que desea ver de juegos"));

for (const juego of juegos) {
    console.log(`Título: ${juego.titulo}`);
    console.log(`Género: ${juego.genero}`);
    console.log(`Calificación: ${juego.calificacion}`);
    console.log(`Precio: ${juego.precio}`);
    console.log("--------------------");
  }

