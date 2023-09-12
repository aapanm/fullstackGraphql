import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const getRentedProducts = async (_, args) => {
  const { userId } = args;
  try {
    const res = await prisma.transaction.findMany({
      where: {
        userId: userId,
        transactionTypeId: 2,
      },
      include: {
        productInfo: {
          include: {
            productRentPrice: {
              include: {
                rentOptionInfo: true,
              },
            },
            categoryInfo: true,
          },
        },
        transactionTypeInfo: true,
        rentTransacations: true,
      },
    });

    res.forEach((product) => {
      (product.trxId = product.trxId.toString()),
        (product.rentTransacations[0].transactionId =
          product.rentTransacations[0].transactionId.toString());
    });

    return res;
  } catch (e) {
    throw new Error(
      `Something went wrong while fetching rented Products, ${e}`
    );
  }
};

const getBoughtProducts = async (_, args) => {
  const { userId } = args;
  try {
    const res = await prisma.transaction.findMany({
      where: {
        userId: userId,
        transactionTypeId: 1,
      },
      include: {
        productInfo: {
          include: {
            productPurchasePrice: true,
            categoryInfo: true,
          },
        },
        transactionTypeInfo: true,
      },
    });

    res.forEach((product) => {
      product.trxId = product.trxId.toString();
    });

    return res;
  } catch (e) {
    throw new Error(
      `Something went wrong while fetching purchased Products, ${e}`
    );
  }
};

const getSoldProducts = async (_, args) => {
  const { userId } = args;
  try {
    const response = await prisma.transaction.findMany({
      where: {
        productInfo: {
          userId: userId,
        },
        transactionTypeId: 1,
      },
      include: {
        productInfo: {
          include: {
            productPurchasePrice: true,
            categoryInfo: true,
          },
        },
        transactionTypeInfo: true,
      },
    });

    response.forEach((product) => {
      product.trxId = product.trxId.toString();
    });

    return response;
  } catch (e) {
    throw new Error(`Something went wrong while fetching sold Products, ${e}`);
  }
};

const getLentProducts = async (_, args) => {
  const { userId } = args;
  try {
    const res = await prisma.transaction.findMany({
      where: {
        productInfo: {
          userId: userId,
        },
        transactionTypeId: 2,
      },
      include: {
        productInfo: {
          include: {
            productRentPrice: {
              include: {
                rentOptionInfo: true,
              },
            },
            categoryInfo: true,
          },
        },
        transactionTypeInfo: true,
        rentTransacations: true,
      },
    });

    res.forEach((product) => {
      (product.trxId = product.trxId.toString()),
        (product.rentTransacations[0].transactionId =
          product.rentTransacations[0].transactionId.toString());
    });

    return res;
  } catch (e) {
    throw new Error(
      `Something went wrong while fetching purchased Products, ${e}`
    );
  }
};

export {
  getRentedProducts,
  getBoughtProducts,
  getSoldProducts,
  getLentProducts,
};
