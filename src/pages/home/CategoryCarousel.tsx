import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import {
  GiMortar,
  GiMedicines,
  GiPowder,
  GiBottleVapors,
  GiOilDrum,
  GiTeapot,
  GiPill,
  GiDroplets,
  GiTestTubes,
  GiHealing,
} from "react-icons/gi";
import { FaCapsules, FaFlask, FaChevronLeft, FaChevronRight, FaLeaf } from "react-icons/fa";
import { TbBottle } from "react-icons/tb";

import "swiper/css";

import { Autoplay } from "swiper/modules";

interface SubCategory {
  name: string;
  icon: React.ReactNode;
  parentCategory: string;
}

const subcategories: SubCategory[] = [
  // Ayurvedic
  { name: "Churna", icon: <GiPowder />, parentCategory: "Ayurvedic" },
  { name: "Vati & Gutika", icon: <GiPill />, parentCategory: "Ayurvedic" },
  { name: "Asava & Arishta", icon: <GiBottleVapors />, parentCategory: "Ayurvedic" },
  { name: "Tailam", icon: <GiOilDrum />, parentCategory: "Ayurvedic" },
  { name: "Rasayana", icon: <GiHealing />, parentCategory: "Ayurvedic" },
  // Homeo
  { name: "Mother Tincture", icon: <GiDroplets />, parentCategory: "Homeo" },
  { name: "Dilution", icon: <FaFlask />, parentCategory: "Homeo" },
  { name: "Bio-Chemic", icon: <GiTestTubes />, parentCategory: "Homeo" },
  { name: "NL Series", icon: <GiMedicines />, parentCategory: "Homeo" },
  // Unani
  { name: "Majun", icon: <GiMortar />, parentCategory: "Unani" },
  { name: "Habbe", icon: <GiPill />, parentCategory: "Unani" },
  { name: "Sharbat", icon: <TbBottle />, parentCategory: "Unani" },
  { name: "Roghan", icon: <GiOilDrum />, parentCategory: "Unani" },
  // Herbal
  { name: "Herbal Juice", icon: <GiBottleVapors />, parentCategory: "Herbal" },
  { name: "Herbal Capsules", icon: <FaCapsules />, parentCategory: "Herbal" },
  { name: "Herbal Tea", icon: <GiTeapot />, parentCategory: "Herbal" },
  { name: "Herbal Syrup", icon: <TbBottle />, parentCategory: "Herbal" },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

const CategoryCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 px-4 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e5f0e7] via-[#d8e8dc] to-[#cce0d1]" />

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-[#0b6b31]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#2e3191]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Leaf Pattern - Top Right */}
      <motion.div
        className="absolute top-10 right-10 text-[#0b6b31]/10 text-7xl lg:text-8xl hidden md:block"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>

      {/* Leaf Pattern - Bottom Left */}
      <motion.div
        className="absolute bottom-10 left-10 text-[#0b6b31]/10 text-6xl lg:text-7xl hidden md:block rotate-180"
        animate={{ rotate: [180, 190, 180] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with accent line */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-[10px] sm:text-xs md:text-sm font-medium rounded-full mb-2 sm:mb-3"
            whileHover={{ scale: 1.05 }}
          >
            Explore Categories
          </motion.span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222] mb-2 sm:mb-3">
            Browse by <span className="text-[#0b6b31]">Category</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Discover our wide range of traditional medicine categories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
              1280: { slidesPerView: 6, spaceBetween: 24 },
            }}
            className="category-swiper"
          >
            {subcategories.map((subcat, index) => (
              <SwiperSlide key={`${subcat.parentCategory}-${subcat.name}`}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                >
                  <Link
                    to={`/products/${subcat.parentCategory}`}
                    className="block"
                  >
                    <div className="group relative bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                      {/* Hover Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0b6b31] to-[#0b6b31]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.div
                          className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-xl bg-[#0b6b31]/10 group-hover:bg-white/20 flex items-center justify-center text-2xl sm:text-3xl text-[#0b6b31] group-hover:text-white transition-all duration-300"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {subcat.icon}
                        </motion.div>
                        <h3 className="font-medium text-sm text-center leading-tight text-[#222] group-hover:text-white transition-colors duration-300">
                          {subcat.name}
                        </h3>
                        <span className="block text-xs mt-1 text-center text-[#2e3191] group-hover:text-white/80 transition-colors duration-300">
                          {subcat.parentCategory}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Navigation Buttons */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#0b6b31] flex items-center justify-center text-[#0b6b31] hover:bg-[#0b6b31] hover:text-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </motion.button>
          <motion.button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#0b6b31] flex items-center justify-center text-[#0b6b31] hover:bg-[#0b6b31] hover:text-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
