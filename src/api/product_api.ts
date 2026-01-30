import { createApiInstance } from "./api";

const product = createApiInstance;

export const getAllProducts = (subcategories: string[], page = 1) => {
  return product.get("/products/", {
    params: {
      subcategory: subcategories.join(","),
      page: page,
    },
  });
};
export const productCategory = () => {
  return product.get("/categories/");
};
export const allItemsByCategory = (params: string) => {
  return product.get(`/products/?group=${params}`);
};
export const getSingleProduct = (slug: string) => {
  return product.get(`/products/${slug}/`);
};
export const searchProduct = (search: string) => {
  return product.get(`/products/search/?q=${search}`);
};

export const filterProductsBySubgroup = (subgroup_name: string) => {
  return product.get(`/products/?subgroup=${subgroup_name}`);
};
