import { createApiInstance } from "./api";

const product = createApiInstance;

// Sorting options
export type SortOption =
  | "name"
  | "-name"
  | "price"
  | "-price"
  | "created_at"
  | "-created_at"
  | "";

// Filter interface for all available filters
export interface ProductFilters {
  // Pagination
  page?: number;

  // Search
  search?: string;
  name?: string;

  // Sorting
  ordering?: SortOption;

  // Category filters (name-based)
  group?: string;
  subgroup?: string;
  type?: string;

  // Category filters (ID-based) - recommended for exact filtering
  group_id?: number;
  subgroup_id?: number;
  type_id?: number;

  // Product attributes
  power?: string;
  prod_class?: string;
  company?: string;

  // Price filters
  min_price?: number;
  max_price?: number;

  // Size filters
  min_size?: number;
  max_size?: number;

  // Availability
  web_available?: boolean;
  home_available?: boolean;

  // Status
  is_active?: boolean;
  featured?: boolean;

  // Disease
  disease?: string;
  disease_id?: number;

  // Variants
  parent_id?: number;
}

// Build query params from filters object
const buildFilterParams = (filters: ProductFilters) => {
  const params: Record<string, string | number | boolean> = {};

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params[key] = value;
    }
  });

  return params;
};

// Get all products with optional filters
export const getAllProducts = (filters: ProductFilters = {}) => {
  return product.get("/products/", {
    params: buildFilterParams(filters),
  });
};

// Get product categories
export const productCategory = () => {
  return product.get("/categories/");
};

// Get products by group name
export const allItemsByCategory = (groupName: string) => {
  return product.get("/products/", {
    params: { group: groupName },
  });
};

// Get single product by slug
export const getSingleProduct = (slug: string) => {
  return product.get(`/products/${slug}/`);
};

// Search products
export const searchProduct = (search: string) => {
  return product.get("/products/search/", {
    params: { q: search },
  });
};

// Filter by subgroup name
export const filterProductsBySubgroup = (subgroupName: string) => {
  return product.get("/products/", {
    params: { subgroup: subgroupName },
  });
};

// Filter by subgroup ID (recommended)
export const filterProductsBySubgroupId = (subgroupId: number) => {
  return product.get("/products/", {
    params: { subgroup_id: subgroupId },
  });
};

// Filter by type ID
export const filterProductsByTypeId = (typeId: number) => {
  return product.get("/products/", {
    params: { type_id: typeId },
  });
};

// Filter by group ID
export const filterProductsByGroupId = (groupId: number) => {
  return product.get("/products/", {
    params: { group_id: groupId },
  });
};

// Get featured products
export const getFeaturedProducts = () => {
  return product.get("/products/", {
    params: { featured: true },
  });
};

// Advanced filter with multiple parameters
export const getFilteredProducts = (filters: ProductFilters) => {
  return product.get("/products/", {
    params: buildFilterParams(filters),
  });
};
