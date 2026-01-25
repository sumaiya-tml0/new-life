import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Company Profile", path: "/company-profile" },
    { label: "Our Products", path: "/products" },
    { label: "News & Events", path: "/news-events" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const productLinks = [
    { label: "Ayurvedic", path: "/products/Ayurvedic" },
    { label: "Homeopathic", path: "/products/Homeo" },
    { label: "Unani", path: "/products/Unani" },
    { label: "Herbal", path: "/products/Herbal" },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e5f0e7] via-[#d8e8dc] to-[#cce0d1]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#0b6b31]/10 rounded-full translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#2e3191]/10 rounded-full -translate-x-1/2 blur-3xl" />

      {/* Leaf Pattern - Top Right */}
      <div className="absolute top-8 right-8 text-[#0b6b31]/10 text-7xl lg:text-8xl hidden md:block">
        <FaLeaf />
      </div>

      {/* Leaf Pattern - Bottom Left */}
      <div className="absolute bottom-20 left-8 text-[#0b6b31]/10 text-6xl lg:text-7xl hidden md:block rotate-180">
        <FaLeaf />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & About */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-3 sm:space-y-4">
            <Link to="/">
              <img src={logo} alt="NewLife Logo" className="w-48 h-full" />
            </Link>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Providing quality herbal and traditional medicine since 1948.
              Committed to your health and wellness through nature's remedies.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0b6b31]/10 flex items-center justify-center text-[#0b6b31] hover:bg-[#0b6b31] hover:text-white transition-colors"
                >
                  <social.icon className="text-base sm:text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#222] mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#0b6b31] transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#222] mb-3 sm:mb-4">Our Products</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#0b6b31] transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Offices */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-[#222] mb-3 sm:mb-4">Our Offices</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 flex-shrink-0 text-[#0b6b31]" />
                  <div>
                    <span className="font-medium text-[#222]">Head Office</span>
                    <p>101, Natun Paltan Line, Azimpur, Dhaka-1205</p>
                  </div>
                </div>
              </li>
              <li className="text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 flex-shrink-0 text-[#0b6b31]" />
                  <div>
                    <span className="font-medium text-[#222]">Corporate Office</span>
                    <p>15/3, Barabag, Mirpur, Dhaka-1216</p>
                  </div>
                </div>
              </li>
              <li className="text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 flex-shrink-0 text-[#0b6b31]" />
                  <div>
                    <span className="font-medium text-[#222]">Factory</span>
                    <p>15/1, Barabag, Mirpur, Dhaka-1216</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 pt-1">
                <FiPhone className="flex-shrink-0 text-[#0b6b31]" />
                <a href="tel:+88028931851" className="hover:text-[#0b6b31] transition-colors">
                  +880-2-8931851
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <FiMail className="flex-shrink-0 text-[#0b6b31]" />
                <a href="mailto:info@newlife.com.bd" className="hover:text-[#0b6b31] transition-colors">
                  info@newlife.com.bd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[#0b6b31]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
          <p>&copy; {currentYear} NewLife. All rights reserved.</p>
          <p>Serving since 1948</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
