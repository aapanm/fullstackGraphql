/*
  Warnings:

  - You are about to drop the column `purhcasePrice` on the `ProductPurchasePrice` table. All the data in the column will be lost.
  - Added the required column `purchasePrice` to the `ProductPurchasePrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductPurchasePrice" DROP COLUMN "purhcasePrice",
ADD COLUMN     "purchasePrice" DOUBLE PRECISION NOT NULL;
