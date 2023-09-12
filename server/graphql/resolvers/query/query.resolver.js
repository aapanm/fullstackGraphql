import { signIn } from "./user.query.js";
import {
  fetchProductData,
  createProductStructure,
  fetchAllProductData,
} from "./product.query.js";
import { getRentedProducts, getBoughtProducts } from "./transaction.query.js";

const Query = {
  signIn,
  fetchProductData,
  createProductStructure,
  fetchAllProductData,
  getRentedProducts,
  getBoughtProducts,
};

export { Query };
