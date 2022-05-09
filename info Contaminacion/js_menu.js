admin = true;
tipoContaminacion = "urbana";

var texto1_MAR = "<p>TEXTO MARITIMO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum tincidunt arcu, ut pretium ex semper non. " +
    "Sed tellus lacus, consectetur eget nunc id, tempus hendrerit massa. Cras molestie nunc eu libero tristique, nec bibendum enim venenatis. " +
    "Mauris lacinia dignissim ex, id posuere justo. Nunc malesuada porta urna, in tristique ipsum luctus eget. Donec auctor arcu eu egestas hendrerit. " +
    "Phasellus rhoncus, neque vel euismod ultricies, metus odio consectetur neque, vel tincidunt nisi ipsum luctus nisl.</p>" +
    "\n" + "\n" +
    "<p>Morbi mauris lorem, ullamcorper eget nulla a, varius feugiat velit. Aliquam nisl nibh, euismod ut orci ac, scelerisque cursus eros. " +
    "Ut at odio felis. Duis consectetur vulputate dolor, id iaculis turpis ultricies id. Praesent scelerisque suscipit consequat. " +
    "Phasellus at magna lorem. Morbi imperdiet, lectus eget feugiat blandit, dolor dui facilisis est, at tristique leo nunc et leo. " +
    "Ut non eros in lorem finibus auctor vel ut ligula. Sed id tortor a tellus venenatis suscipit id imperdiet felis.</p>" +
    "\n" + "\n" +
    "<p>Donec sed nibh commodo, bibendum erat in, sodales eros. Suspendisse aliquam dolor urna, sit amet interdum lacus dignissim vitae. " +
    "Aenean nec magna at orci varius auctor eu eu velit. Curabitur tristique imperdiet arcu, sed rutrum mauris porta nec. " +
    "Donec ornare ex ac metus hendrerit tincidunt ac sed purus. Vestibulum a est quis mi venenatis imperdiet sed a ex. " +
    "Nulla eget purus non nisi dapibus commodo eget ut ante. Etiam sed pretium leo, eget vulputate tellus. " +
    "Sed molestie, felis a bibendum fringilla, sem libero tempus felis, nec scelerisque lorem urna eu tortor. " +
    "Etiam ligula ligula, commodo id consequat sodales, lacinia at turpis. Suspendisse potenti. Integer sodales dolor a iaculis aliquet. " +
    "Curabitur auctor augue at erat pellentesque tempus. Sed commodo consequat eros id ornare. In hac habitasse platea dictumst.</p>";

var texto2_MAR = "<p>TEXTO MARITIMO. Sed vulputate in tortor id laoreet. Aliquam egestas hendrerit hendrerit. Phasellus interdum ac purus id placerat. " +
    "Integer consectetur lectus sagittis sapien aliquet accumsan. Vestibulum sit amet augue ultricies, vehicula neque eu, aliquet mi. " +
    "Vestibulum sollicitudin vitae enim non mattis. Quisque ultricies, est sit amet varius tempor, turpis mauris laoreet ante, sit amet ornare arcu nisl sit amet dolor. " +
    "Nam vitae volutpat enim, quis iaculis ante.</p>" +
    "\n" + "\n" +
    "<p>Vestibulum ligula justo, mattis at luctus id, sagittis vitae nunc. Nam et mauris id leo semper dignissim. In hac habitasse platea dictumst. " +
    "Etiam pharetra magna at blandit mattis. Etiam ex massa, sodales porta turpis vel, pharetra finibus dui. Nam nec tincidunt tellus. " +
    "Curabitur congue sit amet purus nec interdum. Nam at condimentum magna, vitae venenatis diam. Maecenas non rutrum ipsum. " +
    "Etiam id elit semper, tempor quam vulputate, convallis lorem. Quisque mattis diam et interdum dapibus. Praesent mattis libero vitae velit volutpat faucibus. " +
    "Curabitur quis lacus scelerisque ante tempus tempus.</p>";

var texto3_MAR = "<p>TEXTO MARITIMO. Sed vulputate in tortor id laoreet. Aliquam egestas hendrerit hendrerit. Phasellus interdum ac purus id placerat. " +
    "Integer consectetur lectus sagittis sapien aliquet accumsan. Vestibulum sit amet augue ultricies, vehicula neque eu, aliquet mi. " +
    "Vestibulum sollicitudin vitae enim non mattis. Quisque ultricies, est sit amet varius tempor, turpis mauris laoreet ante, sit amet ornare arcu nisl sit amet dolor. " +
    "Nam vitae volutpat enim, quis iaculis ante.</p>" +
    "\n" + "\n" +
    "<p>Vestibulum ligula justo, mattis at luctus id, sagittis vitae nunc. Nam et mauris id leo semper dignissim. In hac habitasse platea dictumst. " +
    "Etiam pharetra magna at blandit mattis. Etiam ex massa, sodales porta turpis vel, pharetra finibus dui. Nam nec tincidunt tellus. " +
    "Curabitur congue sit amet purus nec interdum. Nam at condimentum magna, vitae venenatis diam. Maecenas non rutrum ipsum. " +
    "Etiam id elit semper, tempor quam vulputate, convallis lorem. Quisque mattis diam et interdum dapibus. Praesent mattis libero vitae velit volutpat faucibus. " +
    "Curabitur quis lacus scelerisque ante tempus tempus.</p>";

var texto1_RUR = "<p>TEXTO RURAL. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum tincidunt arcu, ut pretium ex semper non. " +
    "Sed tellus lacus, consectetur eget nunc id, tempus hendrerit massa. Cras molestie nunc eu libero tristique, nec bibendum enim venenatis. " +
    "Mauris lacinia dignissim ex, id posuere justo. Nunc malesuada porta urna, in tristique ipsum luctus eget. Donec auctor arcu eu egestas hendrerit. " +
    "Phasellus rhoncus, neque vel euismod ultricies, metus odio consectetur neque, vel tincidunt nisi ipsum luctus nisl.</p>" +
    "\n" + "\n" +
    "<p>Morbi mauris lorem, ullamcorper eget nulla a, varius feugiat velit. Aliquam nisl nibh, euismod ut orci ac, scelerisque cursus eros. " +
    "Ut at odio felis. Duis consectetur vulputate dolor, id iaculis turpis ultricies id. Praesent scelerisque suscipit consequat. " +
    "Phasellus at magna lorem. Morbi imperdiet, lectus eget feugiat blandit, dolor dui facilisis est, at tristique leo nunc et leo. " +
    "Ut non eros in lorem finibus auctor vel ut ligula. Sed id tortor a tellus venenatis suscipit id imperdiet felis.</p>" +
    "\n" + "\n" +
    "<p>Donec sed nibh commodo, bibendum erat in, sodales eros. Suspendisse aliquam dolor urna, sit amet interdum lacus dignissim vitae. " +
    "Aenean nec magna at orci varius auctor eu eu velit. Curabitur tristique imperdiet arcu, sed rutrum mauris porta nec. " +
    "Donec ornare ex ac metus hendrerit tincidunt ac sed purus. Vestibulum a est quis mi venenatis imperdiet sed a ex. " +
    "Nulla eget purus non nisi dapibus commodo eget ut ante. Etiam sed pretium leo, eget vulputate tellus. " +
    "Sed molestie, felis a bibendum fringilla, sem libero tempus felis, nec scelerisque lorem urna eu tortor. " +
    "Etiam ligula ligula, commodo id consequat sodales, lacinia at turpis. Suspendisse potenti. Integer sodales dolor a iaculis aliquet. " +
    "Curabitur auctor augue at erat pellentesque tempus. Sed commodo consequat eros id ornare. In hac habitasse platea dictumst.</p>";

var texto2_RUR = "<p>TEXTO RURAL. Sed vulputate in tortor id laoreet. Aliquam egestas hendrerit hendrerit. Phasellus interdum ac purus id placerat. " +
    "Integer consectetur lectus sagittis sapien aliquet accumsan. Vestibulum sit amet augue ultricies, vehicula neque eu, aliquet mi. " +
    "Vestibulum sollicitudin vitae enim non mattis. Quisque ultricies, est sit amet varius tempor, turpis mauris laoreet ante, sit amet ornare arcu nisl sit amet dolor. " +
    "Nam vitae volutpat enim, quis iaculis ante.</p>" +
    "\n" + "\n" +
    "<p>Vestibulum ligula justo, mattis at luctus id, sagittis vitae nunc. Nam et mauris id leo semper dignissim. In hac habitasse platea dictumst. " +
    "Etiam pharetra magna at blandit mattis. Etiam ex massa, sodales porta turpis vel, pharetra finibus dui. Nam nec tincidunt tellus. " +
    "Curabitur congue sit amet purus nec interdum. Nam at condimentum magna, vitae venenatis diam. Maecenas non rutrum ipsum. " +
    "Etiam id elit semper, tempor quam vulputate, convallis lorem. Quisque mattis diam et interdum dapibus. Praesent mattis libero vitae velit volutpat faucibus. " +
    "Curabitur quis lacus scelerisque ante tempus tempus.</p>";

var texto3_RUR = "<p>TEXTO RURAL. Sed vulputate in tortor id laoreet. Aliquam egestas hendrerit hendrerit. Phasellus interdum ac purus id placerat. " +
    "Integer consectetur lectus sagittis sapien aliquet accumsan. Vestibulum sit amet augue ultricies, vehicula neque eu, aliquet mi. " +
    "Vestibulum sollicitudin vitae enim non mattis. Quisque ultricies, est sit amet varius tempor, turpis mauris laoreet ante, sit amet ornare arcu nisl sit amet dolor. " +
    "Nam vitae volutpat enim, quis iaculis ante.</p>" +
    "\n" + "\n" +
    "<p>Vestibulum ligula justo, mattis at luctus id, sagittis vitae nunc. Nam et mauris id leo semper dignissim. In hac habitasse platea dictumst. " +
    "Etiam pharetra magna at blandit mattis. Etiam ex massa, sodales porta turpis vel, pharetra finibus dui. Nam nec tincidunt tellus. " +
    "Curabitur congue sit amet purus nec interdum. Nam at condimentum magna, vitae venenatis diam. Maecenas non rutrum ipsum. " +
    "Etiam id elit semper, tempor quam vulputate, convallis lorem. Quisque mattis diam et interdum dapibus. Praesent mattis libero vitae velit volutpat faucibus. " +
    "Curabitur quis lacus scelerisque ante tempus tempus.</p>";

var texto1_URB = "<p>TEXTO URBANO. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum tincidunt arcu, ut pretium ex semper non. " +
    "Sed tellus lacus, consectetur eget nunc id, tempus hendrerit massa. Cras molestie nunc eu libero tristique, nec bibendum enim venenatis. " +
    "Mauris lacinia dignissim ex, id posuere justo. Nunc malesuada porta urna, in tristique ipsum luctus eget. Donec auctor arcu eu egestas hendrerit. " +
    "Phasellus rhoncus, neque vel euismod ultricies, metus odio consectetur neque, vel tincidunt nisi ipsum luctus nisl.</p>" +
    "\n" + "\n" +
    "<p>Morbi mauris lorem, ullamcorper eget nulla a, varius feugiat velit. Aliquam nisl nibh, euismod ut orci ac, scelerisque cursus eros. " +
    "Ut at odio felis. Duis consectetur vulputate dolor, id iaculis turpis ultricies id. Praesent scelerisque suscipit consequat. " +
    "Phasellus at magna lorem. Morbi imperdiet, lectus eget feugiat blandit, dolor dui facilisis est, at tristique leo nunc et leo. " +
    "Ut non eros in lorem finibus auctor vel ut ligula. Sed id tortor a tellus venenatis suscipit id imperdiet felis.</p>" +
    "\n" + "\n" +
    "<p>Donec sed nibh commodo, bibendum erat in, sodales eros. Suspendisse aliquam dolor urna, sit amet interdum lacus dignissim vitae. " +
    "Aenean nec magna at orci varius auctor eu eu velit. Curabitur tristique imperdiet arcu, sed rutrum mauris porta nec. " +
    "Donec ornare ex ac metus hendrerit tincidunt ac sed purus. Vestibulum a est quis mi venenatis imperdiet sed a ex. " +
    "Nulla eget purus non nisi dapibus commodo eget ut ante. Etiam sed pretium leo, eget vulputate tellus. " +
    "Sed molestie, felis a bibendum fringilla, sem libero tempus felis, nec scelerisque lorem urna eu tortor. " +
    "Etiam ligula ligula, commodo id consequat sodales, lacinia at turpis. Suspendisse potenti. Integer sodales dolor a iaculis aliquet. " +
    "Curabitur auctor augue at erat pellentesque tempus. Sed commodo consequat eros id ornare. In hac habitasse platea dictumst.</p>";

var texto2_URB = "<p>TEXTO URBANO. Sed vulputate in tortor id laoreet. Aliquam egestas hendrerit hendrerit. Phasellus interdum ac purus id placerat. " +
    "Integer consectetur lectus sagittis sapien aliquet accumsan. Vestibulum sit amet augue ultricies, vehicula neque eu, aliquet mi. " +
    "Vestibulum sollicitudin vitae enim non mattis. Quisque ultricies, est sit amet varius tempor, turpis mauris laoreet ante, sit amet ornare arcu nisl sit amet dolor. " +
    "Nam vitae volutpat enim, quis iaculis ante.</p>" +
    "\n" + "\n" +
    "<p>Vestibulum ligula justo, mattis at luctus id, sagittis vitae nunc. Nam et mauris id leo semper dignissim. In hac habitasse platea dictumst. " +
    "Etiam pharetra magna at blandit mattis. Etiam ex massa, sodales porta turpis vel, pharetra finibus dui. Nam nec tincidunt tellus. " +
    "Curabitur congue sit amet purus nec interdum. Nam at condimentum magna, vitae venenatis diam. Maecenas non rutrum ipsum. " +
    "Etiam id elit semper, tempor quam vulputate, convallis lorem. Quisque mattis diam et interdum dapibus. Praesent mattis libero vitae velit volutpat faucibus. " +
    "Curabitur quis lacus scelerisque ante tempus tempus.</p>";

var texto3_URB = "<p>TEXTO URBANO. Sed vulputate in tortor id laoreet. Aliquam egestas hendrerit hendrerit. Phasellus interdum ac purus id placerat. " +
    "Integer consectetur lectus sagittis sapien aliquet accumsan. Vestibulum sit amet augue ultricies, vehicula neque eu, aliquet mi. " +
    "Vestibulum sollicitudin vitae enim non mattis. Quisque ultricies, est sit amet varius tempor, turpis mauris laoreet ante, sit amet ornare arcu nisl sit amet dolor. " +
    "Nam vitae volutpat enim, quis iaculis ante.</p>" +
    "\n" + "\n" +
    "<p>Vestibulum ligula justo, mattis at luctus id, sagittis vitae nunc. Nam et mauris id leo semper dignissim. In hac habitasse platea dictumst. " +
    "Etiam pharetra magna at blandit mattis. Etiam ex massa, sodales porta turpis vel, pharetra finibus dui. Nam nec tincidunt tellus. " +
    "Curabitur congue sit amet purus nec interdum. Nam at condimentum magna, vitae venenatis diam. Maecenas non rutrum ipsum. " +
    "Etiam id elit semper, tempor quam vulputate, convallis lorem. Quisque mattis diam et interdum dapibus. Praesent mattis libero vitae velit volutpat faucibus. " +
    "Curabitur quis lacus scelerisque ante tempus tempus.</p>";

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

// Colocar informacion segun tipo de contaminacion
function instInformacion() {
    if (tipoContaminacion == "maritima") {
        document.getElementById("informacion").innerHTML = texto1_MAR;
        document.getElementById("informacion2").innerHTML = texto2_MAR;
        document.getElementById("informacion3").innerHTML = texto3_MAR;
    } else if (tipoContaminacion == "rural") {
        document.getElementById("informacion").innerHTML = texto1_RUR;
        document.getElementById("informacion2").innerHTML = texto2_RUR ;
        document.getElementById("informacion3").innerHTML = texto3_RUR;
    } else if (tipoContaminacion == "urbana") {
        document.getElementById("informacion").innerHTML = texto1_URB;
        document.getElementById("informacion2").innerHTML = texto2_URB;
        document.getElementById("informacion3").innerHTML = texto3_URB;
    }
    
}

// Cambia el color de la pagina segun el tipo de contaminacion
function cambioColores() {
    if (tipoContaminacion == "maritima") {
        document.getElementById("barra_menu").style.backgroundColor = "cadetblue";
        document.getElementById("titulo").style.color = "cadetblue";
        document.getElementById("linkEventos").style.color = "cadetblue";
        document.getElementById("info_usu").style.backgroundColor = "#80b1b3";
        document.getElementById("menu").style.backgroundColor = "#4d7e80";
        document.getElementById("titulo").innerHTML = "CONTAMINACION MARITIMA";
        document.getElementById("linkEventos").innerHTML = "<b>EVENTOS CONTAMINACION MARITIMA</b>";
        document.getElementById("mapa").setAttribute("src", "../mapa interactivo cont maritima/index.html");
    }
    else if (tipoContaminacion == "rural") {
        document.getElementById("barra_menu").style.backgroundColor = "yellowgreen";
        document.getElementById("titulo").style.color = "yellowgreen";
        document.getElementById("linkEventos").style.color = "yellowgreen";
        document.getElementById("info_usu").style.backgroundColor = "#aed75b";
        document.getElementById("menu").style.backgroundColor = "#7ba428";
        document.getElementById("titulo").innerHTML = "CONTAMINACION RURAL"
        document.getElementById("linkEventos").innerHTML = "<b>EVENTOS CONTAMINACION RURAL</b>";
        document.getElementById("mapa").setAttribute("src", "../mapa interactivo cont rural/index.html");
    }
    else if (tipoContaminacion == "urbana") {
        document.getElementById("barra_menu").style.backgroundColor = "crimson";
        document.getElementById("titulo").style.color = "crimson";
        document.getElementById("linkEventos").style.color = "crimson";
        document.getElementById("info_usu").style.backgroundColor = "#eb2d53";
        document.getElementById("menu").style.backgroundColor = "#a30f2d";
        document.getElementById("titulo").innerHTML = "CONTAMINACION URBANA"
        document.getElementById("linkEventos").innerHTML = "<b>EVENTOS CONTAMINACION URBANA</b>";
        document.getElementById("mapa").setAttribute("src", "../mapa interactivo cont urbana/index.html");
    }
}

function cerrarSesion() {
    /*cerrar sesión*/
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            /*cambiar visibilidades de las secciones*/
            alert("Se ha cerrado la sesión");
        }
    };
    xhttp.open("GET", "php/logout.php", true);
    xhttp.send();
    return false;
}