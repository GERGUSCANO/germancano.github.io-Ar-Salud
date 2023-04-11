var names = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var rePassW = document.getElementById('rePassword');
var error = document.getElementById('error');
var secname = document.getElementById('secname')
error.style.color = 'red';

function enviarForm(){
    console.log("Form Enviado :)")

    var mensajeError = [];

    if(names.value === null || names.value === ''){
        mensajeError.push('Ingresa tu nombre/s');
    }
    if(secname.value === null || secname.value === ''){
        mensajeError.push('Ingresa tu apellido/s');
    }
    if(email.value === null || email.value === ''){
        mensajeError.push('Ingresa tu mail');
    }
    if(password.value === null || password.value === ''){
        mensajeError.push('Ingresa tu contraseña');
    }
    if(rePassW.value === null || rePassW.value === ''){
        mensajeError.push('Repite tu contraseña');
    }

    if(password.value != rePassW.value){
        mensajeError.push("Las contraseñas no coinciden")
    }

    if(names.value.length > 10){
        mensajeError.push('El nombre es demasiado largo');
    }
    if(secname.value.length > 30){
        mensajeError.push('El apellido es demasiado largo');
    }
    

    error.innerHTML = mensajeError.join(', ')

    return false;
}