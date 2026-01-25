import { create } from "zustand";

interface ProductState {
  currentCategory: string | null;
  selectedSubcategories: string[];
  setCurrentCategory: (category: string | null) => void;
  toggleSubcategory: (subcategory: string) => void;
  clearSubcategories: () => void;
  // Keep old names for compatibility
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  clearCategories: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  currentCategory: null,
  selectedSubcategories: [],
  setCurrentCategory: (category: string | null) =>
    set({ currentCategory: category, selectedSubcategories: [] }),
  toggleSubcategory: (subcategory: string) =>
    set((state) => ({
      selectedSubcategories: state.selectedSubcategories.includes(subcategory)
        ? state.selectedSubcategories.filter((s) => s !== subcategory)
        : [...state.selectedSubcategories, subcategory],
    })),
  clearSubcategories: () => set({ selectedSubcategories: [] }),
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
