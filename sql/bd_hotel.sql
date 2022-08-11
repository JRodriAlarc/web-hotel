CREATE DATABASE bd_hotel
    DEFAULT CHARACTER SET = 'utf8mb4';

USE bd_hotel;

CREATE TABLE clientes (
    id_cli INT AUTO_INCREMENT,
    correo_cli VARCHAR(80) UNIQUE,
    nombre_cli VARCHAR(50),
    apellidos_cli VARCHAR(50),
    password_cli VARCHAR(20),
    PRIMARY KEY (id_cli)
);

CREATE TABLE reservaciones(
    id_reserv INT AUTO_INCREMENT,
    fk_id_cli_reserv INT,
    n_pers_enla_reserv INT,
    tipo_reserv INT(1),
    precio_hab_reserv INT,
    fecha_ingreso CHAR(10),
    fecha_salida CHAR(10),
    total_pagar_reserv INT,
    PRIMARY KEY (id_reserv),
    FOREIGN KEY (fk_id_cli_reserv) REFERENCES clientes(id_cli),
    CHECK (tipo_reserv > 0 AND tipo_reserv < 4)
);


CREATE TABLE pagos_cli(
    id_pago INT AUTO_INCREMENT,
    fk_id_cli_pago INT,
    fk_id_id_reserv_pago INT,
    clinte_saldo INT,
    cliente_pago INT,
    PRIMARY KEY (id_pago),
    FOREIGN KEY (fk_id_cli_pago) REFERENCES clientes(id_cli),
    FOREIGN KEY (fk_id_id_reserv_pago) REFERENCES reservaciones(id_reserv)
);

CREATE TABLE admin_hotel (
    id_admin_hot INT AUTO_INCREMENT,
    fk_id_cli_adm INT, 
    fk_id_reserv_adm INT,
    ganancias_admin INT,
    hab_reservadas INT,
    tipo_habitaciones INT,
    PRIMARY KEY (id_admin_hot),
    FOREIGN KEY (fk_id_cli_adm) REFERENCES clientes(id_cli),
    FOREIGN KEY (fk_id_reserv_adm) REFERENCES reservaciones(id_reserv)
);

SELECT * FROM reservaciones;

SELECT * FROM clientes;
