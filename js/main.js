

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
        Swal.fire({
            title: "Personaje Borrado",
            icon: "success"
          });
    }else{
       Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No tenes ningun personaje creado :c",
          });; 
    }
}

function guardarPersonaje(id){
    if(localStorage.getItem("Personaje")){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ya tenes un personaje creado :c",
          })   
        }else{


            fetch('./js/items.json')
                .then( (res) => res.json() )
                .then( (data) => { 
                    const nuevoPJ = data.find(el => el.id === id);
                    almacenPersonaje.push(nuevoPJ);
                    localStorage.setItem("Personaje", JSON.stringify(almacenPersonaje));

                }),
            Swal.fire({
                title: "Personaje Creado :D",
                icon: "success"
            });    

            container.innerHTML = "";}

}

function seleccionPersonaje(){
    container.innerHTML = "";
    fetch('./js/items.json')
    .then( (res) => res.json() )
    .then( (data) => {
        claseElegida = data.slice(9,13)
        claseElegida.forEach((el, index) => {
            crearCard(el, index);
    
        })
    })
    
  };

function crearPersonaje(){
    if(container.innerHTML)
        container.innerHTML = "";
    if(localStorage.getItem("Personaje")){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ya tenes un personaje creado :c",
          })
    }else{
        seleccionPersonaje();
    };

}

function mostrarPersonaje(perso){
    container.innerHTML = "";
    if(localStorage.getItem("Personaje")){
        crearCard(perso[0] , 0)
        boton.remove();
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No tenes ningun personaje creado :c",
            footer: '<a href="https://www.youtube.com/watch?v=35XFAkwmU4c&ab_channel=JavierAbancens">bajar el volumen</a>'
          });
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