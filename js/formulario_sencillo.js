
const btn_calcular = document.querySelector("#btn_calcular");
const p_dias = document.querySelector(".p-dias");
const span_PrecioTotal = document.querySelector(".span-PrecioTotal");
const span_PrecioNoche = document.querySelector(".span-PrecioNoche");
const form = document.querySelector(".form");
const select_tipo_habitacion = document.querySelector("#tipo-habitacion");
const input__numero_persona = document.querySelector(".input__numero-personas");
console.log(input__numero_persona)

const fecha_entrada = document.querySelector("#fechaEntrada");
const fecha_salida = document.querySelector("#fechaSalida");


function mensajerError(mensaje="") {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.classList.add("mensaje-error")
    form.insertBefore(alerta, btn_calcular)
    setTimeout(() => alerta.remove(), 4000)
}


function calcularDiasYPrecio(e) {
    e.preventDefault()
    if(!document.querySelector("#fechaEntrada") || !document.querySelector("#fechaSalida").value) {
        mensajerError('Debe ingresar una fecha valida');
        return
    }
    const fecha_entrada = new Date(document.querySelector("#fechaEntrada").value);
    const fecha_salida = new Date(document.querySelector("#fechaSalida").value);
    
    
    if ((fecha_salida < fecha_entrada)) {
        mensajerError("La fecha de salida, no puede ser menor a la fecha de entrada");
        if (document.querySelector("#input-precioTotal").nextElementSibling) {
            document.querySelector("#input-precioTotal").nextElementSibling.remove();
            p_dias.textContent = "";
            span_PrecioTotal.textContent = "0";
        }
        return;
    }
    if ((fecha_salida.toDateString() === fecha_entrada.toDateString())) {
        mensajerError("la fecha de entrada, no puede ser igual a la salida");
        if (document.querySelector("#input-precioTotal").nextElementSibling) {
            document.querySelector("#input-precioTotal").nextElementSibling.remove();
            p_dias.textContent = "";
            span_PrecioTotal.textContent = "0";
        }
        return;
    }

    if (input__numero_persona.value < 1 || input__numero_persona.value >6) {
        mensajerError("el numero de personas debe estar en un rango de 1 a 6");
        if (document.querySelector("#input-precioTotal").nextElementSibling) {
            document.querySelector("#input-precioTotal").nextElementSibling.remove();
            p_dias.textContent = "";
            span_PrecioTotal.textContent = "0";
        }
        return;
    }

    const miliSegTrans = fecha_salida.getTime() - fecha_entrada.getTime();
    const diasTrans = Math.round(miliSegTrans / (1000 * 60 * 60 * 24) );
    
    if (diasTrans > 10) {
        mensajerError("NO puede reservar una habitacion por más de 10 dias");
        if (document.querySelector("#input-precioTotal").nextElementSibling) {
            document.querySelector("#input-precioTotal").nextElementSibling.remove();
            p_dias.textContent = "";
            span_PrecioTotal.textContent = "0";
        }
        return;
    }

    p_dias.textContent = diasTrans;

    span_PrecioTotal.textContent = Number(span_PrecioNoche.textContent) * diasTrans;
    span_PrecioNoche.textContent;

    if(document.querySelector("#input-precioTotal").nextElementSibling) {
        return
    }
    const btn_comprar = document.createElement("a");
    btn_comprar.setAttribute("href", "compra_realizada.html")
    btn_comprar.classList.add("btn", "btn--comprar");
    btn_comprar.textContent = "Comprar";


    document.querySelector("#input-precioTotal").after(btn_comprar);
    
    btn_comprar.addEventListener('click', function(){
        
        //(e)  -->  e.preventDefault();
        console.log('Click en comparar');
        
        fetch("../web-hotel/php/hotel_hab_reservadas.php", {  
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({                 
                _no_personas: input__numero_persona.value,
                _tipo_reserv: select_tipo_habitacion.value,
                _fecha_ingreso: fecha_entrada.toLocaleDateString(),
                _fecha_salida: fecha_salida.toLocaleDateString(),
                _total_pagar: span_PrecioTotal.textContent,
                _precio_noche: span_PrecioNoche.textContent
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

}

select_tipo_habitacion.addEventListener("change", e => {

    if(select_tipo_habitacion.value === "1") span_PrecioNoche.textContent = "600";
    if(select_tipo_habitacion.value === "2") span_PrecioNoche.textContent = "900";
    if(select_tipo_habitacion.value === "3") span_PrecioNoche.textContent = "1200";

});

form.addEventListener("change", e => {
    
    if(document.querySelector("#fechaEntrada") && document.querySelector("#fechaSalida").value) {
        btn_calcular.classList.add("btn--activar");
        btn_calcular.classList.remove("btn--disabled");
        
        btn_calcular.removeAttribute("disabled");
    }
});

btn_calcular.addEventListener("click", calcularDiasYPrecio);