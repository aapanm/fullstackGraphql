-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" SERIAL NOT NULL,
    "category" VARCHAR(255) NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

INSERT INTO "ProductCategory" ("category")
VALUES
('ELECTRONICS'),
('FURNITURE'),
('HOME APPLIANCES'),
('SPORTING GOODS'),
('OUTDOOR'),
('TOYS')


