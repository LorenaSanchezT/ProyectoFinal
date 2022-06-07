function paginaAnterior() {
    var paginaAnterior = sessionStorage.getItem("url")

    document.getElementById("volver").setAttribute("href", paginaAnterior);
}