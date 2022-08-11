<?php

    //Practica 2

    header("Content-type: application/json; charset=utf-8");
    
    $data = json_decode(file_get_contents("php://input"), true); //Decodifica la cadena de Bits recibida por file_get_contents

    require_once('hotel_conexion.php');

    //Se crea una Instancia hacia la conexion MySQL
    $new_con =  new ConeccionMySQL();

    //Crear Una conexion
    $new_con -> __conectar_MySQL();

    $consulta_insertar = "INSERT INTO clientes (correo_cli, nombre_cli, apellidos_cli, password_cli) VALUES ('".$data['_email']."', '".$data['_nombre']."', '".$data['_apellido']."', '".$data['_contrasenia']."');";

    //Ejecutar la Sentencia SQL
    $resultado_sql = $new_con -> ejecutar_consultaBD($consulta_insertar);

    //Verificar si el Numero de filas aceptada es mayor que 0 para saber si se guardo el registro
    if($resultado_sql){
        //true
        $filas_afectadas = $new_con -> obtener_filas_afectadas();
        if ($filas_afectadas > 0 ){
            
            echo "Registro Almacenado Exitosamente";
        }
        
    } else{
        //false
        echo "Error al Intentar Almacenar su Registro";
    }

    //Cerrar la conexion a la base de Datos:
    $new_con -> cerrar_conectionMySQL();

    
?>
