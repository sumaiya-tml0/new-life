import { Menu } from "antd";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router";
import { useProductStore } from "../store/useProductStore";
import { useProductsCategories } from "../hooks/useProducts";
import { SearchBar, Logo, MobileDrawer } from "./components";
import type { Product } from "@/types/product";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { setCurrentCategory, clearSubcategories } = useProductStore();
  const { data: categories } = useProductsCategories();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      label: (
        <Link to="/company-profile" style={{ color: "inherit" }}>
          About Us
        </Link>
      ),
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
      children:
        categories && categories.length > 0
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

  const getSelectedKeys = () => {
    const path = location.pathname;

    if (path === "/") return ["Home"];
    if (path === "/company-profile") return ["companyProfile", "aboutUs"];
    if (path === "/chairman-message") return ["chairmanMessage", "aboutUs"];
    if (path === "/board-of-directors") return ["boardOfDirectors", "aboutUs"];

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

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${
        isHomePage ? "absolute bg-transparent" : "relative bg-[#deebe1]"
      } top-0 left-0 right-0 z-50 py-6`}
    >
      {/* First Line: Menu Toggle | Logo | Search */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6">
        {/* Logo - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo isHomePage={isHomePage} size="large" showTag centered />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden text-xl sm:text-2xl p-1 ${isHomePage ? "text-white" : "text-[#222]"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Search - Right */}
        <div className="ml-auto">
          <SearchBar isHomePage={isHomePage} />
        </div>
      </div>

      {/* Second Line: Desktop Menu */}
      <div
        className={`${
          isSticky
            ? "fixed top-0 bg-[#deebe1] w-full flex items-center justify-between px-12"
            : "justify-center"
        } hidden lg:flex items-center py-1 lg:py-2 px-4`}
      >
        {isSticky && <Logo size="small" showTag={false} />}

        <Menu
          mode="horizontal"
          onClick={handleMenuClick}
          selectedKeys={selectedKeys}
          items={items}
          disabledOverflow={true}
          className={`!bg-transparent !border-none ${
            isHomePage
              ? isSticky
                ? "header-menu-solid"
                : "header-menu"
              : "header-menu-solid"
          }`}
          style={{ background: "transparent", borderBottom: "none" }}
        />

        {isSticky && <SearchBar isHomePage={isHomePage} isSticky />}
      </div>

      {/* Mobile Menu Drawer */}
      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={items}
        selectedKeys={selectedKeys}
      />
    </header>
  );
};

export default Header;
