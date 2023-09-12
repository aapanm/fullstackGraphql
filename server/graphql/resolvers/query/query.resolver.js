import { signIn } from "./user.query.js";

import {
  fetchProductData,
  createProductStructure,
  fetchAllProductData,
} from "./product.query.js";

import {
  getRentedProducts,
  getBoughtProducts,
  getSoldProducts,
  getLentProducts,
} from "./transaction.query.js";

const Query = {
  signIn,
  fetchProductData,
  createProductStructure,
  fetchAllProductData,
  getRentedProducts,
  getBoughtProducts,
  getSoldProducts,
  getLentProducts,
};

export { Query };
