import { useState, useRef, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useSearchProduct } from "../../hooks/useProducts";
import { useProductStore } from "../../store/useProductStore";
import type { Product } from "@/types/product";

interface SearchBarProps {
  isHomePage?: boolean;
  isSticky?: boolean;
}

const SearchBar = ({ isHomePage = false, isSticky = false }: SearchBarProps) => {
  const navigate = useNavigate();
  const { setSearchQuery, setCurrentCategory, clearSubcategories } =
    useProductStore();

  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(localSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch]);

  const { data: searchData, isLoading } = useSearchProduct(debouncedSearch);
  const searchResults = searchData?.results || [];

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  const handleSearch = () => {
    if (localSearch.trim()) {
      setSearchQuery(localSearch.trim());
      setCurrentCategory(null);
      clearSubcategories();
      setSearchOpen(false);
      navigate("/products");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setSearchOpen(false);
    }
  };

  const handleProductClick = (productSlug: string) => {
    setSearchOpen(false);
    setLocalSearch("");
    navigate(`/product/${productSlug}`);
  };

  const toggleSearch = () => {
    if (searchOpen) {
      setSearchOpen(false);
      setLocalSearch("");
    } else {
      setLocalSearch("");
      setSearchOpen(true);
    }
  };

  const getIconColor = () => {
    if (isHomePage && !isSticky) {
      return "text-white hover:text-white/80";
    }
    return "text-[#222] hover:text-[#0b6b31]";
  };

  return (
    <div ref={searchContainerRef} className="relative">
      {/* Search Icon */}
      <div
        onClick={toggleSearch}
        className={`flex items-center gap-2 cursor-pointer transition-colors ${getIconColor()}`}
      >
        <FiSearch className="text-lg md:text-xl" />
        <span className="text-sm md:text-base hidden sm:inline">Search</span>
      </div>

      {/* Expanded Search Bar */}
      {searchOpen && (
        <div
          className={`absolute ${
            isSticky ? "top-10" : "top-10 lg:top-0"
          } right-0 flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-2 w-64 sm:w-80 md:w-96 z-[100]`}
        >
          <FiSearch className="text-lg text-[#0b6b31] flex-shrink-0" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search products..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none text-sm text-[#222] bg-transparent"
          />
          <FiX
            className="text-lg cursor-pointer text-gray-500 hover:text-[#0b6b31] flex-shrink-0"
            onClick={toggleSearch}
          />
        </div>
      )}

      {/* Search Results Dropdown */}
      {searchOpen && localSearch.length >= 2 && (
        <div
          className={`absolute right-0 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-[400px] overflow-y-auto z-[100] w-72 sm:w-80 md:w-96 py-2 ${
            isSticky ? "top-20" : "top-20 lg:top-12"
          }`}
        >
          {isLoading ? (
            <div className="p-4 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-[#0b6b31] border-t-transparent rounded-full animate-spin"></div>
              Searching for "{localSearch}"...
            </div>
          ) : searchResults.length > 0 ? (
            <>
              {searchResults.map((product: Product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.slug)}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-4 border-b border-gray-50 last:border-none transition-colors"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                    <img
                      src={product.primary_image}
                      alt={product.name}
                      style={{ height: "100%" }}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800 truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#0b6b31] font-medium">
                      {product.group_name} • {product.price} BDT
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="p-8 text-center">
              <p className="text-sm text-gray-500">
                No products found for "{localSearch}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
