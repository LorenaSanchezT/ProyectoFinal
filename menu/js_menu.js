admin = true;
tipoContaminacion = "urbana";


// Abre el desplegable de usuario
function mostrarDatosUsu() {
    logoAdmin(admin);
    document.getElementById("info_usu").style.display = "block";
    if (tipoContaminacion == "maritima") {
        document.getElementById("cont_logo_usu").style.backgroundColor = "#80b1b3";
    }
    else if (tipoContaminacion == "rural") {
        document.getElementById("cont_logo_usu").style.backgroundColor = "#aed75b";
    }
    else if (tipoContaminacion == "urbana") {
        document.getElementById("cont_logo_usu").style.backgroundColor = "#eb2d53";
    } document.getElementById("logo_usu").setAttribute("src", "../img/circle-user-regular-white.svg");
    document.getElementById("cont_logo_usu").setAttribute("onclick", "cerrarDatosUsu()");
    cerrarMenu();
}

// Cierra el desplegable de usuario
function cerrarDatosUsu() {
    document.getElementById("info_usu").style.display = "none";
    if (tipoContaminacion == "maritima") {
        document.getElementById("cont_logo_usu").style.backgroundColor = "cadetblue";
    }
    else if (tipoContaminacion == "rural") {
        document.getElementById("cont_logo_usu").style.backgroundColor = "yellowgreen";
    }
    else if (tipoContaminacion == "urbana") {
        document.getElementById("cont_logo_usu").style.backgroundColor = "crimson";
    }
    document.getElementById("logo_usu").setAttribute("src", "../img/circle-user-regular.svg");
    document.getElementById("cont_logo_usu").setAttribute("onclick", "mostrarDatosUsu()");
}

// Abre el menu desplegable
function mostrarMenu() {
    document.getElementById("menu").style.display = "flex";
    if (tipoContaminacion == "maritima") {
        document.getElementById("cont_logo_menu").style.backgroundColor = "#4d7e80";
    }
    else if (tipoContaminacion == "rural") {
        document.getElementById("cont_logo_menu").style.backgroundColor = "#7ba428";
    }
    else if (tipoContaminacion == "urbana") {
        document.getElementById("cont_logo_menu").style.backgroundColor = "#a30f2d";
    }
    document.getElementById("logo_menu").setAttribute("src", "../img/bars-solid-white.svg");
    document.getElementById("cont_logo_menu").setAttribute("onclick", "cerrarMenu()");
    cerrarDatosUsu();
}

// Cierra el menu desplegable
function cerrarMenu() {
    document.getElementById("menu").style.display = "none";
    if (tipoContaminacion == "maritima") {
        document.getElementById("cont_logo_menu").style.backgroundColor = "cadetblue";
    }
    else if (tipoContaminacion == "rural") {
        document.getElementById("cont_logo_menu").style.backgroundColor = "yellowgreen";
    }
    else if (tipoContaminacion == "urbana") {
        document.getElementById("cont_logo_menu").style.backgroundColor = "crimson";
    }
    document.getElementById("logo_menu").setAttribute("src", "../img/bars-solid.svg");
    document.getElementById("cont_logo_menu").setAttribute("onclick", "mostrarMenu()");
}

// Cambia el simbolo si es admin
function logoAdmin(admin) {
    if (admin == true) {
        document.getElementById("logo_admin").setAttribute("src", "../img/user-astronaut-solid.svg")
    }
}

// Cambia el color de la pagina segun el tipo de contaminacion
function cambioColores() {
    if (tipoContaminacion == "maritima") {
        document.getElementById("barra_menu").style.backgroundColor = "cadetblue";
        document.getElementById("info_usu").style.backgroundColor = "#80b1b3";
        document.getElementById("menu").style.backgroundColor = "#4d7e80";
    }
    else if (tipoContaminacion == "rural") {
        document.getElementById("barra_menu").style.backgroundColor = "yellowgreen";
        document.getElementById("info_usu").style.backgroundColor = "#aed75b";
        document.getElementById("menu").style.backgroundColor = "#7ba428";
    }
    else if (tipoContaminacion == "urbana") {
        document.getElementById("barra_menu").style.backgroundColor = "crimson";
        document.getElementById("info_usu").style.backgroundColor = "#eb2d53";
        document.getElementById("menu").style.backgroundColor = "#a30f2d";
    }
}