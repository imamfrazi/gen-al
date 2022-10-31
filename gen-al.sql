-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 31, 2022 at 02:02 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gen-al`
--

-- --------------------------------------------------------

--
-- Table structure for table `dataset`
--

CREATE TABLE `dataset` (
  `Id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `Index_bulan` int(11) NOT NULL,
  `Bulan` varchar(64) NOT NULL,
  `Tahun` int(11) NOT NULL,
  `Jumlah_penumpang` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dataset`
--

INSERT INTO `dataset` (`Id`, `user_id`, `Index_bulan`, `Bulan`, `Tahun`, `Jumlah_penumpang`, `created_at`, `updated_at`) VALUES
(244, 1, 1, 'Januari', 2011, 16446, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(245, 1, 2, 'Febuari', 2011, 14519, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(246, 1, 3, 'Maret', 2011, 16584, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(247, 1, 4, 'April', 2011, 16031, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(248, 1, 5, 'Mei', 2011, 17018, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(249, 1, 6, 'Juni', 2011, 16806, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(250, 1, 7, 'July', 2011, 17632, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(251, 1, 8, 'Agustus', 2011, 14492, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(252, 1, 9, 'September', 2011, 16353, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(253, 1, 10, 'Oktober', 2011, 16062, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(254, 1, 11, 'November', 2011, 15765, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(255, 1, 12, 'Desember', 2011, 16333, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(256, 1, 13, 'Januari', 2012, 15801, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(257, 1, 14, 'Febuari', 2012, 15126, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(258, 1, 15, 'Maret', 2012, 16701, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(259, 1, 16, 'April', 2012, 16376, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(260, 1, 17, 'Mei', 2012, 17401, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(261, 1, 18, 'Juni', 2012, 17687, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(262, 1, 19, 'July', 2012, 17956, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(263, 1, 20, 'Agustus', 2012, 16675, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(264, 1, 21, 'September', 2012, 16063, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(265, 1, 22, 'Oktober', 2012, 16828, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(266, 1, 23, 'November', 2012, 15436, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(267, 1, 24, 'Desember', 2012, 15745, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(268, 1, 25, 'Januari', 2013, 14573, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(269, 1, 26, 'Febuari', 2013, 14315, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(270, 1, 27, 'Maret', 2013, 15521, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(271, 1, 28, 'April', 2013, 15724, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(272, 1, 29, 'Mei', 2013, 15795, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(273, 1, 30, 'Juni', 2013, 16932, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(274, 1, 31, 'July', 2013, 19917, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(275, 1, 32, 'Agustus', 2013, 19031, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(276, 1, 33, 'September', 2013, 19439, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(277, 1, 34, 'Oktober', 2013, 20198, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(278, 1, 35, 'November', 2013, 19578, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(279, 1, 36, 'Desember', 2013, 20992, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(280, 1, 37, 'Januari', 2014, 20698, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(281, 1, 38, 'Febuari', 2014, 19628, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(282, 1, 39, 'Maret', 2014, 22427, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(283, 1, 40, 'April', 2014, 21502, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(284, 1, 41, 'Mei', 2014, 22547, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(285, 1, 42, 'Juni', 2014, 23415, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(286, 1, 43, 'July', 2014, 22125, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(287, 1, 44, 'Agustus', 2014, 22763, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(288, 1, 45, 'September', 2014, 23219, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(289, 1, 46, 'Oktober', 2014, 24503, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(290, 1, 47, 'November', 2014, 23986, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(291, 1, 48, 'Desember', 2014, 25791, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(292, 1, 49, 'Januari', 2015, 24254, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(293, 1, 50, 'Febuari', 2015, 22394, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(294, 1, 51, 'Maret', 2015, 26841, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(295, 1, 52, 'April', 2015, 26150, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(296, 1, 53, 'Mei', 2015, 27450, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(297, 1, 54, 'Juni', 2015, 27118, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(298, 1, 55, 'July', 2015, 27077, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(299, 1, 56, 'Agustus', 2015, 27351, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(300, 1, 57, 'September', 2015, 27125, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(301, 1, 58, 'Oktober', 2015, 28280, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(302, 1, 59, 'November', 2015, 27253, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(303, 1, 60, 'Desember', 2015, 29328, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(304, 1, 61, 'Januari', 2016, 27886, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(305, 1, 62, 'Febuari', 2016, 26058, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(306, 1, 63, 'Maret', 2016, 28156, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(307, 1, 64, 'April', 2016, 28000, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(308, 1, 65, 'Mei', 2016, 30176, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(309, 1, 66, 'Juni', 2016, 28730, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(310, 1, 67, 'July', 2016, 28216, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(311, 1, 68, 'Agustus', 2016, 29125, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(312, 1, 69, 'September', 2016, 29019, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(313, 1, 70, 'Oktober', 2016, 29765, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(314, 1, 71, 'November', 2016, 29178, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(315, 1, 72, 'Desember', 2016, 31530, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(316, 1, 73, 'Januari', 2017, 30359, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(317, 1, 74, 'Febuari', 2017, 26837, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(318, 1, 75, 'Maret', 2017, 31612, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(319, 1, 76, 'April', 2017, 30934, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(320, 1, 77, 'Mei', 2017, 33157, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(321, 1, 78, 'Juni', 2017, 30181, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(322, 1, 79, 'July', 2017, 33669, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(323, 1, 80, 'Agustus', 2017, 33255, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(324, 1, 81, 'September', 2017, 31921, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(325, 1, 82, 'Oktober', 2017, 34498, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(326, 1, 83, 'November', 2017, 33798, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(327, 1, 84, 'Desember', 2017, 36140, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(328, 1, 85, 'Januari', 2018, 34107, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(329, 1, 86, 'Febuari', 2018, 30721, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(330, 1, 87, 'Maret', 2018, 35272, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(331, 1, 88, 'April', 2018, 35135, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(332, 1, 89, 'Mei', 2018, 34877, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(333, 1, 90, 'Juni', 2018, 32270, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(334, 1, 91, 'July', 2018, 36089, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(335, 1, 92, 'Agustus', 2018, 34560, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(336, 1, 93, 'September', 2018, 33878, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(337, 1, 94, 'Oktober', 2018, 35602, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(338, 1, 95, 'November', 2018, 34637, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(339, 1, 96, 'Desember', 2018, 37197, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(340, 1, 97, 'Januari', 2019, 34435, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(341, 1, 98, 'Febuari', 2019, 31282, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(342, 1, 99, 'Maret', 2019, 35068, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(343, 1, 100, 'April', 2019, 35106, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `alpha` float NOT NULL,
  `beta` float NOT NULL,
  `gamma` float NOT NULL,
  `nilai_mape` float NOT NULL,
  `model` varchar(64) NOT NULL,
  `iterasi` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `user_id`, `alpha`, `beta`, `gamma`, `nilai_mape`, `model`, `iterasi`, `created_at`, `updated_at`) VALUES
(30, 1, 0.826164, 0.228333, 0.653677, 9.69135, 'TES_GEN', 1, '2021-12-05 19:36:40', '2021-12-05 19:36:40'),
(31, 1, 0.7639, 0.61802, 0.61802, 10.631, 'TES_GSSMV', 15, '2021-12-26 04:17:54', '2021-12-05 19:40:37'),
(32, 1, 0.8099, 0.175219, 0.679659, 9.34314, 'TES_GEN', 2, '2021-12-05 19:41:41', '2021-12-05 19:41:41'),
(33, 1, 0.7639, 0.61802, 0.61802, 10.631, 'TES_GSSMV', 30, '2021-12-26 04:18:09', '2021-12-05 19:41:46'),
(36, 1, 0.808136, 0.160949, 0.711949, 9.23851, 'TES_GEN', 3, '2021-12-05 19:44:41', '2021-12-05 19:44:41'),
(37, 1, 0.7639, 0.61802, 0.61802, 10.631, 'TES_GSSMV', 45, '2021-12-26 04:18:24', '2021-12-05 19:44:49'),
(38, 1, 0.883657, 0.00691552, 0.901029, 8.80119, 'TES_GEN', 1, '2021-12-25 20:42:52', '2021-12-25 20:42:52'),
(39, 1, 0.785139, 0.268601, 0.921173, 9.88085, 'TES_GEN', 2, '2022-10-31 04:04:14', '2022-10-31 04:04:14'),
(40, 1, 0.802612, 0.310752, 0.581124, 4.52411, 'TES_GEN', 3, '2022-10-31 06:02:48', '2022-10-31 06:02:48'),
(41, 1, 0.536449, 0.587547, 0.322273, 4.65495, 'TES_GEN', 7, '2022-10-31 06:04:31', '2022-10-31 06:04:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dataset`
--
ALTER TABLE `dataset`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dataset`
--
ALTER TABLE `dataset`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=364;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
