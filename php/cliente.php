<?php

    include_once "hotel_conexion.php";

    class clientes extends ConeccionMySQL{

        private $nombre;
        private $correo;

        public function existeUsuario($usuario, $password){
            
            $validar_usr = $this -> __conectar_MySQL()-> prepare('SELECT * FROM clientes WHERE correo_cli = :user AND password_cli = :password');

            $validar_usr-> ejecutar_consultaBD(['user' => $usuario, 'pass', $password]);

        } 

    };

?>