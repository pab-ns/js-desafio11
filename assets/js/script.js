class Multimedia {
    constructor (urlMm){
        this._urlMm = urlMm
    }

    get urlMm (){
        return this._urlMm
    }

    setInicio (){
        console.log ("Este método es para realizar un cambio en la URL del video")
    }
}

class Reproductor extends Multimedia {
    // Recibe url de video y ID del espacio del DOM
    constructor (urlMm, idR){
        super (urlMm);
        this.idR = idR
    }

    setInicio(tiempo){
        this._urlMm += `?start=${tiempo}`
    }

    playMultimedia (){
        let iframeEle = document.querySelector(this.idR);
        iframeEle.setAttribute("src", this.urlMm);
    }
}


// Captura de iframes
const iframeMusicaEle = document.getElementById("musica");
const iframePeliEle = document.getElementById("peliculas");
const iframeSerieEle = document.getElementById("series");


// crear nuevos Class Reporductores
let repMusica = new Reproductor ("https://www.youtube.com/embed/V3Jc7T4hmfo", "#musica");

let repPelicula = new Reproductor ("https://www.youtube.com/embed/pFc6I0rgmgY", "#peliculas");

let repSerie = new Reproductor ("https://www.youtube.com/embed/JT_3-oq6Kgc", "#series");


// capturar evento accordeon
// addeventlistener

const btnMusica = document.getElementById("btn-musica")
const btnPelicula = document.getElementById("btn-pelicula")
const btnSerie = document.getElementById("btn-serie")

// musica
btnMusica.addEventListener("click", function(){
    repMusica.playMultimedia();
});
repMusica.setInicio(15);

// peli
btnPelicula.addEventListener("click", function(){
    repPelicula.playMultimedia();
});
repPelicula.setInicio(50);

// serie
btnSerie.addEventListener("click", function(){
    repSerie.playMultimedia();
});
repSerie.setInicio(10);

