/*
  Warnings:

  - You are about to drop the `receita` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `receita`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `revenues` (
    `id` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `preparation` INTEGER NOT NULL,
    `cooking` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `incomeQuantity` INTEGER NOT NULL,
    `incomeType` VARCHAR(191) NOT NULL,
    `calories` INTEGER NOT NULL,
    `methodPreparation` VARCHAR(191) NOT NULL,
    `ingredients` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
