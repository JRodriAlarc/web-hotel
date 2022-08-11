window.onscroll = function(){
    scroll = document.documentElement.scrollTop;    //Obtenemos la cantidad de px recorridos
    header = document.querySelector('#header');

    if(scroll > 20){ //Si nuestro scroll recorre mas de 20px ejecutamos una funcion
        header.classList.add('nav_mod');
    } else if (scroll <= 20){
        header.classList.remove('nav_mod');
    };

};

btn_menu = document.getElementById('btn_menu')

menu = document.getElementById("header");
body = document.getElementById("container_body");
nav = document.getElementById("nav");

btn_menu.addEventListener('click', function mostrar_menu(){

    console.log('Haz dado Click en el Boton del Menú!');

    menu.classList.toggle('mover_menu_contenido');
    nav.classList.toggle('mover_nav');
    body.classList.toggle('mover_menu_contenido');

});

window.addEventListener('resize', function(){

    if(window.innerWidth > 674){

        menu.classList.remove('mover_menu_contenido');
        nav.classList.remove('mover_nav');
        body.classList.remove('mover_menu_contenido');

    };

});