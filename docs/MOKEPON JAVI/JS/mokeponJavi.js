let ataqueJugador
let mascotaEnemigo
let ataqueEnemigo
let resultado    
let vidaJugador = 3
let vidaEnemigo = 3


function inicioJuego(){
    let sectionMensajesMascotasVidas = document.getElementById('mensajes-mascotas-vidas')
    sectionMensajesMascotasVidas.style.display = 'none'
    let sectionEligeAtaque = document.getElementById('elige-ataque')
    sectionEligeAtaque.style.display = 'none'
    let sectionReinicio = document.getElementById('section-boton-reinicio')
    sectionReinicio.style.display = 'none'
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReinicio = document.getElementById('boton-reinicio')
    botonReinicio.addEventListener('click', reinicio)
    let botonSeleccionMascota = document.getElementById('boton-seleccion-mascota')
    botonSeleccionMascota.addEventListener('click', seleccionMascotaJugador)
}

function seleccionMascotaJugador(){
    let mascotaHipodoge = document.getElementById('Hipodoge')
    let mascotaCapipepo = document.getElementById('Capipepo')
    let mascotaRatigueya = document.getElementById('Ratigueya')
    
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(mascotaHipodoge.checked){    
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if(mascotaCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if(mascotaRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else{
        alert("Debes elegir tu mascota!")
    }
    
    enemigoAleatorio(1,3)
    let sectionEligeAtaque = document.getElementById('elige-ataque')
    sectionEligeAtaque.style.display = 'block'
    let sectionMensajesMascotasVidas = document.getElementById('mensajes-mascotas-vidas')
    sectionMensajesMascotasVidas.style.display = 'block'
}

function enemigoAleatorio(min,max){
    let eleccionEnemigo = Math.floor(Math.random() * (max - min + 1)) + min;
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    
    if(eleccionEnemigo == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if(eleccionEnemigo == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else if(eleccionEnemigo == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }   
    
    
}

function ataqueAleatorioEnemigo(min,max){
    ataqueEnemigo = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if(ataqueEnemigo == 1){
        
        ataqueEnemigo = 'FUEGO'
    }
    else if(ataqueEnemigo == 2){
        
        ataqueEnemigo = 'AGUA'
    }
    else if(ataqueEnemigo == 3){
        
        ataqueEnemigo = 'TIERRA'
    }
    
}


function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo(1,3)
    combate()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo(1,3)
    combate()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo(1,3)
    combate()
}



function combate(){
    
    if(ataqueJugador == ataqueEnemigo){
        resultado = ' | EMPATE'
    }
    else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        resultado = ' | HAS GANADO'
        vidaJugador--
    }
    else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        resultado = ' | HAS GANADO'
        vidaJugador-- 
    }
    else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        resultado = ' | HAS GANADO'
        vidaJugador--
    }
    else{
        resultado = ' | HAS PERDIDO'
        vidaEnemigo--
    }   
    
    crearMensaje()
    restarVida()
    comprobarVidas()
    
}

function crearMensaje(){
    let spanAtaqueJugador = document.getElementById('ataque-jugador') 
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
    let spanMensajeFinal = document.getElementById('mensaje-final')
    spanAtaqueJugador.innerHTML = "Tu mascota ataca con " + ataqueJugador + " | "
    spanAtaqueEnemigo.innerHTML = "El enemigo ataca con " + ataqueEnemigo
    spanMensajeFinal.innerHTML = resultado
    
}

function restarVida(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    spanVidasJugador.innerHTML = vidaJugador
    spanVidasEnemigo.innerHTML = vidaEnemigo
}

function comprobarVidas(){
    let sectionReinicio = document.getElementById('section-boton-reinicio')
    let sectionEligeAtaque = document.getElementById('elige-ataque')
    let spanMensajeFinal = document.getElementById('mensaje-final')
    if(vidaJugador == 0){
        sectionEligeAtaque.style.display = 'none'
        sectionReinicio.style.display ='block'
        spanMensajeFinal.innerHTML = resultado + " | 🎉🎉🎉 ENHORABUENA, HAS VENCIDO ESTA PARTIDA! 🎉🎉🎉"
    }
    else if(vidaEnemigo == 0){
        sectionEligeAtaque.style.display = 'none'
        sectionReinicio.style.display ='block'
        spanMensajeFinal.innerHTML = resultado + " 🎃🎃🎃 LO SIENTO, HAS SIDO DERROTADO EN ESTA PARTIDA 🎃🎃🎃"
    }
    
}



function reinicio(){
    location.reload()
}

window.addEventListener('load',inicioJuego)