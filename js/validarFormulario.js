const inputNombrePres = document.getElementById('nombre-pres');
const inputApellidoPres = document.getElementById('apellido-pres');
const inputCorreoPres = document.getElementById('correo-pres');
const inputTelefonoPres = document.getElementById('telephono');
const inputCheckTermPres = document.getElementById('check-term');
const formularioPres = document.getElementById('form-presupuesto')

function validarNombre(){
    const nombre = inputNombrePres.value
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