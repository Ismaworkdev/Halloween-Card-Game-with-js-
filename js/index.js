let array = [ "araña.png" , "ataud.png" ,"bruja.png" , "calabaza.png" , "caldera.png" , "candy.png" , "cara.png" , "castillo.png" , "craneo.png" , "demonio.png" , "dracula.png" , "esqueleto.png" , "fantasma.png" , "gato.png" , "grupo.png" , "luna.png" , "mago.png" , "manzana.png"  , "minicalabaza.png" , "momia.png" , "pocion.png"  , "telaraña.png"  , "tumbas.png" , "vela.png"];
let perdido = document.getElementById("perdido");
let ganado = document.getElementById("ganado");
let lotengo = document.getElementById("lotengo");
let nolotengo = document.getElementById("nolotengo");
let iniciar = document.getElementById("iniciar");
let numbers_maquina = document.querySelector(".numbers-maquina")
let numbers_jugador = document.querySelector(".numbers-jugador")
let maqui = document.getElementById("maqui");
let juga = document.getElementById("juga");
let next = document.getElementById("next");
let ronda = document.querySelector(".ronda")

juga.style.display = "none";
maqui.style.display = "none";
perdido.style.display = "none";
ganado.style.display = "none";
lotengo.style.display = "none";
nolotengo.style.display = "none";
next.style.display = "none";
let imagenes = document.querySelectorAll('IMG');
let apulsado = false; 

let comprobar = (event) => {
    nolotengo.style.display = "none";
    lotengo.style.display = "none";
    apulsado = true; 
    let hayalgo = false;
        let img_jugador = document.querySelector(".img-carta-jugador");
    let imgs_jugar = img_jugador.querySelectorAll("IMG");
    
    let img_random = document.querySelector(".img-carta-random");
    let imgs_carta = img_random.querySelectorAll("IMG");
    for (let i = 0; i < imgs_jugar.length; i++) {
    for (let j = 0 ; j < imgs_carta.length; j++) {
    
      if (imgs_carta[j].src == imgs_jugar[i].src) {
        hayalgo = true;
      }
    }
    }
    
    
    
    console.log("Cartas del jugador : ",imgs_jugar)
    console.log("Cartas del carta  :  ",imgs_carta )
        if (event.target === lotengo) {
          if (hayalgo == true) {
            numbers_jugador.textContent =  Number(numbers_jugador.textContent) + 1; 
            maqui.style.display = "none";
    juga.style.display = "flex";
          }else{
            numbers_jugador.textContent =  Number(numbers_jugador.textContent) - 1; 
            maqui.style.display = "flex";
            juga.style.display = "none";
          }
    
    
    
        } else if (event.target === nolotengo) {
            if (hayalgo == false) {
                numbers_jugador.textContent =  Number(numbers_jugador.textContent) + 1; 
     maqui.style.display = "none";
    juga.style.display = "flex";
              }else{
                numbers_jugador.textContent =  Number(numbers_jugador.textContent) - 1; 
                maqui.style.display = "flex";
                juga.style.display = "none";
              }
        }
        next.style.display = "flex";

    }

let jugar = () => {
    ganado.style.display = "none";

    perdido.style.display = "none";
    for (let i = 0; i < imagenes.length; i++) {
        let rand = Math.floor(Math.random() * array.length);
        imagenes[i].setAttribute('src', './assets/img/' + array[rand]);
    }

    iniciar.style.display = "none";
    lotengo.style.display = "flex";
    nolotengo.style.display = "flex";

    if (apulsado == false) {
        maquina_rand();
    }
    numbers_jugador.textContent = "0";
    ronda.textContent= "1";
    numbers_maquina.textContent = "0"; 

}

let maquina_rand = () => {
    let rand1 = Math.floor(Math.random() * 10000);
    let asaltado = false;

    setTimeout(() => {
        if (apulsado || Number(ronda.textContent) == 10) {
            console.log("Deteniendo ");
            return; 
        }

        maquina(); 
        asaltado = true;
        
        if (asaltado === true) {
            console.log("Ha saltado ");
            nolotengo.style.display = "none";
            lotengo.style.display = "none";
            asaltado = false;
        }
        next.style.display = "flex";
        maqui.style.display = "flex";
        juga.style.display = "none";
    }, rand1);
    
}




apulsado = false;


let maquina = ()=>{
    let hayalgo = false;
    let img_jugador = document.querySelector(".img-carta-maquina");
    let imgs_jugar = img_jugador.querySelectorAll("IMG");
    
    let img_random = document.querySelector(".img-carta-random");
    let imgs_carta = img_random.querySelectorAll("IMG");
    for (let i = 0; i < imgs_jugar.length; i++) {
    for (let j = 0 ; j < imgs_carta.length; j++) {
    
      if (imgs_carta[j].src == imgs_jugar[i].src) {
        hayalgo = true;
      }

    }
    }

    if (hayalgo == true) {
        
        numbers_maquina.textContent =  Number(numbers_maquina.textContent) + 1; 
    }else if(hayalgo == false){
        numbers_maquina.textContent =  Number(numbers_maquina.textContent) + 1; 

    }
};
let siguinteronda = ()=>{
    nolotengo.style.display = "flex";
    lotengo.style.display = "flex";
    for (let i = 0; i < imagenes.length; i++) {
        let rand = Math.floor(Math.random() * array.length);
        imagenes[i].setAttribute('src', './assets/img/' + array[rand]);
    }

    maqui.style.display = "none"; 
    juga.style.display = "none"; 
    ronda.textContent = Number(ronda.textContent) + 1; 
     apulsado = false; 
     next.style.display = "none";

     if (Number(ronda.textContent) == 10) {
        iniciar.style.display = "flex"; 
        maqui.style.display = "none"
         juga.style.display = "none"
        if (Number(numbers_jugador.textContent) >  Number(numbers_maquina.textContent)) {
            ganado.style.display = "flex";
             iniciar.style.display = "flex"; 
          
        }else{
            perdido.style.display = "flex";
            iniciar.style.display = "flex"; 
        }

        lotengo.style.display = "none"; 
        nolotengo.style.display = "none"; 
       


     }else{
        maquina_rand();
     }
   
    
       
    
}



next.addEventListener('click' , siguinteronda);
lotengo.addEventListener('click', comprobar);
nolotengo.addEventListener('click', comprobar);
iniciar.addEventListener('click' , jugar);