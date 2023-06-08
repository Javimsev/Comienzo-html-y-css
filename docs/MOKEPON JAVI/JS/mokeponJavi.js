let ataqueJugador
let mascotaEnemigo
let ataqueEnemigo
let resultado    
let vidaJugador =  3
let vidaEnemigo =  3



function inicioJuego(){
 

    let sectionEligeTuMascota = document.getElementById('seleccionar-mascota')
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

    let imgPerrita = document.getElementById('img-perrita') 
    let imgSquizo = document.getElementById('img-squizo')
    let imgVeletas = document.getElementById('img-veletas')

   
    
    if(mascotaHipodoge.checked){    
        spanMascotaJugador.innerHTML = 'Perrita'
        imgPerrita.style.display = 'block'
        imgSquizo.style.display = 'none'
        imgVeletas.style.display = 'none'
        
    }
    else if(mascotaCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Squizo'
        imgPerrita.style.display = 'none'
        imgSquizo.style.display = 'block'
        imgVeletas.style.display = 'none'
    }
    else if(mascotaRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Veletas'
        imgPerrita.style.display = 'none'
        imgSquizo.style.display = 'none'
        imgVeletas.style.display = 'block'
    }
    else{
        alert("Debes elegir tu mascota!")
    }
    
    enemigoAleatorio(1,3)
    let sectionEligeTuMascota = document.getElementById('seleccionar-mascota')
    sectionEligeTuMascota.style.display = 'none'
    let sectionEligeAtaque = document.getElementById('elige-ataque')
    sectionEligeAtaque.style.display = 'flex'
    let sectionMensajesMascotasVidas = document.getElementById('mensajes-mascotas-vidas')

}

function enemigoAleatorio(min,max){
    let eleccionEnemigo = Math.floor(Math.random() * (max - min + 1)) + min;
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    let imgPerritaEnemigo = document.getElementById('img-perrita-enemigo') 
    let imgSquizoEnemigo = document.getElementById('img-squizo-enemigo')
    let imgVeletasEnemigo = document.getElementById('img-veletas-enemigo')
    
    
    if(eleccionEnemigo == 1){
        spanMascotaEnemigo.innerHTML = 'Perrita'
        imgPerritaEnemigo.style.display = 'block'
        imgSquizoEnemigo.style.display = 'none'
        imgVeletasEnemigo.style.display = 'none'
    }
    else if(eleccionEnemigo == 2){
        spanMascotaEnemigo.innerHTML = 'Squizo'
        imgPerritaEnemigo.style.display = 'none'
        imgSquizoEnemigo.style.display = 'block'
        imgVeletasEnemigo.style.display = 'none'
    }
    else if(eleccionEnemigo == 3){
        spanMascotaEnemigo.innerHTML = 'Veletas'
        imgPerritaEnemigo.style.display = 'none'
        imgSquizoEnemigo.style.display = 'none'
        imgVeletasEnemigo.style.display = 'block'
    }   
    
    
}

function ataqueAleatorioEnemigo(min,max){
    ataqueEnemigo = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if(ataqueEnemigo == 1){
        
        ataqueEnemigo = 'Mentira Evasiva'
    }
    else if(ataqueEnemigo == 2){
        
        ataqueEnemigo = ' Puñalada Traicionera'
    }
    else if(ataqueEnemigo == 3){
        
        ataqueEnemigo = 'Arrebato De Balbuceos'
    }
    
}


function ataqueFuego(){
    ataqueJugador = 'Mentira Evasiva'
    ataqueAleatorioEnemigo(1,3)
    combate()
}
function ataqueAgua(){
    ataqueJugador = 'Puñalada Traicionera'
    ataqueAleatorioEnemigo(1,3)
    combate()
}
function ataqueTierra(){
    ataqueJugador = 'Arrebato De Balbuceos'
    ataqueAleatorioEnemigo(1,3)
    combate()
}



function combate(){
    
    if(ataqueJugador == ataqueEnemigo){
        resultado = 'EMPATE'
    }
    else if(ataqueJugador == 'Mentira Evasiva' && ataqueEnemigo == 'Arrebato De Balbuceos'){
        resultado = 'HAS GANADO'
        vidaEnemigo--
    }
    else if(ataqueJugador == ' Puñalada Traicionera' && ataqueEnemigo == 'Mentira Evasiva'){
        resultado = 'HAS GANADO'
        vidaEnemigo-- 
    }
    else if(ataqueJugador == 'Arrebato De Balbuceos' && ataqueEnemigo == ' Puñalada Traicionera'){
        resultado = 'HAS GANADO'
        vidaEnemigo--
    }
    else{
        resultado = 'HAS PERDIDO'
        vidaJugador--
    }   
    
    crearMensaje()
    restarVida()
    comprobarVidas()
    
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

   
    sectionMensajes.innerHTML = resultado
    ataqueDelJugador.innerHTML = "Ataque: " +  ataqueJugador
    ataqueDelEnemigo.innerHTML = "Ataque: " + ataqueEnemigo 


    /* let nuevoPJugador = document.createElement('p')
    nuevoPJugador.textContent = ataqueJugador
    ataqueDelJugador.appendChild(nuevoPJugador)

    let nuevoPEnemigo = document.createElement('p')
    nuevoPEnemigo.textContent = ataqueEnemigo
    ataqueDelEnemigo.appendChild(nuevoPEnemigo) */


}

function restarVida(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    spanVidasJugador.innerHTML = "Vidas Jugador: "+ vidaJugador
    spanVidasEnemigo.innerHTML = "Vidas Enemigo: " + vidaEnemigo
}

function comprobarVidas(){
    let sectionReinicio = document.getElementById('section-boton-reinicio')
    let sectionEligeAtaque = document.getElementById('elige-ataque')
    let sectionMensajes = document.getElementById('resultado')
    if(vidaJugador <= 0){
        sectionReinicio.style.display ='block'
        sectionMensajes.innerHTML = "Enhorabuena,!has vencido! después de todo parece que si hay huevos debajo de tu pantalón, aun así no te confíes, siempre puede aparecer alguien que te recuerde lo maricón que eres."
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click', anularAtaques)
        let botonAgua = document.getElementById('boton-agua')
        botonAgua.addEventListener('click', anularAtaques)
        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.addEventListener('click', anularAtaques)
        
    }
    else if(vidaEnemigo <= 0){
        sectionReinicio.style.display ='block'
        sectionMensajes.innerHTML = " Lo siento, has sido derrotado en esta partida, parece que te has dejado los huevos en casa. Suerte en tu próxima ronda, tal vez si no juegas como una maricona te salves de que te vuelvan a taladrar el culo."
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click', anularAtaques)
        let botonAgua = document.getElementById('boton-agua')
        botonAgua.addEventListener('click', anularAtaques)
        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.addEventListener('click', anularAtaques)
        
    }
    
   
    
}

function anularAtaques(){
   ataqueJugador = alert("LA PARTIDA HA TERMINADO, REINICIA PARA JUGAR OTRA PARTIDA")


}

function reinicio(){
    location.reload()
}

window.addEventListener('load',inicioJuego)