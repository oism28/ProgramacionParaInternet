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
        e.preventDefault();
    }else{
        error.style.display = 'none';       
    }
}


function validarCorreo(e){
    if (correo == '' || correo.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Completar correo</li>';
        console.log('Por favor agregue el correo');
        e.preventDefault();
    }else{
        error.style.display = 'none';       
    }
}

/*Función para validar el teléfono */
function validarTelefono(e){
    if (numeroTel == '' || numeroTel.value == null || numeroTel.length !== 10){
        error.style.display = 'block';
        error.innerHTML += '<li>Completar Teléfono</li>';
        console.log('Por favor agregue el Teléfono');
        e.preventDefault();
    }else{
        error.style.display = 'none';       
    }
}

function validarForm(e){
    error.innerHTML = '';
    validarCorreo(e);
    validarTelefono(e);
    validarNombre(e);
}

formularios.addEventListener('submit', validarForm);