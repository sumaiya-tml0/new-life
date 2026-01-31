import { Drawer, Menu, Tag } from "antd";
import { useState, useRef, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router";
import { useProductStore } from "../store/useProductStore";

import logo from "../assets/logo.png";
import { useProductsCategories, useSearchProduct } from "../hooks/useProducts";
import type { Product } from "@/types/product";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { setSearchQuery, setCurrentCategory, clearSubcategories } =
    useProductStore();
    const {data: categories} = useProductsCategories()
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // 1. Create the debounced value (waits 300ms after last keystroke)
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(localSearch);
    }, 300); // 300ms is the "sweet spot" for search typing

    return () => clearTimeout(timer);
  }, [localSearch]);

  // 2. Pass ONLY the debounced value to your API hook
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

  const items = [
    {
      key: "Home",
      label: (
        <Link to="/" style={{ color: "inherit" }}>
          Home
        </Link>
      ),
    },
    {
      label: "About Us",
      key: "aboutUs",
      children: [
        {
          key: "companyProfile",
          label: (
            <Link to="/company-profile" style={{ color: "inherit" }}>
              Company Profile
            </Link>
          ),
        },
        {
          key: "chairmanMessage",
          label: (
            <Link to="/chairman-message" style={{ color: "inherit" }}>
              Chairman Message
            </Link>
          ),
        },
        {
          key: "boardOfDirectors",
          label: (
            <Link to="/board-of-directors" style={{ color: "inherit" }}>
              Board of Directors
            </Link>
          ),
        },
      ],
    },
    {
      label: (
        <Link to="/products" style={{ color: "inherit" }}>
          Our Products
        </Link>
      ),
      key: "ourProducts",
      children: categories && categories.length > 0
        ? categories.map((category: Product) => ({
            key: category.name.toLowerCase(),
            label: (
              <span
                onClick={() => {
                  setCurrentCategory(category.name);
                  clearSubcategories();
                  navigate(`/products/${category.name}`);
                }}
                style={{ color: "inherit", cursor: "pointer" }}
              >
                {category.name === "Homeo" ? "Homeopathic" : category.name}
              </span>
            ),
          }))
        : undefined,
    },
    {
      label: (
        <Link to="/publication" style={{ color: "inherit" }}>
          New Life Foundation
        </Link>
      ),
      key: "newlife",
    },
    {
      key: "NewsEvents",
      label: (
        <Link to="/news-events" style={{ color: "inherit" }}>
          News & Events
        </Link>
      ),
    },
    {
      key: "feedback",
      label: (
        <Link to="/feedback" style={{ color: "inherit" }}>
          Feedback
        </Link>
      ),
    },
    {
      key: "contactUs",
      label: (
        <Link to="/contact-us" style={{ color: "inherit" }}>
          Contact Us
        </Link>
      ),
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine selected keys based on current path
  const getSelectedKeys = () => {
    const path = location.pathname;

    if (path === "/") return ["Home"];
    if (path === "/company-profile") return ["companyProfile", "aboutUs"];
    if (path === "/chairman-message") return ["chairmanMessage", "aboutUs"];
    if (path === "/board-of-directors") return ["boardOfDirectors", "aboutUs"];
    
    // Check if path matches any category dynamically
    if (path.startsWith("/products/")) {
      const categoryName = path.split("/products/")[1];
      if (categoryName && categories) {
        const matchedCategory = categories.find(
          (cat: Product) => cat.name === categoryName
        );
        if (matchedCategory) {
          return [matchedCategory.name.toLowerCase(), "ourProducts"];
        }
      }
      return ["ourProducts"];
    }
    
    if (path === "/publication") return ["newlife"];
    if (path === "/news-events") return ["NewsEvents"];
    if (path === "/feedback") return ["feedback"];
    if (path === "/contact-us") return ["contactUs"];

    return ["Home"];
  };

  const selectedKeys = getSelectedKeys();

  const onClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${
        isHomePage ? "absolute bg-transparent" : "relative bg-[#deebe1]"
      } top-0 left-0 right-0 z-50 py-6`}
    >
      {/* First Line: Search | Logo | Order Now */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6">
        {/* Logo - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto"
            />
          </Link>
          <Tag
            className="!m-0"
            style={{
              padding: "2px 8px",
              backgroundColor: "transparent",
              color: isHomePage ? "#fff" : "#0b6b31",
              border: isHomePage ? "1px solid #fff" : "1px solid #0b6b31",
              fontSize: "10px",
            }}
          >
            Since 1948
          </Tag>
        </div>

        {/* Mobile Menu Toggle - Only visible below md */}
        <button
          className={`lg:hidden text-xl sm:text-2xl p-1 ${isHomePage ? "text-white" : "text-[#222]"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Search - Right */}
        <div ref={searchContainerRef} className="relative ml-auto">
          {/* Search Icon - Always visible */}
          <div
            onClick={toggleSearch}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${
              isHomePage
                ? "text-white hover:text-white/80"
                : "text-[#222] hover:text-[#0b6b31]"
            }`}
          >
            <FiSearch className="text-lg md:text-xl" />
            <span className="text-sm md:text-base hidden sm:inline">
              Search
            </span>
          </div>

          {/* Expanded Search Bar - Absolute positioned */}
          {searchOpen && (
            <div className="absolute top-18 lg:top-4 -translate-y-1/2 right-0 md:right-34 lg:right-0 flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-2 w-64 sm:w-80 md:w-96 z-50">
              <FiSearch className="text-lg text-[#0b6b31] flex-shrink-0" />
              <input
                ref={searchInputRef as React.RefObject<HTMLInputElement>}
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
            <div className="absolute top-full right-0 mt-18 lg:mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-[400px] overflow-y-auto z-[100] w-72 sm:w-80 md:w-96 py-2">
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
                      <div  className="w-12 h-12 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                        <img
                          src={product.primary_image}
                          alt={product.name}
                          style={{height: "100%"}}
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
                  {/* <button
                    onClick={handleSearch}
                    className="w-full py-3 text-center text-sm font-medium text-[#0b6b31] bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    View All Results
                  </button> */}
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
      </div>

      {/* Second Line: Menu Items - Desktop */}
      <div
        className={`${isSticky ? "fixed top-0 bg-[#deebe1] w-full flex justify-between px-12" : "justify-center"} hidden lg:flex  py-1 lg:py-2 px-4`}
      >
        {isSticky ? (
          <Link to="/">
            <img src={logo} style={{ width: 120 }} />
          </Link>
        ) : (
          ""
        )}

        <Menu
          mode="horizontal"
          onClick={onClick}
          selectedKeys={selectedKeys}
          items={items}
          disabledOverflow={true}
          className={`!bg-transparent !border-none ${isHomePage ? (isSticky ? "header-menu-solid" : "header-menu") : "header-menu-solid"}`}
          style={{ background: "transparent", borderBottom: "none" }}
        />

        {isSticky && (
          <div
            onClick={toggleSearch}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${
              isHomePage
                ? isSticky
                  ? "text-[#222] hover:text-[#0b6b31]"
                  : "text-white hover:text-white/80 "
                : "text-[#222] hover:text-[#0b6b31]"
            }`}
          >
            <FiSearch className="text-lg md:text-xl" />
            <span className="text-sm md:text-base hidden sm:inline">
              Search
            </span>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-32 sm:w-40 h-auto" />
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={260}
        className="mobile-menu-drawer"
        styles={{
          body: { padding: 0 },
        }}
      >
        <Menu
          mode="inline"
          onClick={onClick}
          selectedKeys={selectedKeys}
          items={items}
          className="!border-none"
          style={{
            background: "transparent",
          }}
          theme="light"
        />
      </Drawer>
    </header>
  );
};

export default Header;
