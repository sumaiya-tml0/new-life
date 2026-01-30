import {
  allItemsByCategory,
  filterProductsBySubgroup,
  getAllProducts,
  getSingleProduct,
  productCategory,
  searchProduct,
} from "../api/product_api";
import { useQuery } from "@tanstack/react-query";

export const useAllProducts = (subcategories: string[], page: number) =>
  useQuery({
    // Adding page to the key is CRUCIAL for refetching on page change
    queryKey: ["product", subcategories, page],
    queryFn: () => getAllProducts(subcategories, page).then((res) => res?.data),
  });

export const useSearchProduct = (searchTerm: string) =>
  useQuery({
    queryKey: ["search-product", searchTerm],
    queryFn: () =>
      searchProduct(searchTerm)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null; //no product

          return Promise.reject(err);
        }),
    enabled: searchTerm.length >= 2,
    staleTime: 60 * 1000,
  });
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
export const useItemsByCategory = (params: string) =>
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

export const usefilterProductsBySubgroup = (params: string) =>
  useQuery({
    queryKey: ["filterSubgroup", params],
    queryFn: () =>
      filterProductsBySubgroup(params)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null; // no data

          return Promise.reject(err);
        }),
  });
