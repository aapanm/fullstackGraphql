/*
  Warnings:

  - A unique constraint covering the columns `[trxId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "RentTransactions" (
    "id" SERIAL NOT NULL,
    "transactionId" BIGINT NOT NULL,
    "rentOptionId" INTEGER NOT NULL,
    "startTime" DATE NOT NULL,
    "endTime" DATE NOT NULL,

    CONSTRAINT "RentTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuyTransactions" (
    "id" SERIAL NOT NULL,
    "transactionId" BIGINT NOT NULL,

    CONSTRAINT "BuyTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_trxId_key" ON "Transaction"("trxId");

-- AddForeignKey
ALTER TABLE "RentTransactions" ADD CONSTRAINT "RentTransactions_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("trxId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentTransactions" ADD CONSTRAINT "RentTransactions_rentOptionId_fkey" FOREIGN KEY ("rentOptionId") REFERENCES "ProductRentOptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyTransactions" ADD CONSTRAINT "BuyTransactions_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("trxId") ON DELETE RESTRICT ON UPDATE CASCADE;
