import { Drawer, Menu, Tag } from "antd";
import { useState, useRef, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router";
import { useProductStore } from "../store/useProductStore";
import { dummyProducts } from "../data/products";

import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { setSearchQuery, setCurrentCategory, clearSubcategories } = useProductStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const searchResults = localSearch.trim()
    ? dummyProducts.filter((product) =>
        product.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(localSearch.toLowerCase()) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(localSearch.toLowerCase()))
      )
    : [];

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
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

  const handleProductClick = (productId: number) => {
    setSearchOpen(false);
    setLocalSearch("");
    navigate(`/products?highlight=${productId}`);
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
      children: [
        {
          key: "ayurvedic",
          label: (
            <Link to="/products/Ayurvedic" style={{ color: "inherit" }}>
              Ayurvedic
            </Link>
          ),
        },
        {
          key: "homeo",
          label: (
            <Link to="/products/Homeo" style={{ color: "inherit" }}>
              Homeopathic
            </Link>
          ),
        },
        {
          key: "unani",
          label: (
            <Link to="/products/Unani" style={{ color: "inherit" }}>
              Unani
            </Link>
          ),
        },
        {
          key: "herbal",
          label: (
            <Link to="/products/Herbal" style={{ color: "inherit" }}>
              Herbal
            </Link>
          ),
        },
      ],
    },
    {
      label: <Link to="/publication" style={{ color: "inherit" }}>
              New Life Foundation
            </Link>,
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

  // Determine selected keys based on current path
  const getSelectedKeys = () => {
    const path = location.pathname;

    if (path === "/") return ["Home"];
    if (path === "/company-profile") return ["companyProfile", "aboutUs"];
    if (path === "/chairman-message") return ["chairmanMessage", "aboutUs"];
    if (path === "/board-of-directors") return ["boardOfDirectors", "aboutUs"];
    if (path === "/products/Ayurvedic") return ["ayurvedic", "ourProducts"];
    if (path === "/products/Homeo") return ["homeo", "ourProducts"];
    if (path === "/products/Unani") return ["unani", "ourProducts"];
    if (path === "/products/Herbal") return ["herbal", "ourProducts"];
    if (path.startsWith("/products")) return ["ourProducts"];
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
            <img src={logo} alt="Logo" className="w-28 sm:w-36 md:w-40 lg:w-48 h-auto" />
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
          className={`md:hidden text-xl sm:text-2xl p-1 ${isHomePage ? "text-white" : "text-[#222]"}`}
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
            <span className="text-sm md:text-base hidden sm:inline">Search</span>
          </div>

          {/* Expanded Search Bar - Absolute positioned */}
          {searchOpen && (
            <div className="absolute top-18 -translate-y-1/2 right-0 flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-2 w-64 sm:w-80 md:w-96 z-50">
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
          {searchOpen && localSearch.trim() && (
            <div className="absolute top-full right-0 mt-18 bg-white rounded-lg shadow-xl border border-gray-200 max-h-80 overflow-y-auto z-50 w-64 sm:w-80 md:w-96">
              {searchResults.length > 0 ? (
                <div className="p-2">
                  <p className="text-xs text-gray-500 px-2 py-1">{searchResults.length} results found</p>
                  {searchResults.slice(0, 8).map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="p-2 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-[#222]">{product.name}</div>
                      <div className="text-xs text-gray-500">
                        {product.category} {product.subcategory && `> ${product.subcategory}`}
                      </div>
                    </div>
                  ))}
                  {searchResults.length > 8 && (
                    <button
                      onClick={handleSearch}
                      className="w-full text-center text-sm text-[#0b6b31] hover:bg-gray-50 py-2 rounded-md transition-colors"
                    >
                      View all {searchResults.length} results
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500 text-sm">
                  No products found for "{localSearch}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Second Line: Menu Items - Desktop */}
      <div className="hidden md:flex justify-center py-1 lg:py-2 px-4">
        <Menu
          mode="horizontal"
          onClick={onClick}
          selectedKeys={selectedKeys}
          items={items}
          disabledOverflow={true}
          className={`!bg-transparent !border-none ${isHomePage ? "header-menu" : "header-menu-solid"}`}
          style={{ background: "transparent", borderBottom: "none" }}
        />
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
