function nombrePagina(url) {
    sessionStorage.setItem("url", url);
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
    console.log("Se ha cerrado")
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
            console.log(this.responseText);
            let text = this.responseText;
            let array = text.split("\t");
            if (array[3] === "FALSE") {
                alert("Revise usuario y contraseña");
            } else {
                if (array[0] == "ADMIN") {
                    sessionStorage.setItem("admin", true);
                } else {
                    sessionStorage.setItem("admin", false);
                }
                sessionStorage.setItem("ccaa", array[1]);
                sessionStorage.setItem("usu", array[2]);
                let token = array[3];
                if (token != "No tienes permisos") {
                    /*  obtenerDatosCabecera();
                    // ponemos el usuario devuelto en el hueco correspondiente
                     cargarCuentas() ;*/
                     window.alert("Has iniciado sesión");
                     document.getElementById("iniciarSesion").style.display="none";
                     document.getElementById("crearCuenta").style.display="none";
                     document.getElementById("top").style.display="none";
                     document.getElementById("menu_desplegable").style.display="block";
                     sessionStorage.setItem("inicioSesion", true);
                     document.getElementById("texto_nombre_usuario").innerHTML = sessionStorage.getItem("usu");
                     document.getElementById("texto_comunidad_autonoma").innerHTML = sessionStorage.getItem("ccaa");
                     cerrar();
                }
            }
        }
    }
    var email = document.getElementById("emailL").value;
    var pass = document.getElementById("passL").value;
    console.log(email)
    console.log(pass)

    //añadir una condición más con las expresiones regulares para comprobar los datos
    if (email == "" && pass == "") {
        window.alert("Rellene los campos")

    } else {
        console.log("Enviando datos")
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
    let comunidadAutonoma = document.getElementById("comunidadAutonoma").value;

    //condición que evalua si ambas pass coinciden, en ese caso se mandan los datos con ajax a login_json 
    let regexEmail = /(?:\w|\d)+[@](?:\w|\d)+[.](?:\w|\d){2,}/g;
    let regexPass = /^(?=(?:.*[A-Z])+)(?=(?:.*[a-z])+)(?=(?:.*\d)+)(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>])+)(?!.*(.)\1{2})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{8,20})$/g;
    condicionRegexPass = regexPass.test(passA)
    condicionRegexEmail = regexEmail.test(emailA)
    condicionPassIguales = passA === passDuplicada
    if (condicionRegexPass && condicionPassIguales && condicionRegexEmail) {
        let params = "emailA=" + emailA + "&passA=" + passA + "&passDuplicada=" + passDuplicada +
            "&nombreUsuario=" + nombreUsuario + "&comunidadAutonoma=" + comunidadAutonoma;

        req.open("POST", "php/login_json.php");
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send(params);

        // alert("Usuario creado correctamente.")
        console.log("enviando datos")


    } else {
        alert("Las contraseñas no coinciden...Intentalo de nuevo");
    }
}

function cambioTipoCont(id) {
    console.log(id);
    sessionStorage.setItem("tipoCont", id)
    console.log(tipoContaminacion);
}

var inicioSesion = sessionStorage.getItem("inicioSesion")

function comprobarInicioSesion() {
    if (inicioSesion == "true") {
        document.getElementById("iniciarSesion").style.display="none";
        document.getElementById("crearCuenta").style.display="none";
        document.getElementById("top").style.display="none";
        document.getElementById("menu_desplegable").style.display="block";
    }
}

//------------------------------------------------------------------------------------------------------
banner = 0;

array_img = ["./images/header-image.jpg", "./img/limpieza-playas-header.jpg", "./img/limpieza-bosque.jpg", "./img/playa.jpg"];


function insertarPuntos() {
    console.log("metodo puntos");
    var cant = array_img.length;
    console.log(cant);
    for (let i = 0; i < cant; i++) {
        var enlace = document.createElement("A");
        console.log(enlace);
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
        console.log(array_img[banner]);
        document.getElementById("wrapper-imagenes").style.display = "none";
        document.getElementById("imagen").style.display = "block";
        document.getElementById("imagen-fondo").setAttribute("src", array_img[banner]);
    }
    console.log(banner);
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
}

function loadEventos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var array = this.responseText.trim().split("/t");
            array.shift();
            console.log(array);
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
                console.log(arrayIds);
            }

            for (let i = 0; i < arrayIds.length; i++) {
                var eventoAnnadir = array[arrayIds[i]].split(",")
                var enlace = document.createElement("a");
                enlace.innerHTML = eventoAnnadir[0];
                var espacio = document.createElement("br")
                document.getElementById("eventos-likes").appendChild(enlace);
                document.getElementById("eventos-likes").appendChild(espacio);
            }

            arrayIds = [""];

            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < array.length; i++) {
                    if (!(arrayIds.includes(i))) {
                        var arrayDividido = array[i].split(",");
                        console.log(arrayDividido);

                        console.log(fecha);
                        var fechaDividida = fecha.split("-");
                        var annoActual = fechaDividida[0];
                        console.log(annoActual);
                        var fechaNuevaDividida = arrayDividido[1].split("-");
                        var annoNuevo = fechaNuevaDividida[0];
                        console.log(annoNuevo);

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

                        console.log(fecha);
                    }
                }
                arrayIds[j] = id;
                console.log(arrayIds);
                fecha = "5000-12-31";
            }

            for (let i = 0; i < arrayIds.length; i++) {
                var eventoAnnadir = array[arrayIds[i]].split(",")
                var enlace = document.createElement("a");
                enlace.innerHTML = eventoAnnadir[0];
                var espacio = document.createElement("br")
                document.getElementById("eventos-proximos").appendChild(enlace);
                document.getElementById("eventos-proximos").appendChild(espacio);
            }

            arrayIds = [""];

            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < array.length; i++) {
                    if (!(arrayIds.includes(i))) {
                        var arrayDividido = array[i].split(",");
                        console.log(arrayDividido);

                        console.log(fechaPublicacion);
                        var fechaDividida = fechaPublicacion.split("-");
                        var annoActual = fechaDividida[0];
                        console.log(annoActual);
                        var fechaNuevaDividida = arrayDividido[3].split("-");
                        var annoNuevo = fechaNuevaDividida[0];
                        console.log(annoNuevo);

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

                        console.log(fecha);
                    }
                }
                arrayIds[j] = id;
                console.log(arrayIds);
                fechaPublicacion = "1000-01-01";
            }

            for (let i = 0; i < arrayIds.length; i++) {
                var eventoAnnadir = array[arrayIds[i]].split(",")
                var enlace = document.createElement("a");
                enlace.innerHTML = eventoAnnadir[0];
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



