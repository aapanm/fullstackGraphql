/*
  Warnings:

  - Added the required column `active` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "active" INTEGER NOT NULL;
