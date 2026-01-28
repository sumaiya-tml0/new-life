
import { createApiInstance } from "./api";

const product = createApiInstance;

export const productCategory = () => {
  return product.get("/categories/");
};
export const allItemsByCategory = (params:string) => {
  return product.get(`/products/?group=${params}`);
};
export const getSingleProduct = (slug:string) => {
  return product.get(`/products/${slug}/`);
};
