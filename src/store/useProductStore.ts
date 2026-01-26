import { create } from "zustand";

interface ProductState {
  currentCategory: string | null;
  selectedSubcategories: string[];
  searchQuery: string;
  setCurrentCategory: (category: string | null) => void;
  toggleSubcategory: (subcategory: string) => void;
  clearSubcategories: () => void;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
  // Keep old names for compatibility
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  clearCategories: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  currentCategory: null,
  selectedSubcategories: [],
  searchQuery: "",
  setCurrentCategory: (category: string | null) =>
    set({ currentCategory: category, selectedSubcategories: [] }),
  toggleSubcategory: (subcategory: string) =>
    set((state) => ({
      selectedSubcategories: state.selectedSubcategories.includes(subcategory)
        ? state.selectedSubcategories.filter((s) => s !== subcategory)
        : [...state.selectedSubcategories, subcategory],
    })),
  clearSubcategories: () => set({ selectedSubcategories: [] }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  clearSearch: () => set({ searchQuery: "", currentCategory: null, selectedSubcategories: [] }),
  // Compatibility aliases
  get selectedCategories() {
    return this.selectedSubcategories;
  },
  toggleCategory: (category: string) =>
    set((state) => ({
      selectedSubcategories: state.selectedSubcategories.includes(category)
        ? state.selectedSubcategories.filter((s) => s !== category)
        : [...state.selectedSubcategories, category],
    })),
  clearCategories: () => set({ selectedSubcategories: [] }),
}));
