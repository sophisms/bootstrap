function Accion(tipo){
    var elem = document.getElementById("DivBotones");
    if (tipo == "Ocultar"){
        elem.style.display = "None";
    }
    else{
        elem.style.display = "";
    }
}