import {
  allItemsByCategory,
  filterProductsBySubgroup,
  getAllProducts,
  getFilteredProducts,
  getRelatedProducts,
  getSingleProduct,
  productCategory,
  searchProduct,
  type ProductFilters,
} from "../api/product_api";
import { useQuery } from "@tanstack/react-query";

// Main hook for fetching products with all filters
export const useProducts = (filters: ProductFilters) =>
  useQuery({
    queryKey: ["products", filters],
    queryFn: () => getFilteredProducts(filters).then((res) => res?.data),
  });

// Legacy hook - kept for backward compatibility
export const useAllProducts = (subcategories: string[], page: number) =>
  useQuery({
    queryKey: ["product", subcategories, page],
    queryFn: () => getAllProducts({ page }).then((res) => res?.data),
  });

export const useSearchProduct = (searchTerm: string) =>
  useQuery({
    queryKey: ["search-product", searchTerm],
    queryFn: () =>
      searchProduct(searchTerm)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null;
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
          if (err.response?.status === 204) return null;
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
          if (err.response?.status === 204) return null;
          return Promise.reject(err);
        }),
    enabled: !!params,
  });

export const useSingleProduct = (slug: string | undefined) =>
  useQuery({
    queryKey: ["single-product", slug],
    queryFn: () =>
      getSingleProduct(slug!)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null;
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
          if (err.response?.status === 204) return null;
          return Promise.reject(err);
        }),
    enabled: !!params,
  });

// New hooks for advanced filtering

export const useFeaturedProducts = () =>
  useQuery({
    queryKey: ["featured-products"],
    queryFn: () =>
      getFilteredProducts({ featured: true }).then((res) => res?.data),
  });

export const useProductsByPriceRange = (minPrice: number, maxPrice: number) =>
  useQuery({
    queryKey: ["products-by-price", minPrice, maxPrice],
    queryFn: () =>
      getFilteredProducts({ min_price: minPrice, max_price: maxPrice }).then(
        (res) => res?.data,
      ),
    enabled: minPrice > 0 || maxPrice > 0,
  });

export const useProductsByDisease = (disease: string) =>
  useQuery({
    queryKey: ["products-by-disease", disease],
    queryFn: () => getFilteredProducts({ disease }).then((res) => res?.data),
    enabled: !!disease,
  });

export const useRelatedProducts = (slug: string) =>
  useQuery({
    queryKey: ["related-products", slug],
    queryFn: () =>
      getRelatedProducts(slug)
        .then((res) => res?.data)
        .catch((err) => {
          if (err.response?.status === 204) return null;
          return Promise.reject(err);
        }),
  });
