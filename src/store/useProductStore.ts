import { create } from "zustand";
import type { ProductFilters, SortOption } from "../api/product_api";

interface ProductState {
  // Current filters
  filters: ProductFilters;
  currentCategory: string | null;
  selectedSubgroup: string | null;
  searchQuery: string;
  currentPage: number;

  // Filter setters
  setFilters: (filters: Partial<ProductFilters>) => void;
  setCurrentCategory: (category: string | null) => void;
  setSelectedSubgroup: (subgroup: string | null) => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;

  // Sorting
  setSorting: (ordering: SortOption) => void;

  // Price filter
  setPriceRange: (min: number | undefined, max: number | undefined) => void;

  // Clear functions
  clearFilters: () => void;
  clearSearch: () => void;
  clearSubcategories: () => void;

  // Legacy compatibility
  selectedSubcategories: string[];
  selectedCategories: string[];
  toggleSubcategory: (subcategory: string) => void;
  toggleCategory: (category: string) => void;
  clearCategories: () => void;
}

const initialFilters: ProductFilters = {
  page: 1,
};

export const useProductStore = create<ProductState>((set, get) => ({
  // State
  filters: initialFilters,
  currentCategory: null,
  selectedSubgroup: null,
  searchQuery: "",
  currentPage: 1,
  selectedSubcategories: [],

  // Set multiple filters at once
  setFilters: (newFilters: Partial<ProductFilters>) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  // Set current category (group)
  setCurrentCategory: (category: string | null) =>
    set((state) => ({
      currentCategory: category,
      selectedSubgroup: null,
      selectedSubcategories: [],
      filters: {
        ...state.filters,
        group: category || undefined,
        subgroup: undefined,
        subgroup_id: undefined,
      },
    })),

  // Set selected subgroup
  setSelectedSubgroup: (subgroup: string | null) =>
    set((state) => ({
      selectedSubgroup: subgroup,
      filters: {
        ...state.filters,
        subgroup: subgroup || undefined,
      },
    })),

  // Set search query
  setSearchQuery: (query: string) =>
    set((state) => ({
      searchQuery: query,
      filters: {
        ...state.filters,
        search: query || undefined,
      },
    })),

  // Set current page
  setCurrentPage: (page: number) =>
    set((state) => ({
      currentPage: page,
      filters: {
        ...state.filters,
        page,
      },
    })),

  // Set sorting
  setSorting: (ordering: SortOption) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ordering: ordering || undefined,
      },
    })),

  // Set price range
  setPriceRange: (min: number | undefined, max: number | undefined) =>
    set((state) => ({
      filters: {
        ...state.filters,
        min_price: min,
        max_price: max,
      },
    })),

  // Clear all filters
  clearFilters: () =>
    set({
      filters: initialFilters,
      currentCategory: null,
      selectedSubgroup: null,
      searchQuery: "",
      currentPage: 1,
      selectedSubcategories: [],
    }),

  // Clear search
  clearSearch: () =>
    set({
      searchQuery: "",
      currentCategory: null,
      selectedSubcategories: [],
      selectedSubgroup: null,
      filters: initialFilters,
    }),

  // Clear subcategories
  clearSubcategories: () =>
    set((state) => ({
      selectedSubcategories: [],
      selectedSubgroup: null,
      filters: {
        ...state.filters,
        subgroup: undefined,
        subgroup_id: undefined,
      },
    })),

  // Legacy compatibility
  get selectedCategories() {
    return get().selectedSubcategories;
  },

  toggleSubcategory: (subcategory: string) =>
    set((state) => ({
      selectedSubcategories: state.selectedSubcategories.includes(subcategory)
        ? state.selectedSubcategories.filter((s) => s !== subcategory)
        : [...state.selectedSubcategories, subcategory],
    })),

  toggleCategory: (category: string) =>
    set((state) => ({
      selectedSubcategories: state.selectedSubcategories.includes(category)
        ? state.selectedSubcategories.filter((s) => s !== category)
        : [...state.selectedSubcategories, category],
    })),

  clearCategories: () => set({ selectedSubcategories: [] }),
}));
