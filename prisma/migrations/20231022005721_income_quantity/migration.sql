/*
  Warnings:

  - You are about to drop the column `incomeQuantiy` on the `receita` table. All the data in the column will be lost.
  - Added the required column `incomeQuantity` to the `Receita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `receita` DROP COLUMN `incomeQuantiy`,
    ADD COLUMN `incomeQuantity` INTEGER NOT NULL;
