<?php 

    header("Content-type: application/json; charset=utf-8");
        
    $data = json_decode(file_get_contents("php://input"), true); //Decodifica la cadena de Bits recibida por file_get_contents

    require_once('hotel_conexion.php');

    //Se crea una Instancia hacia la conexion MySQL
    $new_con =  new ConeccionMySQL();

    //Crear Una conexion
    $new_con -> __conectar_MySQL();

    $consulta_insertar_reserv = "INSERT INTO reservaciones (n_pers_enla_reserv, tipo_reserv, precio_hab_reserv, fecha_ingreso, fecha_salida, total_pagar_reserv) VALUES ('".$data['_no_personas']."', '".$data['_tipo_reserv']."', '".$data['_precio_noche']."', '".$data['_fecha_ingreso']."', '".$data['_fecha_salida']."', '".$data['_total_pagar']."');";

    $resultado_sql_reserv = $new_con -> ejecutar_consultaBD($consulta_insertar_reserv);

    //Verificar si el Numero de filas aceptada es mayor que 0 para saber si se guardo el registro
    if($resultado_sql_reserv){
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