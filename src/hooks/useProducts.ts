import { allItemsByCategory, getSingleProduct, productCategory } from "../api/product_api";
import { useQuery } from "@tanstack/react-query";

export const useProductsCategories = () =>
  useQuery({
    queryKey: ["product-category"],
    queryFn: () =>
      productCategory()
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null; //no product

          return Promise.reject(err);
        }),

  });
export const useItemsByCategory = (params:string) =>
  useQuery({
    queryKey: ["items-by-product", params],
    queryFn: () =>
      allItemsByCategory(params)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null; //no product

          return Promise.reject(err);
        }),
  });
export const useSingleProduct = (slug: string | undefined) =>
  useQuery({
    queryKey: ["single-product", slug],
    queryFn: () =>
      getSingleProduct(slug!)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null; //no product

          return Promise.reject(err);
        }),
    enabled: !!slug,
  });
