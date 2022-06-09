function nombrePagina(url) {
    sessionStorage.setItem("url", url);
}

function muestraCondiciones(){
    document.getElementById("condiciones").style.display="block";
}

function mostrarLogin() {
    let formCuenta = document.getElementById("mostrarCuenta");
    let formLogin = document.getElementById("login");
    formLogin.style.display = "block";
    formCuenta.style.display = "none";

}
function mostrarAlta() {
    let formLogin = document.getElementById("login");
    formLogin.style.display = "none";

    let formCuenta = document.getElementById("mostrarCuenta");
    formCuenta.style.display = "block";

}
function cerrar() {
    let login = document.getElementById("login");
    login.style.display = "none";

    let mostrarCuenta = document.getElementById("mostrarCuenta");
    mostrarCuenta.style.display = "none";
}



function enviaDatosLogin(event) {//función con la que voy a mandar los datos del form al php
    event.preventDefault();
    let req;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let text = this.responseText;
            let array = text.split("\t");
            if (array[4] === "FALSE") {
                alert("Revise usuario y contraseña");
            } else {
                if (array[0] == "ADMIN") {
                    sessionStorage.setItem("admin", true);
                } else {
                    sessionStorage.setItem("admin", false);
                }
                sessionStorage.setItem("ccaa", array[1]);
                sessionStorage.setItem("usu", array[2]);
                sessionStorage.setItem("correoUsu", array[3]);
                let token = array[4];
                if (token != "No tienes permisos") {
                    /*  obtenerDatosCabecera();
                    // ponemos el usuario devuelto en el hueco correspondiente
                     cargarCuentas() ;*/
                    window.alert("Has iniciado sesión");
                    document.getElementById("iniciarSesion").style.display = "none";
                    document.getElementById("crearCuenta").style.display = "none";
                    document.getElementById("top").style.display = "none";
                    document.getElementById("menu_desplegable").style.display = "block";
                    sessionStorage.setItem("inicioSesion", true);
                    cerrar();
                    window.location.href = "./index.html";

                }
            }
        }
    }
    var email = document.getElementById("emailL").value;
    var pass = document.getElementById("passL").value;

    //añadir una condición más con las expresiones regulares para comprobar los datos
    if (email == "" || pass == "") {
        window.alert("Rellene los campos")

    } else {
        req.open("POST", "php/login_json.php");
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("email=" + email + "&pass=" + pass);
    }
}


function enviaDatosAlta() {
    /*en caso de que el boton pulsado coincida con este id, se mandarán los datos del formulario 
      en el que el usuario se da de alta*/

    let req;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }

    let emailA = document.getElementById("emailA").value;
    let passA = document.getElementById("passA").value;
    let passDuplicada = document.getElementById("passDuplicada").value;//TENGO QUE COMPROBAR SI LA CONTRASEÑA ES IGUAL QUE LA ANTYERIOR
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    //obtengo los datos del desplegable de Comunidad Autonoma
    let lista = document.getElementById("comunidadAutonoma");
    // Obtener el índice de la opción que se ha seleccionado
    let indiceSeleccionado = lista.selectedIndex;
    // Con el índice y el array "options", obtener la opción seleccionada
    let opcionSeleccionada = lista.options[indiceSeleccionado];
    let comunidadAutonoma = opcionSeleccionada.value;
    
    //condición que evalua si ambas pass coinciden, en ese caso se mandan los datos con ajax a login_json 
    let regexEmail = /(?:\w|\d)+[@](?:\w|\d)+[.](?:\w|\d){2,}/g;
    let regexPass = /^(?=(?:.*[A-Z])+)(?=(?:.*[a-z])+)(?=(?:.*\d)+)(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>])+)(?!.*(.)\1{2})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{8,20})$/g;
    condicionRegexPass = regexPass.test(passA)
    condicionRegexEmail = regexEmail.test(emailA)
    condicionPassIguales = passA === passDuplicada
    
    let casillaVerifica = document.getElementById("casillaVerifica").checked;
    console.log(emailA)
    if (condicionRegexPass && condicionPassIguales && condicionRegexEmail && casillaVerifica === true) {
        let params = "emailA=" + emailA + "&passA=" + passA + "&passDuplicada=" + passDuplicada +
            "&nombreUsuario=" + nombreUsuario + "&comunidadAutonoma=" + comunidadAutonoma + "&casillaVerifica=" + casillaVerifica;
        req.open("POST", "php/login_json.php");
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send(params);
        alert("Usuario creado correctamente.")
        document.getElementById("condiciones").style.display="none";
    } else if (emailA == "" && passA == "" && nombreUsuario == "" && comunidadAutonoma == "section") {
        alert("Rellene todos los campos");
    } else if (!condicionPassIguales) {
        alert("Las contraseñas no coinciden...Intentalo de nuevo");
    } else if (!condicionRegexPass) {
        alert("La contraseña no cumple los requisitos");
    } else if (casillaVerifica === false) {
        alert("Para registrarse tiene que marcar la casilla de terminos y condiciones")
    } else {
        alert("no se puede crear el usuario, pruebe más tarde")
    }
}

function cambioTipoCont(id) {
    console.log(id);
    sessionStorage.setItem("tipoCont", id);
    window.location.href = "./contaminacion_flex.html";
}

var inicioSesion = sessionStorage.getItem("inicioSesion")

function comprobarInicioSesion() {
    if (inicioSesion == "true") {
        document.getElementById("iniciarSesion").style.display = "none";
        document.getElementById("crearCuenta").style.display = "none";
        document.getElementById("top").style.display = "none";
        document.getElementById("menu_desplegable").style.display = "block";
        document.getElementById("flecha-apertura").style.visibility = "visible";
        document.getElementById("texto_nombre_usuario").innerHTML = sessionStorage.getItem("usu");
        document.getElementById("texto_comunidad_autonoma").innerHTML = sessionStorage.getItem("ccaa");
    }
}

//------------------------------------------------------------------------------------------------------
banner = 0;

array_img = ["./images/header-image.jpg", "./img/limpieza-playas-header.jpg", "./img/limpieza-bosque.jpg", "./img/playa.jpg"];


function insertarPuntos() {
    var cant = array_img.length;
    for (let i = 0; i < cant; i++) {
        var enlace = document.createElement("A");
        var imagen = document.createElement("IMG");
        imagen.setAttribute("class", "punto");
        imagen.setAttribute("id", "punto" + i);
        if (i == 0) {
            imagen.setAttribute("src", "./img/circle-solid_white.svg");
        } else {
            imagen.setAttribute("src", "./img/circle-regular_white.svg");
        }

        enlace.appendChild(imagen);
        document.getElementById("puntos").appendChild(enlace);
    }

}

function cambiarBanner(cant) {

    if (cant == 1) {
        banner += 1;
        if (banner > array_img.length - 1) {
            document.getElementById("punto0").setAttribute("src", "./img/circle-solid_white.svg");
            document.getElementById("punto" + (banner - 1)).setAttribute("src", "./img/circle-regular_white.svg");
        } else {
            document.getElementById("punto" + banner).setAttribute("src", "./img/circle-solid_white.svg");
            document.getElementById("punto" + (banner - 1)).setAttribute("src", "./img/circle-regular_white.svg");
        }
    } else {
        banner -= 1;
        if (banner < 0) {
            document.getElementById("punto" + (array_img.length - 1)).setAttribute("src", "./img/circle-solid_white.svg");
            document.getElementById("punto0").setAttribute("src", "./img/circle-regular_white.svg");
        } else {
            document.getElementById("punto" + banner).setAttribute("src", "./img/circle-solid_white.svg");
            document.getElementById("punto" + (banner + 1)).setAttribute("src", "./img/circle-regular_white.svg");
        }
    }

    if (banner > array_img.length - 1) {
        banner = 0;
    } else if (banner < 0) {
        banner = array_img.length - 1;
    }

    if (banner == 0) {
        document.getElementById("wrapper-imagenes").style.display = "block";
        document.getElementById("imagen").style.display = "none";
    } else {
        document.getElementById("wrapper-imagenes").style.display = "none";
        document.getElementById("imagen").style.display = "block";
        document.getElementById("imagen-fondo").setAttribute("src", array_img[banner]);
    }
}

function abrirDesplegable() {
    document.getElementById('desplegable-eventos').style.display = "block";
    document.getElementById('flecha-apertura').style.right = "30%";
    document.getElementById('flecha-apertura').setAttribute("onclick", "cerrarDesplegable()");
}

function cerrarDesplegable() {
    document.getElementById('desplegable-eventos').style.display = "none";
    document.getElementById('flecha-apertura').style.right = "0%";
    document.getElementById('flecha-apertura').setAttribute("onclick", "abrirDesplegable()");
    document.getElementById('infoEventosBanner').style.display = "none";
}

function loadEventos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var array = this.responseText.trim().split("/t");
            array.shift();
            var fecha = "5000-12-31";
            var fechaPublicacion = "1000-01-01";
            var id;
            var likes;
            var arrayIds = [""];

            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < array.length; i++) {
                    if (!(arrayIds.includes(i))) {
                        var arrayDividido = array[i].split(",");
                        if (i == 0) {
                            likes = arrayDividido[2];
                            id = i;
                        } else {
                            likesNuevos = arrayDividido[2];
                            if (likesNuevos > likes) {
                                likes = likesNuevos;
                                id = i;
                            }
                        }
                    }
                }
                arrayIds[j] = id;
            }

            for (let i = 0; i < arrayIds.length; i++) {
                var eventoAnnadir = array[arrayIds[i]].split(",")
                var enlace = document.createElement("a");
                enlace.innerHTML = eventoAnnadir[0];
                enlace.setAttribute("onclick", "mostrarInfoEventoBanner('" + eventoAnnadir[0] + "')");
                var espacio = document.createElement("br")
                document.getElementById("eventos-likes").appendChild(enlace);
                document.getElementById("eventos-likes").appendChild(espacio);
            }

            arrayIds = [""];

            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < array.length; i++) {
                    if (!(arrayIds.includes(i))) {
                        var arrayDividido = array[i].split(",");

                        var fechaDividida = fecha.split("-");
                        var annoActual = fechaDividida[0];
                        var fechaNuevaDividida = arrayDividido[1].split("-");
                        var annoNuevo = fechaNuevaDividida[0];

                        if (annoNuevo < annoActual) {
                            fecha = arrayDividido[1];
                            id = i;
                        } else if (annoNuevo == annoActual) {
                            var mesActual = fechaDividida[1];
                            var mesNuevo = fechaNuevaDividida[1];
                            if (mesNuevo < mesActual) {
                                fecha = arrayDividido[1];
                                id = i;
                            } else if (mesNuevo == mesActual) {
                                var diaActual = fechaDividida[2];
                                var diaNuevo = fechaNuevaDividida[2];
                                if (diaNuevo < diaActual) {
                                    fecha = arrayDividido[1];
                                    id = i;
                                }
                            }
                        }

                    }
                }
                arrayIds[j] = id;
                fecha = "5000-12-31";
            }

            for (let i = 0; i < arrayIds.length; i++) {
                var eventoAnnadir = array[arrayIds[i]].split(",")
                var enlace = document.createElement("a");
                enlace.innerHTML = eventoAnnadir[0];
                console.log(eventoAnnadir[0]);
                enlace.setAttribute("onclick", "mostrarInfoEventoBanner('" + eventoAnnadir[0] + "')");
                var espacio = document.createElement("br")
                document.getElementById("eventos-proximos").appendChild(enlace);
                document.getElementById("eventos-proximos").appendChild(espacio);
            }

            arrayIds = [""];

            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < array.length; i++) {
                    if (!(arrayIds.includes(i))) {
                        var arrayDividido = array[i].split(",");


                        var fechaDividida = fechaPublicacion.split("-");
                        var annoActual = fechaDividida[0];
                        var fechaNuevaDividida = arrayDividido[3].split("-");
                        var annoNuevo = fechaNuevaDividida[0];

                        if (annoNuevo > annoActual) {
                            fechaPublicacion = arrayDividido[3];
                            id = i;
                        } else if (annoNuevo == annoActual) {
                            var mesActual = fechaDividida[1];
                            var mesNuevo = fechaNuevaDividida[1];
                            if (mesNuevo > mesActual) {
                                fechaPublicacion = arrayDividido[3];
                                id = i;
                            } else if (mesNuevo == mesActual) {
                                var diaActual = fechaDividida[2];
                                var diaNuevo = fechaNuevaDividida[2];
                                if (diaNuevo > diaActual) {
                                    fechaPublicacion = arrayDividido[3];
                                    id = i;
                                }
                            }
                        }

                    }
                }
                arrayIds[j] = id;
                fechaPublicacion = "1000-01-01";
            }

            for (let i = 0; i < arrayIds.length; i++) {
                var eventoAnnadir = array[arrayIds[i]].split(",")
                var enlace = document.createElement("a");
                enlace.innerHTML = eventoAnnadir[0];
                enlace.setAttribute("onclick", "mostrarInfoEventoBanner('" + eventoAnnadir[0] + "')");
                var espacio = document.createElement("br")
                document.getElementById("eventos-recientes").appendChild(enlace);
                document.getElementById("eventos-recientes").appendChild(espacio);
            }
        }
    };

    xhttp.open("POST", "./php/eventos.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

// import {mostrarInfoEventoBanner} from './js_eventos.js';



function mostrarInfoEventoBanner(nombreEvento) {
    let req = new XMLHttpRequest();

    if (nombreEvento != "") {
        let infoEventos = document.getElementById("infoEventosBanner");
        infoEventos.style.display = "block";

        // let cerrarInfo = document.getElementById("cerrarInfo");
        // cerrarInfo.setAttribute("onclick", "cerrarInfoEventos()");

        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = this.responseText;

                let espacios = datos.trim();
                let array = espacios.split("*");
                console.log(array)

                arrayTitulos = ["nombreEventoBanner", "fechaEventoBanner", "lugarEventoBanner", "tipoContEventoBanner", "ccaaEventoBanner", "informacionEventoBanner"]
                for (let i = 0; i < array.length -2; i++) {
                    console.log(arrayTitulos[i])
                    document.getElementById(arrayTitulos[i]).innerHTML = "";
                }

                for (let i = 0; i < array.length -2; i++) {
                    console.log(arrayTitulos[i])
                    if (array[i] != "") {
                        document.getElementById(arrayTitulos[i]).innerHTML = array[i +1];
                    }
                }
                sessionStorage.setItem("tipoCont", array[4]);
                tipoContaminacion = sessionStorage.getItem("tipoCont");


            }
        }
        req.open("POST", "php/listarEventos.php");
        // envío con  POST requiere cabecera y cadena de parámetros
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("enlace=" + nombreEvento);
    }
}

function redireccion() {
    window.location.href = "./listaEventos.html";
}





