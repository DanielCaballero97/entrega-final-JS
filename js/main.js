

const botones = document.getElementById("botones");
const container = document.getElementById("Personaje");

const almacenPersonaje = []


let perso;

if(localStorage.getItem("Personaje")){
    perso = JSON.parse(localStorage.getItem("Personaje"));
}else{
    perso = [];
};

function crearCard(galeriaItems, index) {

    if (index === 0) {
        Personaje.innerHTML = "";
    };

    const card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    const nombre = document.createElement("h3");
    nombre.className = "nombre";
    nombre.id = "nombre";
    nombre.innerText =galeriaItems.nombre;

    const clase = document.createElement("h4");
    clase.className = "clase";
    clase.id = "clase";
    clase.innerText = galeriaItems.clase;

    const peso = document.createElement("h4");
    peso.className = "peso";
    peso.id = "peso";
    peso.innerText = galeriaItems.peso;

    const arma = document.createElement("h4");
    arma.className = "arma";
    arma.id = "arma";
    arma.innerText = galeriaItems.arma;

    const armadura = document.createElement("h4");
    armadura.className = "armadura";
    armadura.id = "armadura";
    armadura.innerText = galeriaItems.armadura;

    const rango = document.createElement("h4");
    rango.className = "rango";
    rango.id = "rango";
    rango.innerText = galeriaItems.rango;

    const imagen = document.createElement("img");
    imagen.className = "imagen";
    imagen.id = "imagen";
    imagen.src = galeriaItems.imagen;

    const button = document.createElement("button");
    button.innerText = "Seleccionar";
    button.className = "Selecion";
    button.onclick = () => guardarPersonaje(galeriaItems.id);

    card.appendChild(nombre);
    card.appendChild(clase);
    card.appendChild(peso);
    card.appendChild(arma);
    card.appendChild(armadura);
    card.appendChild(rango);
    card.appendChild(imagen);
    card.appendChild(button);

    container.appendChild(card);
}

function borrarPersonaje(){
    container.innerHTML = "";
    if(localStorage.getItem("Personaje")){
        localStorage.clear();
        alert('personaje borrado exitosamente');
    }else{
        alert('no hay nada que borrar O_o');
    }
}

function guardarPersonaje(id){
    if(localStorage.getItem("Personaje")){
        alert('ya tenes un personaje creado :( , borralo para seleccionar otro ')
    }else{
        const nuevoPJ = galeriaItems.find(el => el.id === id);
        almacenPersonaje.push(nuevoPJ);
        localStorage.setItem("Personaje", JSON.stringify(almacenPersonaje));
        alert('personaje creado con exito :D');
        container.innerHTML = "";}

}

function seleccionPersonaje(){
    container.innerHTML = "";
    const claseElegida = galeriaItems.slice(9, 13);
    claseElegida.forEach((el, index) => {
        crearCard(el, index);

    })};

function crearPersonaje(){
    if(container.innerHTML)
        container.innerHTML = "";
    if(localStorage.getItem("Personaje")){
        alert('ya tenes un personaje creado :( , borralo para seleccionar otro ')
    }else{
        seleccionPersonaje();
    };

}

function mostrarPersonaje(perso){
    container.innerHTML = "";
    if(localStorage.getItem("Personaje")){
        crearCard(perso[0] , 0)
    }else{
        alert('no tenes un personaje creado che :/ ')
    }
}


const boton1 = document.createElement("button");
const boton2 = document.createElement("button");
const boton3 = document.createElement("button");


boton1.innerText = "Crear Personaje";
boton2.innerText = "Borrar Personaje";
boton3.innerText = "Mostrar Personaje";


boton1.onclick = () => crearPersonaje();
boton2.onclick = () => borrarPersonaje();
boton3.onclick = () => mostrarPersonaje(perso);

botones.appendChild(boton3);
botones.appendChild(boton1);
botones.appendChild(boton2);