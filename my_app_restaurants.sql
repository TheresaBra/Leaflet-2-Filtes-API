CREATE DATABASE  IF NOT EXISTS `my_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `my_app`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: my_app
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id_restaurant` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `lat` decimal(11,8) DEFAULT NULL,
  `lng` decimal(11,8) DEFAULT NULL,
  `kind_food` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_restaurant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Bar Central','Carrer d\'Elisabets 6, 08001 Barcelona',41.38349000,2.16875000,'Tapas'),(2,'La Monroe','Plaça de Salvador Seguí 1-9, 08001 Barcelona',41.37857100,2.17106000,'Mediterranean'),(3,'La Bombeta','Carrer de la Maquinista 3, 08003 Barcelona',41.38055000,2.18771000,'Tapas'),(4,'Restaurante Koh','Carrer de Pujades 133, 08005 Barcelona',41.39966000,2.19784000,'Asian'),(5,'La Pizza del Sortidor Poble Sec','Carrer de Blasco de Garay 46, 08004 Barcelona',41.37263030,2.16241930,'Pizzeria'),(6,'Marina Port Vell Restaurant','Moll de la Barceloneta 1, 08003 Barcelona',41.37997050,2.18638500,'Mediterranean'),(7,'Kak Koy','Carrer de Ripoll 16, 08002 Barcelona',41.38531000,2.17545000,'Asian'),(8,'ELDISET','Carrer Antic de Sant Joan 3, 08003 Barcelona',41.38499010,2.18338850,'Tapas'),(9,'La Alcoba Azul','Carrer de Salomó ben Adret 14,  08002 Barcelona',41.38289130,2.17553100,'Tapas'),(10,'Los Platitos','Carrer de la Diputació 346, 08013 Barcelona',41.39538110,2.17387780,'Tapas');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-30 10:19:44
