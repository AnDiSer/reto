function cifrarCodigo (){
    var texto = document.querySelector('#encriptador').value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector('#desencriptado').value = textoCifrado;
    document.querySelector('#encriptar').value;
    limpiarCaja();
    return;
}

var boton1 = document.querySelector('#encriptar');
boton1.onclick = cifrarCodigo;

function desencriptar (){
    var texto = document.querySelector('#encriptador').value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector('#desencriptado').value = textoCifrado;
    document.querySelector('#encriptar').value;
    limpiarCaja();
    return;
}

var boton2 = document.querySelector('#desencriptar');
boton2.onclick = desencriptar;

function copiarPortapapeles(){
    let copiar = document.querySelector('#desencriptado').value;
    navigator.clipboard.writeText(copiar);
    limpiarDesencriptador();
    return;
}

var boton3 = document.querySelector('#copiarMensaje');
boton3.onclick = copiarPortapapeles;

function limpiarCaja(){
    let limpiar = document.querySelector('#encriptador').value = "";
    return;
}

function limpiarDesencriptador(){
    let limpiar2 = document.querySelector('#desencriptado').value = ""; 
    return;
}