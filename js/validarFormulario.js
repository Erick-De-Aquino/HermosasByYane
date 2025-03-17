const d = document;

const nombreInput = d.getElementById('nombre');
const telefonoInput = d.getElementById('telefono');
const emailInput = d.getElementById('email');
const contrasenaInput = d.getElementById('contrasena');
const formulario = d.getElementById('formulario');

function validarNombre(){
    const nombre = nombreInput.value
    const nombrePattern = /^[a-zA-Z][a-zA-Z0-9]*$/
    if(nombre.length >= 3 && nombrePattern.test(nombre)){
        nombreInput.classList.add('valido');
        nombreInput.classList.remove('invalido');
        d.getElementById('nombreError').textContent = '';        
    }else{
        nombreInput.classList.add('invalido');
        nombreInput.classList.remove('valido');
        d.getElementById('nombreError').textContent = 'El nombre de usuario debe tener al menos 3 caracteres y empezar con una letra';
    }
}
function validarTelefono(){
    const telefono = telefonoInput.value
    const telefonoPattern = /^\d{9}$/
    if(telefonoPattern.test(telefono)){
        telefonoInput.classList.add('valido');
        telefonoInput.classList.remove('invalido');
        d.getElementById('telefonoError').textContent = '';        
    }else{
        telefonoInput.classList.add('invalido');
        telefonoInput.classList.remove('valido');
        d.getElementById('telefonoError').textContent = 'El numero de telefono debe contener 9 digitos y solo numero';
    }
}
function validarEmail(){
    const email = emailInput.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailPattern.test(email)){
        emailInput.classList.add('valido');
        emailInput.classList.remove('invalido');
        d.getElementById('emailError').textContent = '';        
    }else{
        emailInput.classList.add('invalido');
        emailInput.classList.remove('valido');
        d.getElementById('emailError').textContent = 'Ingrese un correo electronico valido';
    }
}

function validarContrasena(){
    const contrasena = contrasenaInput.value
    //const contrasenaPattern = /^(?=.*[A-Z]).{6,}$/
    if(contrasena != ''){
        contrasenaInput.classList.add('valido');
        contrasenaInput.classList.remove('invalido');
        d.getElementById('contrasenaError').textContent = '';        
    }else{
        contrasenaInput.classList.add('invalido');
        contrasenaInput.classList.remove('valido');
        d.getElementById('contrasenaError').textContent = 'Debe escribir su consulta';
    }
}
function resetFormulario(){
    formulario.reset()
    nombreInput.classList.remove('valido');
    telefonoInput.classList.remove('valido');
    emailInput.classList.remove('valido');
    contrasenaInput.classList.remove('valido');

}

nombreInput.addEventListener('input',validarNombre);
telefonoInput.addEventListener('input',validarTelefono);
emailInput.addEventListener('input',validarEmail);
contrasenaInput.addEventListener('input',validarContrasena);

formulario.addEventListener('submit',function(event){
    event.preventDefault()
    validarNombre()
    validarTelefono()
    validarEmail()
    validarContrasena()

    if(nombreInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido') && contrasenaInput.classList.contains('valido')){
        alert('Formulario correcto')
        resetFormulario()
        //donde lo quieres enviar
    }else{
        alert('Corrija los errores del formulario')
    }
})