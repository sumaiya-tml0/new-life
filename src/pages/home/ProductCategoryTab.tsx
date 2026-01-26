import React, { useState, useRef } from "react";
import { Tabs, ConfigProvider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Grid } from "swiper/modules";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaLeaf } from "react-icons/fa";
import { Link } from "react-router";
import { dummyProducts } from "../../data/products";
import type { Product } from "../../types/product";
import ProductCard from "../../components/products/ProductCard";

import "swiper/css";
import "swiper/css/grid";

const categories = ["Ayurvedic", "Homeo", "Unani", "Herbal"];

interface ProductSwiperProps {
  products: Product[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1.5}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={12}
          loop={products.length > 6}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Grid]}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              grid: { rows: 2, fill: "row" }
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 12,
              grid: { rows: 2, fill: "row" }
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 14,
              grid: { rows: 2, fill: "row" }
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
              grid: { rows: 2, fill: "row" }
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
              grid: { rows: 2, fill: "row" }
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
              grid: { rows: 2, fill: "row" }
            },
          }}
          className="product-category-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} compact />
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatePresence>

      {/* Custom Navigation */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <motion.button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#0b6b31] flex items-center justify-center text-[#0b6b31] hover:bg-[#0b6b31] hover:text-white transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="text-sm" />
        </motion.button>
        <motion.button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#0b6b31] flex items-center justify-center text-[#0b6b31] hover:bg-[#0b6b31] hover:text-white transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="text-sm" />
        </motion.button>
      </div>
    </div>
  );
};

const ProductCategoryTab: React.FC = () => {
  const [activeKey, setActiveKey] = useState("Ayurvedic");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const getProductsByCategory = (category: string) => {
    return dummyProducts.filter((product) => product.category === category);
  };

  const tabItems = categories.map((category) => ({
    key: category,
    label: (
      <span className="px-1 sm:px-2 text-sm sm:text-base font-medium">
        {category === "Homeo" ? "Homeopathic" : category}
      </span>
    ),
    children: <ProductSwiper products={getProductsByCategory(category)} />,
  }));

  return (
    <section ref={sectionRef} className="relative py-10 sm:py-14 px-3 sm:px-4 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf8] via-[#f0f5f1] to-[#f8faf8]" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-[#0b6b31]/5 rounded-full translate-x-1/2 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-64 h-64 bg-[#2e3191]/5 rounded-full -translate-x-1/2 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Leaf Pattern - Top Right */}
      <motion.div
        className="absolute top-10 right-10 text-[#0b6b31]/5 text-9xl hidden lg:block"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-[10px] sm:text-xs md:text-sm font-medium rounded-full mb-2 sm:mb-3"
            whileHover={{ scale: 1.05 }}
          >
            Featured Products
          </motion.span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222] mb-2">
            Our <span className="text-[#0b6b31]">Products</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-2">
            Explore our complete range of traditional medicines
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemColor: "#666",
                  itemHoverColor: "#0b6b31",
                  itemSelectedColor: "#0b6b31",
                  inkBarColor: "#0b6b31",
                  titleFontSize: 14,
                  horizontalItemPadding: "12px 16px",
                },
              },
            }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-white/80">
              <Tabs
                activeKey={activeKey}
                onChange={setActiveKey}
                items={tabItems}
                centered
                size="middle"
                tabBarStyle={{
                  marginBottom: 20,
                }}
                className="product-tabs"
              />
            </div>
          </ConfigProvider>
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/products/${activeKey}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#0b6b31] text-white text-xs sm:text-sm md:text-base font-medium rounded-full hover:bg-[#095228] transition-colors shadow-lg hover:shadow-xl"
            >
              View All {activeKey === "Homeo" ? "Homeopathic" : activeKey} Products
              <FaChevronRight className="text-[10px] sm:text-xs" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoryTab;
