admin = sessionStorage.getItem("admin");

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

