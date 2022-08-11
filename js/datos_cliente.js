//Comprobar Conectividad al Archivo JS
console.log('Hello!')

//Asociar los Inputs y Butons a Variables
const nombre_cli = document.querySelector('#nombre');
const apellido_cli = document.querySelector('#apellidos');
const email_cli = document.querySelector('#correo');
const password_cli = document.querySelector('#password');

const boton_registro = document.querySelector('#btn_registrarse')

//Agregar Funcionalidad al Boton
boton_registro.addEventListener('click', function(){

    //Verificar que el Boton Funciona
    console.log("Todo Ok!");

    //Mostrar los Datos que Ingresa el Ususario
    //alert("Su Nombre: " + firstName.value + ' ' + lastName.value + '\n' + "Su Correo es: " + email.value + '\n' + "Su Contraseña es: " + password.value + ' y su Confirmación es: ' + confPassword.value);

    //Implementar el API Fecth
    //Realizar Peticion a HTTP(Metodo: POST)
    
    fetch("../php/hotel_consultas.php", {     //Cuando se pone un Bloque de codigo "{}" se trata de un Objeto
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({                  //Stringify() ---> Función que da formato al objeto
            _nombre: nombre_cli.value,
            _apellido: apellido_cli.value,
            _email: email_cli.value,
            _contrasenia: password_cli.value
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
        });                                         //Verifica si se cumple la promesa


});

//JS ASocia varibles js con elemntos HTML con ayuda del API DOM (cajas de texto y Boton)
//Al boton se le agrega un evento al hacer clic y hace una peticion al servidor para procesar registros, los envia en un objeto JSON, que se codifica y almacena en una variable. 