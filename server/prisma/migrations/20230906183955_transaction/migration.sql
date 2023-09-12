-- CreateTable
CREATE TABLE "TransactionType" (
    "id" SERIAL NOT NULL,
    "transactionType" TEXT NOT NULL,

    CONSTRAINT "TransactionType_pkey" PRIMARY KEY ("id")
);

INSERT INTO "TransactionType" ("transactionType")
VALUES
('BUY'),
('RENT');
