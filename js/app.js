const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const form_sign_up = document.querySelector(".sign-up-form")

const input_nombre = document.querySelector("#nombre");
const input_apellidos = document.querySelector("#apellidos");
const input_correo = document.querySelector("#correo");
const input_password = document.querySelector("#password");
const input_confirmar_password = document.querySelector("#confirmar-password");

const btn_registrarse = document.querySelector("#btn_registrarse");

const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
/* 
expresion regular
*/

function mensajerError(mensaje="") {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.classList.add("mensaje-error")
    form_sign_up.insertBefore(alerta, btn_registrarse)
    setTimeout(() => alerta.remove(), 4000)
}


btn_registrarse.addEventListener("click", e => {
    if(
        !input_nombre.value ||
        !input_apellidos.value ||
        !input_correo.value ||
        !input_password.value ||
        !input_confirmar_password.value
    ) {
        e.preventDefault();
        mensajerError("Los campos no pueden ir vacios");
    }

    else if (input_password.value !== input_confirmar_password.value) {
        e.preventDefault();
        mensajerError('Las contraseñas no coinciden');
        
    }

    else if (!emailRegex.test(input_correo.value)) {
        e.preventDefault();
        mensajerError("El correo no es valido, intentelo de nuevo")
    }

    else { 
        
        fetch("../Web-Hotel/php/hotel_consultas.php", {     //Cuando se pone un Bloque de codigo "{}" se trata de un Objeto
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({                  //Stringify() ---> Función que da formato al objeto
                _nombre: input_nombre.value,
                _apellido: input_apellidos.value,
                _email: input_correo.value,
                _contrasenia: input_password.value
            })
        })                                              //Realizar la peticon al servidor
            .then(function(respuesta){
                return respuesta.text();
            })                                          //Procesar el tipo de Respuesta
            .then(function(texto){
                console.log(texto);
            })                                          //Procesar la Respuesta
            .catch(function(err){
                console.error('Error: ', err);
            });   
    }
    
});

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});