import { signUp } from "./user.mutation.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "./product.mutation.js";
import { transaction } from "./transaction.mutation.js";

const Mutation = {
  signUp,
  createProduct,
  transaction,
  updateProduct,
  deleteProduct,
};

export { Mutation };
