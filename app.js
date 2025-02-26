// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let lista = document.getElementById("listaAmigos");
let nombreAmigo = document.getElementById("amigo");


function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo === '') {
        alert('por favor, insertar un nombre');
    } else {
        if (listaAmigos.includes(nombreAmigo))
           return agregarAmigo();
        
              listaAmigos.push(nombreAmigo);
           document.getElementById("amigo").value = "";
            actualizarLista();
        }
        console.log(listaAmigos);
        return;
}
function actualizarLista() {
    lista.innerHTML = "";

    let inicioLista = 0;
    let finalLista = listaAmigos.length -1;

    while (inicioLista <= finalLista) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = listaAmigos[inicioLista];
        lista.appendChild(listaNombre);
        inicioLista++;

    }
}
function sortearAmigo() {
    if(listaAmigos.length === 0) {
        alert( "no se ha agregado ningun nombre")
    }else {
        let indiceSorteo = Math.floor(Math.random() * (listaAmigos.length));
        let nombreSorteo = listaAmigos[indiceSorteo];
        let nombreSecreto = document.getElementById("resultado");
        nombreSecreto.innerHTML = nombreSorteo;
        limpiarLista();        
    } 
    return;  
}
function limpiarLista() {
    document.getElementById('listaAmigos').value = '';
return;
}

    