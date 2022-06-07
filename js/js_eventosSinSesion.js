window.addEventListener("load",listarMovimientos)
admin = sessionStorage.getItem("admin");
function nombrePagina(url) {
    sessionStorage.setItem("url", url);
    document.getElementById("texto_nombre_usuario").innerHTML = sessionStorage.getItem("usu");
    document.getElementById("texto_comunidad_autonoma").innerHTML = sessionStorage.getItem("ccaa");
}

function revisarMeGusta() {
    var correoUsu = sessionStorage.getItem("correoUsu");
    var idEvento = sessionStorage.getItem("idEvento");
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var respuesta = this.responseText;
            if (respuesta == 1) {
                document.getElementById("imgLike").setAttribute("src", "./img/likes.png");
            } else {
                document.getElementById("imgLike").setAttribute("src", "./img/likes-blanco y negro.png");
            }
        }
    }

    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("meGusta=true" + "&correoUsu=" + correoUsu + "&idEvento=" + idEvento);
}

function botonLike() {
    var nombreEvento = document.getElementById("nombreEventoM").value;
    console.log(nombreEvento);
    var srcImagenLike = document.getElementById("imgLike").getAttribute("src");
    var like = 0;
    if (srcImagenLike == "./img/likes.png") {
        document.getElementById("imgLike").setAttribute("src", "./img/likes-blanco y negro.png");
        document.getElementById("numLikes").innerHTML = parseInt(document.getElementById("numLikes").innerHTML)  - 1;
        like--;
        quitarMeGusta();
    } else {
        document.getElementById("imgLike").setAttribute("src", "./img/likes.png");
        document.getElementById("numLikes").innerHTML = parseInt(document.getElementById("numLikes").innerHTML) + 1;
        like++;
        annadirMeGusta();
    }
    let req = new XMLHttpRequest();
    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("nombreEvento=" + nombreEvento + "&like=" + like);
}

function annadirMeGusta() {
    var correoUsu = sessionStorage.getItem("correoUsu");
    var idEvento = sessionStorage.getItem("idEvento");

    let req = new XMLHttpRequest();
    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("annadirMeGusta=true" + "&correoUsu=" + correoUsu + "&idEvento=" + idEvento);
}

function quitarMeGusta() {
    var correoUsu = sessionStorage.getItem("correoUsu");
    var idEvento = sessionStorage.getItem("idEvento");

    let req = new XMLHttpRequest();
    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("quitarMeGusta=true" + "&correoUsu=" + correoUsu + "&idEvento=" + idEvento);
}

function suscribirseEvento() {
    let idEvento = sessionStorage.getItem("idEvento");
    let correoUsu = sessionStorage.getItem("correoUsu");
    let imgSuscribir = document.getElementById("imgSuscribir").getAttribute("src");

    
    console.log(idEvento)
    console.log(correoUsu)

    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("imgSuscribir").setAttribute("src", "./img/suscribir-degradado.png");

        }
    };

    if (imgSuscribir == "./img/suscribir.png") {
        console.log("suscribiendo...");
        req.open("POST", "php/listarEventos.php");
        // envío con  POST requiere cabecera y cadena de parámetros
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("idEvento=" + idEvento + "&correoUsu=" + correoUsu);
    }

}

function revisarSubscripcion() {
    var correoUsu = sessionStorage.getItem("correoUsu");
    var idEvento = sessionStorage.getItem("idEvento");
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var respuesta = this.responseText;
            if (respuesta == 1) {
                document.getElementById("imgSuscribir").setAttribute("src", "./img/suscribir-degradado.png");
            } else {
                document.getElementById("imgSuscribir").setAttribute("src", "./img/suscribir.png");
            }
        }
    }

    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("suscripcion=true" + "&correoUsu=" + correoUsu + "&idEvento=" + idEvento);
}

// Abre el desplegable de usuario
function mostrarDatosUsu() {
    logoAdmin(admin);
    document.getElementById("info_usu").style.display = "block";
    document.getElementById("cont_logo_usu").setAttribute("onclick", "cerrarDatosUsu()");
    cerrarMenu();
}

// Cierra el desplegable de usuario
function cerrarDatosUsu() {
    document.getElementById("info_usu").style.display = "none";
    document.getElementById("cont_logo_usu").setAttribute("onclick", "mostrarDatosUsu()");
}
// Abre el menu desplegable
function mostrarMenu() {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("cont_logo_menu").setAttribute("onclick", "cerrarMenu()");
    cerrarDatosUsu();

}

// Cierra el menu desplegable
function cerrarMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("cont_logo_menu").setAttribute("onclick", "mostrarMenu()");
}
// Cambia el simbolo si es admin
function logoAdmin(admin) {
    if (admin == true) {
        document.getElementById("logo_admin").setAttribute("src", "./img/user-astronaut-solid.svg")
    }
}
function cerrarSesion() {
    /*cerrar sesión*/
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            /*cambiar visibilidades de las secciones*/
            alert("Se ha cerrado la sesión");
            sessionStorage.setItem("inicioSesion", false);
            sessionStorage.setItem("admin", "");
            window.location.href = "./index.html";
        }
    };
    xhttp.open("GET", "./php/logout.php", true);
    xhttp.send();
    return false;
}

/*AÑADIR FUNCIONES DE SUSCRIBIRSE Y DAR LIKE A LOS EVENTOS*/

function listarMovimientos() {
    let req = new XMLHttpRequest();
    document.getElementById("menu_desplegable").style.display = "flex";
    console.log(sessionStorage.getItem("tipoCont"));

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let listaEventos = document.getElementById("listaEventos");

            let datos = this.responseText;
            let espacios = datos.trim();
            let array = espacios.split("\t");

            for (let i = 0; i < array.length; i++) {
                let evento = document.createElement("LI");
                evento.setAttribute("onclick", "mostrarInfoEvento(" + i + ")");
                let enlace = document.createElement("a");

                enlace.setAttribute("class", "enlacesEventos")
                enlace.innerHTML = array[i];

                evento.appendChild(enlace);
                listaEventos.appendChild(evento);

            }
        }
    }

    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("listaEventos=" + listaEventos);
}


function mostrarInfoEvento(posiciones) {
    let req = new XMLHttpRequest();

    let infoEventos = document.getElementById("infoEventos");
    infoEventos.style.display = "block";

    let enlace = document.getElementsByClassName("enlacesEventos")[posiciones].innerHTML;

    let cerrarInfo = document.getElementById("cerrarInfo");
    cerrarInfo.setAttribute("onclick", "cerrarInfoEventos()");

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = this.responseText;
            console.log(datos);

            let espacios = datos.trim();
            let array = espacios.split("*");
            sessionStorage.setItem("idEvento", array[0]);

            arrayTitulos = ["nombreEventoM", "fechaEventoM", "lugarEventoM", "tipoContaminacionM", "comunidadAutonomaM", "informacionEventoM"]
            for (let i = 0; i < array.length - 2; i++) {
                console.log(arrayTitulos[i])
                document.getElementById(arrayTitulos[i]).value = "";
            }

            for (let i = 0; i < array.length - 2; i++) {
                console.log(arrayTitulos[i])
                if (array[i + 1] != "") {
                    document.getElementById(arrayTitulos[i]).value = array[i + 1];
                }
            }

            document.getElementById("numLikes").innerHTML = array[array.length - 1];
            revisarMeGusta();
            revisarSubscripcion();
        }
    }
    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("enlace=" + enlace);

}

function cerrarInfoEventos() {
    let infoEventos = document.getElementById("infoEventos");
    infoEventos.style.display = "none";

}