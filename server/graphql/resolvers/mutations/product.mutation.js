import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

import { getProductData } from "../query/product.query.js";

const createProduct = async (_, args) => {
  const {
    userId,
    title,
    description,
    purchasePrice,
    rentPrice,
    rentOptionId,
    categoryId,
  } = args.input;

  try {
    let product;
    const active = 1;
    await prisma.$transaction(async (tx) => {
      product = await tx.products.create({
        data: {
          userId,
          title,
          description,
          categoryId,
          active,
        },
      });

      await tx.productRentPrice.create({
        data: {
          productId: product.id,
          rentPrice,
          rentOptionId,
        },
      });

      await tx.productPurchasePrice.create({
        data: {
          productId: product.id,
          purchasePrice,
        },
      });
    });

    return product;
  } catch (e) {
    throw new Error(`Something went wrong creating product, ${e}`);
  }
};

const updateProduct = async (_, args) => {
  let {
    title,
    description,
    purchasePrice,
    rentPrice,
    rentOptionId,
    categoryId,
  } = args.input;

  const id = args.id;

  try {
    let updatedProduct;

    const getCurrentInfo = await getProductData(id);

    if (getCurrentInfo[0].active === 0)
      throw new Error("Product does not exist!");

    if (!title) title = getCurrentInfo[0].title;
    if (!description) description = getCurrentInfo[0].description;
    if (!categoryId) categoryId = getCurrentInfo[0].categoryId;
    if (!purchasePrice)
      purchasePrice = getCurrentInfo[0].productPurchasePrice[0].purchasePrice;
    if (!rentPrice) rentPrice = getCurrentInfo[0].productRentPrice[0].rentPrice;
    if (!rentOptionId)
      rentOptionId = getCurrentInfo[0].productRentPrice[0].rentOptionId;

    await prisma.$transaction(async (tx) => {
      updatedProduct = await tx.products.update({
        data: {
          title,
          description,
        },
        where: {
          id: id,
        },
      });

      await tx.productRentPrice.update({
        data: {
          rentPrice,
          rentOptionId,
        },
        where: {
          productId: id,
        },
      });

      await tx.productPurchasePrice.update({
        data: {
          purchasePrice,
        },
        where: {
          productId: id,
        },
      });
    });

    return updatedProduct;
  } catch (e) {
    throw new Error(`Something went wrong updating product, ${e}`);
  }
};

const deleteProduct = async (_, args) => {
  const { productId } = args;

  try {
    let deletedProduct;

    await prisma.$transaction(async (tx) => {
      deletedProduct = await tx.products.update({
        data: {
          active: 0,
        },
        where: {
          id: productId,
        },
      });
    });

    return deletedProduct;
  } catch (e) {
    throw new Error(`An error occurred while deleting the product, ${e}`);
  }
};

export { createProduct, updateProduct, deleteProduct };
