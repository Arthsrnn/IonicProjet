-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 17 jan. 2023 à 21:37
-- Version du serveur :  10.4.19-MariaDB
-- Version de PHP : 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `marmiton`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(2, 'Chaud'),
(4, 'Froid'),
(6, 'tiède');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `cooktime` int(11) DEFAULT NULL,
  `preparetime` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `nbportion` int(11) NOT NULL,
  `tools` text DEFAULT NULL,
  `level` int(11) NOT NULL,
  `ingredients` text NOT NULL,
  `steps` text NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `title`, `picture`, `video_url`, `description`, `cooktime`, `preparetime`, `cost`, `nbportion`, `tools`, `level`, `ingredients`, `steps`, `category_id`) VALUES
(6, 'Tarte au fraise ', 'https://cdn.lacuisinedannie.com/images/413.jpg', 'https://youtu.be/6o1BQX8N7Yw', 'Prendre son temps pour reussir', 3, 3, 2, 3, 'fouet- four- table', 2, '40g farine- 50g sucre', 'mettre au four- reussir', 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);
--
--  `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--  `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);



 -- `product`
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--`categories`
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;



-- `user`
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;


