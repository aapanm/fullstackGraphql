/*
  Warnings:

  - You are about to drop the `BuyTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BuyTransactions" DROP CONSTRAINT "BuyTransactions_transactionId_fkey";

-- DropTable
DROP TABLE "BuyTransactions";
