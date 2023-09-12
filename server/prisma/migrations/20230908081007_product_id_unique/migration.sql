/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `ProductPurchasePrice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `ProductRentPrice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductPurchasePrice_productId_key" ON "ProductPurchasePrice"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRentPrice_productId_key" ON "ProductRentPrice"("productId");
