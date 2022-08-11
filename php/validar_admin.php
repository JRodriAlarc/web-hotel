<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        .container{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .estilo-no-links{
            color: white;
            text-decoration: none;
        }
    </style>

</head>
<body class="container">

<?php

                        include_once "config_bd_client.php";

                        $sencetncia_select = "SELECT user_admin, password_adm FROM admin_hotel;";

                        $resultado_sentencia_sql = mysqli_query($conexion, $sencetncia_select);

                        $row = mysqli_fetch_assoc($resultado_sentencia_sql);

                        
                        $name = $row['user_admin']; 
                        $pass = $row['password_adm'];
                        
                        $namedigit = $_POST['nombre_usuario'];
                        $passdigit = $_POST['pasword_usr'];

                        if($name == $namedigit && $passdigit == $pass){

                            include ("consultas_client.php");
                        
                        }  else {
                            
                            $name = 'a';
                            $pass = ' ';
                            
                            $namedigit = ' ';
                            $passdigit = 'a';
                            
                            ?>
                            

                                <div class="alert alert-warning d-flex align-items-center" role="alert">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    <div class="alert-dismissible fade show" role="alert">
                                        <strong>¡Sus Datos No Son correctos!</strong> Intente de Nuevo
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>

                                <div class="d-grid gap-2 col-12 col-sm-10 col-md-8 col-lg-5 px-5 pt-5 mx-auto mb-5">
                                    <button class="btn btn-primary text-white fw-bolder" type="button"><a href="../Register_Or_Login.html" class="estilo-no-links">Intente Nuevamente</a></button>
                                </div>

                            <?php

                 };

                            
?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
</body>
</html>