import { Button, Drawer, Menu, Tag } from "antd";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router";

import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
      label: "New Life Foundation",
      key: "newlife",
      children: [
        {
          key: "publication",
          label: (
            <Link to="/publication" style={{ color: "inherit" }}>
             Publication
            </Link>
          ),
        },
      ],
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

  const [current, setCurrent] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onClick = (e: { key: string }) => {
    setCurrent(e.key);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${
        isHomePage ? "absolute bg-transparent" : "relative bg-[#deebe1]"
      } top-0 left-0 right-0 z-50`}
    >
      {/* First Line: Search | Logo | Order Now */}
      <div className="flex items-center justify-between px-4 md:px-12 py-4 md:py-6">
        {/* Search - Left */}
        <div
          className={`flex items-center gap-2 cursor-pointer transition-colors ${
            isHomePage ? "text-white hover:text-white/80" : "text-[#222] hover:text-[#0b6b31]"
          }`}
        >
          <FiSearch className="text-lg md:text-xl" />
          <span className="text-sm md:text-base hidden sm:inline">Search</span>
        </div>

        {/* Logo - Center */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="w-48 h-full" />
        </Link>

        {/* Order Now Button - Right */}
        <div className="flex items-center gap-2">
          {/* Tag - Only visible on lg and above */}
          <div className="hidden lg:block">
            <Tag
              style={{
                padding: "4px 10px",
                backgroundColor: "#f0fdf4",
                color: "#0b6b31",
                border: "1px solid #0b6b31",
              }}
            >
              Since 1948–{new Date().getFullYear()}
            </Tag>
          </div>

          {/* Button - Only visible on lg and above */}
          <div className="hidden lg:block">
            <Link to="/login">
              <Button
                type="primary"
                style={{
                  padding: "8px 20px",
                  backgroundColor: "#0b6b31",
                  borderColor:"#0b6b31",
                  color:"#ffffff",
                }}
              >
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle - Only visible below md */}
          <button
            className={`md:hidden text-2xl p-1 ${isHomePage ? "text-white" : "text-[#222]"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Second Line: Menu Items - Desktop */}
      <div className="hidden md:flex justify-center py-2">
        <Menu
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
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
            <img src={logo} alt="Logo" className="w-48 h-full" />
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        className="mobile-menu-drawer"
        styles={{
          body: { padding: 0 },
        }}
      >
        <Menu
          mode="inline"
          onClick={onClick}
          selectedKeys={[current]}
          items={items}
          className="!border-none"
          style={{
            background: "transparent",
          }}
          theme="light"
        />
        <div className="mt-6 px-4">
          <Link to="/login">
            <Button
              type="primary"
              block
              className="!bg-[#0b6b31] hover:!bg-[#095228] !border-none !rounded-full !h-10"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
