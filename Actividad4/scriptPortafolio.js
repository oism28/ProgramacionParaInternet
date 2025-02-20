var numeroTel, correo, nombre;
var intereses = [];
intereses[0] = null;
intereses[1] = "eSports";
intereses[2] = "WebDevelopment";
intereses[3] = "Ciberseguridad";
function validarNombre(e){
    if (nombre == '' || nombre.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Completar nombre</li>';
        console.log('Por favor agregue el nombre');
    }else{
        error.style.display = 'none';       
    }
}
function validarCorreo(e){
    if (correo == '' || correo.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Completar correo</li>';
        console.log('Por favor agregue el correo');
    }else{
        error.style.display = 'none';       
    }
}
function validarTeléfono(e){
    if (numeroTel == '' || numeroTel.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Completar Teléfono</li>';
        console.log('Por favor agregue el Teléfono');
    }else{
        error.style.display = 'none';       
    }
}