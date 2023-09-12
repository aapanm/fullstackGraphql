/*
  Warnings:

  - You are about to drop the column `name` on the `Products` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "name",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "title" VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE "ProductRentOptions" (
    "id" SERIAL NOT NULL,
    "options" VARCHAR(50) NOT NULL,

    CONSTRAINT "ProductRentOptions_pkey" PRIMARY KEY ("id")
);

-- inert rent option default values

INSERT INTO "ProductRentOptions" ("options")
VALUES
('HOURLY'),
('PER DAY');

-- CreateTable
CREATE TABLE "ProductRentPrice" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "rentPrice" DOUBLE PRECISION NOT NULL,
    "rentOptionId" INTEGER NOT NULL,

    CONSTRAINT "ProductRentPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPurchasePrice" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "purhcasePrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductPurchasePrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRentPrice" ADD CONSTRAINT "ProductRentPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRentPrice" ADD CONSTRAINT "ProductRentPrice_rentOptionId_fkey" FOREIGN KEY ("rentOptionId") REFERENCES "ProductRentOptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPurchasePrice" ADD CONSTRAINT "ProductPurchasePrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
