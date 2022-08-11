<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        .centrar{
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
    <title>Mis Clientes</title>
</head>
<body>


    <div class="centrar mx-0 px-0 mt-5">
        <div class="container col-12 col-md-10">
            
            <form class="centrar-elementos row" method="POST" action="validar_admin.php">

                <section class="col-12 col-md-6 px-4">
                    <div class="col-12 mb-3">
                        <label for="nombre_usuario" class="form-label h5 fw-bold">Ingrese su usuario</label>
                        <input class="form-control" type="text" name="nombre_usuario" id="nombre_usuario">
                    </div>
                </section>

                <section class="col-12 col-md-6 px-4">
                    <div class="col-12 mb-3">
                        <label for="pasword_usr" class="form-label h5 fw-bold">Ingrese su Contraseña</label>
                        <input class="form-control" type="password" name="pasword_usr" id="pasword_usr">
                    </div>
                </section>

                <section class="d-grid gap-2 col-12 col-ms-10 col-md-8 col-lg-5 px-4 pt-5 mx-auto">
                    <button class="btn btn-primary fw-bolder" type="submit"><a href="consultas_client.php" class="estilo-no-links">Iniciar Sesión</a></button>
                </section>

            </form>

               
            </div>

        </div>

    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
</body>
</html>