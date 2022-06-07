admin = sessionStorage.getItem("admin");
tipoContaminacion = sessionStorage.getItem("tipoCont");

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
        document.getElementById("numLikes").innerHTML = parseInt(document.getElementById("numLikes").innerHTML) - 1;
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
//////////////////////////////////////////////////////////////////////////////////7
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

                if (enlace.innerHTML == "") {
                    let pEventosSinCCAA = document.getElementById("pEventosSinCCAA").style.visibility = "visible";
                    let eventosSinCcaa = document.getElementById("eventosSinCcaa");
                    eventosSinCcaa.addEventListener("click", muestraEventosCCAA);
                }
            }
        }
    }

    let agregaEventos = document.getElementById("AgregaEvento");
    agregaEventos.setAttribute("onclick", "AgregaInfoEventos()");
    let cerrar = document.getElementById("cerrar");
    cerrar.setAttribute("onclick", "cerrar()");

    let contami = document.getElementById("tipoContaminacion");
    contami.setAttribute("value", sessionStorage.getItem("tipoCont"));
    let tipocontaminacion = contami.getAttribute("value");


    let ccaa = document.getElementById("Comunidad");
    ccaa.setAttribute("value", sessionStorage.getItem("ccaa"));
    let comunidadAutonoma = ccaa.getAttribute("value");
    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("listaEventos=" + listaEventos + "&tipocontaminacion=" + sessionStorage.getItem("tipoCont") + "&comunidadAutonoma=" + comunidadAutonoma);
}

function muestraEventosCCAA() {
    let listaEventos = document.getElementById("listaEventos").innerHTML = "";
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
    let contami = document.getElementById("tipoContaminacion");
    contami.setAttribute("value", sessionStorage.getItem("tipoCont"));
    let tipoContami = contami.getAttribute("value");
    let ccaa = document.getElementById("Comunidad");
    ccaa.setAttribute("value", "");
    req.open("POST", "php/listarEventos.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("tipoContami=" + tipoContami);
}

function listarMovimientosConfirmar() {
    let req = new XMLHttpRequest();
    document.getElementById("menu_desplegable").style.display = "flex";

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);

            let listaEventos = document.getElementById("listaEventos");

            let datos = this.responseText;
            let espacios = datos.trim();
            let array = espacios.split("\t");

            for (let i = 0; i < array.length; i++) {
                let evento = document.createElement("LI");
                evento.setAttribute("onclick", "mostrarInfoEventoConfirmar(" + i + ")");
                let enlace = document.createElement("a");

                enlace.setAttribute("class", "enlacesEventos")
                enlace.innerHTML = array[i];

                evento.appendChild(enlace);
                listaEventos.appendChild(evento);

            }
        }
    }

    req.open("POST", "php/listarEventosConfirmar.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send();
}

function mostrarInfoEventoConfirmar(posiciones) {
    let req = new XMLHttpRequest();

    let infoEventos = document.getElementById("infoEventos");
    infoEventos.style.display = "block";

    let enlace = document.getElementsByClassName("enlacesEventos")[posiciones].innerHTML;

    let cerrarInfo = document.getElementById("cerrarInfo");
    cerrarInfo.setAttribute("onclick", "cerrarInfoEventos()");

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = this.responseText;
            console.log(this.responseText);

            let espacios = datos.trim();
            let array = espacios.split("*");
            console.log(array)

            arrayTitulos = ["nombreEventoM", "fechaEventoM", "lugarEventoM", "tipoContaminacionM", "comunidadAutonomaM", "informacionEventoM"]
            for (let i = 0; i < array.length; i++) {
                console.log(arrayTitulos[i])
                document.getElementById(arrayTitulos[i]).value = "";
            }

            for (let i = 0; i < array.length; i++) {
                console.log(arrayTitulos[i])
                if (array[i] != "") {
                    document.getElementById(arrayTitulos[i]).value = array[i];
                }
            }

            revisarMeGusta();
        }
    }
    req.open("POST", "php/listarEventosConfirmar.php");
    // envío con  POST requiere cabecera y cadena de parámetros
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send("enlace=" + enlace);
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
function cerrar() {
    let divAgregaEventos = document.getElementById("divAgregaEventos");
    divAgregaEventos.style.display = "none";
}
function AgregaInfoEventos() {
    let divAgregaEventos = document.getElementById("divAgregaEventos");
    divAgregaEventos.style.display = "block";
    document.getElementById("nombreEvento").value = "";
    document.getElementById("fechaEvento").value = "";
    document.getElementById("lugarEvento").value = "";
    document.getElementById("informacionEvento").value = "";

}

function confirmarEvento() {
    let nombreEvento = document.getElementById("nombreEventoM").value;
    let fechaEvento = document.getElementById("fechaEventoM").value;
    let lugarEvento = document.getElementById("lugarEventoM").value;
    let tipoContaminacionAdd = document.getElementById("tipoContaminacionM").value;
    let comunidadAutonoma = document.getElementById("comunidadAutonomaM").value;
    let informacionEvento = document.getElementById("informacionEventoM").value;

    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("infoEventos").style.display = "none";
            location.reload();
        }
    }

    if (true) {
        req.open("POST", "php/listarEventosConfirmar.php");
        // envío con  POST requiere cabecera y cadena de parámetros
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("nombreEvento=" + nombreEvento + "&fechaEvento=" + fechaEvento + "&lugarEvento=" + lugarEvento + "&tipoContaminacionAdd=" +
            tipoContaminacionAdd + "&comunidadAutonoma=" + comunidadAutonoma + "&informacionEvento=" + informacionEvento);
    }
}

function eliminarEvento() {
    let nombreEvento = document.getElementById("nombreEventoM").value;

    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("infoEventos").style.display = "none";
            location.reload();
        }
    }

    if (true) {
        req.open("POST", "php/listarEventosConfirmar.php");
        // envío con  POST requiere cabecera y cadena de parámetros
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("nombreEvento=" + nombreEvento);
    }
}

function guardaEventos() {

    let nombreEvento = document.getElementById("nombreEvento").value;
    let fechaEvento = document.getElementById("fechaEvento").value;
    let lugarEvento = document.getElementById("lugarEvento").value;
    let informacionEvento = document.getElementById("informacionEvento").value;

    //obtengo los datos del desplegable de Comunidad Autonoma
    let lista = document.getElementById("comunidadAutonoma");

    // Obtener el índice de la opción que se ha seleccionado
    let indiceSeleccionado = lista.selectedIndex;
    // Con el índice y el array "options", obtener la opción seleccionada
    let opcionSeleccionada = lista.options[indiceSeleccionado];
    let comunidadAutonoma = opcionSeleccionada.value;


    //obtengo los datos del desplegable del tipo de Contaminación
    let listaConta = document.getElementById("tipoContaminacionAdd");

    // Obtener el índice de la opción que se ha seleccionado
    let indiceSeleccionadoConta = listaConta.selectedIndex;
    // Con el índice y el array "options", obtener la opción seleccionada
    let opcionSeleccionadaC = listaConta.options[indiceSeleccionadoConta];
    let tipoContaminacionAdd = opcionSeleccionadaC.value;

    let req = new XMLHttpRequest();

    //MODIFICADO
    if (nombreEvento != "" && fechaEvento != "" && lugarEvento != "" && tipoContaminacionAdd != "section"
        && comunidadAutonoma != "section" && tipoContaminacionAdd != "section" && informacionEvento != "") {

        req.open("POST", "php/listarEventos.php");
        // envío con  POST requiere cabecera y cadena de parámetros
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("nombreEvento=" + nombreEvento + "&fechaEvento=" + fechaEvento + "&lugarEvento=" + lugarEvento + "&tipoContaminacionAdd=" +
            tipoContaminacionAdd + "&comunidadAutonoma=" + comunidadAutonoma + "&informacionEvento=" + informacionEvento);
        alert("En los próximos días el administrador revisará el evento, en caso de que sea posible su realización se añadirá el evento junto con el resto.\nGracias por su colaboración")
    } else {
        alert("Rellene todos los campos correctamente")
    }

}

