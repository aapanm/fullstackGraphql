import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const fetchProductData = async (_, args) => {
  const { productId } = args;
  const response = await getProductData(productId);
  return response;
};

const fetchAllProductData = async () => {
  try {
    const response = prisma.products.findMany({
      where: {
        active: 1,
      },
      include: {
        productPurchasePrice: true,
        productRentPrice: true,
        categoryInfo: true,
      },
    });
    return response;
  } catch (e) {
    throw new Error(`An error occurred while fetching produtcs list, ${e}`);
  }
};

const getProductData = async (productId) => {
  try {
    const response = await prisma.products.findMany({
      where: {
        id: productId,
      },
      include: {
        productRentPrice: true,
        productPurchasePrice: true,
        categoryInfo: true,
      },
    });
    return response;
  } catch (e) {
    throw new Error(`cannot fetch product info, ${e}`);
  }
};

const fetchRentOptions = async () => {
  try {
    const response = await prisma.productRentOptions.findMany();
    return response;
  } catch (e) {
    throw new Error("Cannot fetch rent options, please check the server!");
  }
};

const fetchProductCategories = async () => {
  try {
    const response = await prisma.productCategory.findMany();
    return response;
  } catch (e) {
    throw new Error(
      `An error occurred while fetching product categories, ${e}`
    );
  }
};

const createProductStructure = async () => {
  const rentOptions = await fetchRentOptions();
  const categories = await fetchProductCategories();

  return [
    {
      title: "Select a title for your product",
      type: "text",
      value: "",
    },
    {
      title: "Select categories",
      type: "dropdown",
      categories: categories,
      value: "",
    },
    {
      title: "Select a description",
      type: "text",
      value: "",
    },
    {
      title: "Select price",
      type: "text",
      value: "",
      suboptions: [
        {
          title: "Rent",
          type: "text",
          value: "",
        },
        {
          title: "Rent",
          type: "dropdown",
          rents: rentOptions,
          value: "",
        },
      ],
    },
  ];
};

export {
  fetchProductData,
  getProductData,
  createProductStructure,
  fetchAllProductData,
};
