
/*
const correo = document.getElementById('email');
const contras = document.getElementById('password');

const validar_datos = document.getElementById('validar_datos');

validar_datos.addEventListener('click', function(){

    console.log('Click validar');
        
        fetch("../web-hotel/php/validar_cli.php", {  
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({                 
                _usuario: correo.value,
                _contrasenia: contras.toLocaleDataString()
            })
        })                                              
            .then(function(respuesta){
                return respuesta.text();
            })                                          
            .then(function(texto){
                console.log(texto);
            })                                          
            .catch(function(err){
                console.error('Error: ', err);
            });                              

});

*/