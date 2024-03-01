let listaAmigos = [];
let nomeAmigo = document.getElementById('nome-amigo');
let amigosIncluidos = document.getElementById('lista-amigos');

function adicionar(){
    listaAmigos.push(nomeAmigo.value);
   
    if (amigosIncluidos.textContent == ''){
        amigosIncluidos.textContent =  nomeAmigo.value;
    } else {
        amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + nomeAmigo.value;
    }
    
    nomeAmigo.value = '';
}

function sortear(){
    embaralha(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigos.length; i++){
        if (i == listaAmigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';        
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigosIncluidos.innerHTML = '';
    listaAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
}