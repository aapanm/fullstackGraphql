import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const transaction = async (_, args) => {
  const { productId, userId, transactionTypeId } = args;
  const trxId = generateTransactionId();

  let response;

  await prisma.$transaction(
    async (tx) => {
      response = await tx.transaction.create({
        data: {
          trxId,
          productId,
          userId,
          transactionTypeId,
        },
      });

      if (transactionTypeId == 2) {
        const { rentStartDate, rentEndDate, productRentOptionId } = args;
        await tx.rentTransactions.create({
          data: {
            transactionId: trxId,
            rentOptionId: productRentOptionId,
            startTime: new Date(rentStartDate),
            endTime: new Date(rentEndDate),
          },
        });
      }
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    }
  );

  return {
    ...response,
    trxId: response.trxId.toString(),
  };
};

function generateTransactionId() {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 10000);
  const transactionId = timestamp * 10000 + randomPart;
  return transactionId;
}

export { transaction };
