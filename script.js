function validarTexto(){
    var textoIngresado=document.querySelector("#entrada").value;
    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoIngresado)||
          (/[0-9]/.test(textoIngresado))||
          (/[A-Z]/.test(textoIngresado))){
    
            alert("No se permiten caracteres especiales ni mayusculas");    
            validacion=false;
      }
      else if ((textoIngresado=="")){

        alert("Ingrese un mensaje para encriptar / desencriptar");    
        validacion=false;
  }

  else{

    validacion=true;
    
  }};
//
function copiar(){
    const copyText = document.getElementById("salida");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("entrada").value=" "

}
//
function encriptar(){
    validarTexto();
        if (validacion==true){
            var encriptar=document.querySelector("#entrada").value
            var encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("salida").value = encriptado
        document.getElementById("entrada").value=" "
        }
    }
//
function desencriptar(){
    validarTexto();
        if (validacion==true){
            var desencriptar=document.querySelector("#salida").value;
            var desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
            document.getElementById("salida").value = desencriptado
        }
    }

