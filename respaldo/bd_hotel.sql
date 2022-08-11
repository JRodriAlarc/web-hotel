-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-08-2022 a las 15:21:59
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_hotel`
--

CREATE TABLE `admin_hotel` (
  `id_admin_hot` int(11) NOT NULL,
  `fk_id_cli_adm` int(11) DEFAULT NULL,
  `fk_id_reserv_adm` int(11) DEFAULT NULL,
  `ganancias_admin` int(11) DEFAULT NULL,
  `hab_reservadas` int(11) DEFAULT NULL,
  `tipo_habitaciones` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cli` int(11) NOT NULL,
  `correo_cli` varchar(80) DEFAULT NULL,
  `nombre_cli` varchar(50) DEFAULT NULL,
  `apellidos_cli` varchar(50) DEFAULT NULL,
  `password_cli` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cli`, `correo_cli`, `nombre_cli`, `apellidos_cli`, `password_cli`) VALUES
(1, 'JonaRodri@gmail.com', 'Jonatan', 'Rodriguez', '1234js'),
(2, 'JuanPerez@gmail.com', 'Juan', 'Perez', '123456'),
(3, 'PedroRam@gmail.com', 'Pedro', 'Ramirez', '654321'),
(4, 'JimLop12@gmail.com', 'Jimena', 'Lopez', '1234'),
(5, 'GloVit3@gamil.com', 'Gloria', 'Vite', 'gl0656'),
(6, 'FerHernan120@gmail.com', 'Fernanda', 'Hernandez', '00001'),
(8, 'Rugozal45@gmail.com', 'Raul', 'Gonzalez', 'qwerty');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos_cli`
--

CREATE TABLE `pagos_cli` (
  `id_pago` int(11) NOT NULL,
  `fk_id_cli_pago` int(11) DEFAULT NULL,
  `fk_id_id_reserv_pago` int(11) DEFAULT NULL,
  `clinte_saldo` int(11) DEFAULT NULL,
  `cliente_pago` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservaciones`
--

CREATE TABLE `reservaciones` (
  `id_reserv` int(11) NOT NULL,
  `fk_id_cli_reserv` int(11) DEFAULT NULL,
  `n_pers_enla_reserv` int(11) DEFAULT NULL,
  `tipo_reserv` int(1) DEFAULT NULL,
  `precio_hab_reserv` int(11) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_salida` date DEFAULT NULL,
  `total_pagar_reserv` int(11) DEFAULT NULL
) ;

--
-- Volcado de datos para la tabla `reservaciones`
--

INSERT INTO `reservaciones` (`id_reserv`, `fk_id_cli_reserv`, `n_pers_enla_reserv`, `tipo_reserv`, `precio_hab_reserv`, `fecha_ingreso`, `fecha_salida`, `total_pagar_reserv`) VALUES
(1, NULL, 2, 2, 0, '0000-00-00', '0000-00-00', 0),
(2, NULL, 5, 1, 0, '0000-00-00', '0000-00-00', 0),
(3, NULL, 5, 2, 900, '0000-00-00', '0000-00-00', 2700),
(4, NULL, 3, 3, 1200, '0000-00-00', '0000-00-00', 4800);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin_hotel`
--
ALTER TABLE `admin_hotel`
  ADD PRIMARY KEY (`id_admin_hot`),
  ADD KEY `fk_id_cli_adm` (`fk_id_cli_adm`),
  ADD KEY `fk_id_reserv_adm` (`fk_id_reserv_adm`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cli`),
  ADD UNIQUE KEY `correo_cli` (`correo_cli`);

--
-- Indices de la tabla `pagos_cli`
--
ALTER TABLE `pagos_cli`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `fk_id_cli_pago` (`fk_id_cli_pago`),
  ADD KEY `fk_id_id_reserv_pago` (`fk_id_id_reserv_pago`);

--
-- Indices de la tabla `reservaciones`
--
ALTER TABLE `reservaciones`
  ADD PRIMARY KEY (`id_reserv`),
  ADD KEY `fk_id_cli_reserv` (`fk_id_cli_reserv`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cli` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `pagos_cli`
--
ALTER TABLE `pagos_cli`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservaciones`
--
ALTER TABLE `reservaciones`
  MODIFY `id_reserv` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `admin_hotel`
--
ALTER TABLE `admin_hotel`
  ADD CONSTRAINT `admin_hotel_ibfk_1` FOREIGN KEY (`fk_id_cli_adm`) REFERENCES `clientes` (`id_cli`),
  ADD CONSTRAINT `admin_hotel_ibfk_2` FOREIGN KEY (`fk_id_reserv_adm`) REFERENCES `reservaciones` (`id_reserv`);

--
-- Filtros para la tabla `pagos_cli`
--
ALTER TABLE `pagos_cli`
  ADD CONSTRAINT `pagos_cli_ibfk_1` FOREIGN KEY (`fk_id_cli_pago`) REFERENCES `clientes` (`id_cli`),
  ADD CONSTRAINT `pagos_cli_ibfk_2` FOREIGN KEY (`fk_id_id_reserv_pago`) REFERENCES `reservaciones` (`id_reserv`);

--
-- Filtros para la tabla `reservaciones`
--
ALTER TABLE `reservaciones`
  ADD CONSTRAINT `reservaciones_ibfk_1` FOREIGN KEY (`fk_id_cli_reserv`) REFERENCES `clientes` (`id_cli`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
