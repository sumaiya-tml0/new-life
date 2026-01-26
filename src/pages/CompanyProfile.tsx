import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaIndustry, FaFlask, FaMedal } from "react-icons/fa";
import { GiMedicines, GiHealing } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import aboutImg from "../assets/home/about.jpg";
import about2Img from "../assets/home/about2.jpg";
import about3Img from "../assets/home/about3.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const CompanyProfile: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const facilityRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const facilityInView = useInView(facilityRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });

  const products = [
    { name: "Mother Tincture", icon: <FaFlask /> },
    { name: "Dilution", icon: <GiMedicines /> },
    { name: "Back Potency", icon: <GiHealing /> },
    { name: "Bio-Chemic", icon: <FaLeaf /> },
    { name: "Trituration Tablet", icon: <GiMedicines /> },
    { name: "Trituration Powder", icon: <FaFlask /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#0b6b31] via-[#0b6b31] to-[#095228]"
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 right-10 text-white/5 text-[150px] sm:text-[200px] md:text-[300px]"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLeaf />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <BsBuilding className="text-white" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">Established 1948</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Company Profile
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Pioneer in Homoeopathic Pharmaceuticals & Health Center in Bangladesh
            </motion.p>
          </motion.div>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Our Story - Bento Grid Section */}
      <section ref={aboutRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Our Story
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Pioneering <span className="text-[#0b6b31]">Healthcare</span> Since 1948
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left - Large Image with Text Overlay */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-lg group min-h-[300px] sm:min-h-[350px] lg:min-h-[450px]"
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={about2Img}
                alt="New Life & Co."
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMedal className="text-white text-sm" />
                  <span className="text-white text-xs font-medium">Pioneer Since 1948</span>
                </motion.div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  New Life & Co. (Pvt) Ltd.
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  The pioneer in Homoeopathic Pharmaceuticals & Health Center in Bangladesh, established by eminent Doctor S. Motaher Ali.
                </p>
              </div>
            </motion.div>

            {/* Right - Three Paragraphs Stacked */}
            <motion.div
              className="flex flex-col gap-4 sm:gap-5"
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                New Life & Co. (Pvt) Ltd. is the pioneer in Homoeopathic Pharmaceuticals & Health Center in Bangladesh. It was established by eminent Doctor S. Motaher Ali. In 1948 he established the popular and famous homoeopathic treatment center of Bangladesh, the "New Life Pharmacy". Then in 1961, he established the first homoeopathic medicine manufacturing industry, the "New Life & Co. (Pvt) Ltd.".
              </p>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                In 2003, Doctor S. Motaher Ali established the "New Life Foundation" for the purpose of human wellbeing and for research work on homoeopathy. This foundation is also engaged in the publication of different books written on Homoeopathy and Unani treatment. It also publishes a magazine on Homoeopathy, Unani and Ayurvedic science and social health care, which is named "New Life Barta".
              </p>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                In 2003, Doctor S. Motaher Ali established the "New Life Foundation" for the purpose of human wellbeing and for research work on homoeopathy. This foundation is also engaged in the publication of different books written on Homoeopathy and Unani treatment. It also publishes a magazine on Homoeopathy, Unani and Ayurvedic science and social health care, which is named "New Life Barta".
              </p>
            </motion.div>
          </div>

          {/* Manufacturing Card */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          
              <div>
                <h4 className="font-semibold text-gray-600 text-xs sm:text-sm leading-relaxed mb-2">Manufacturing Excellence</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  The manufacturing plant of New Life & Co. (Pvt) Ltd. is situated in Mirpur, Dhaka, Bangladesh. The company maintains the manufacturing plant with a team of qualified technical staff including Homoeopathy experts, Unani experts, Chemists, Botanists and Pharmacists. All steps of the manufacturing process are carried out using modern scientific equipment and strictly follow the Good Manufacturing Practices (GMP) of the World Health Organization (WHO).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Campus & Facility Section */}
      <section ref={facilityRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={facilityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Our Infrastructure
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              New Life & Co. <span className="text-[#0b6b31]">Campus</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Campus Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, x: -30 }}
              animate={facilityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={aboutImg}
                alt="New Life Campus"
                className="w-full h-64 sm:h-72 md:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <BsBuilding className="text-lg sm:text-xl" />
                  <span className="font-semibold text-base sm:text-lg">Company Campus</span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  State-of-the-art facilities for research and development
                </p>
              </div>
            </motion.div>

            {/* Manufacturing Facility Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, x: 30 }}
              animate={facilityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={about3Img}
                alt="Manufacturing Facility"
                className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <FaIndustry className="text-lg sm:text-xl" />
                  <span className="font-semibold text-base sm:text-lg">Manufacturing Facility</span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  Modern production units with quality control systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={productsRef}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0b6b31] to-[#095228] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <motion.div
          className="absolute top-0 right-0 text-white/5 text-[200px] md:text-[300px]"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <GiMedicines />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-white/10 text-white text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Our Products
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Homoeopathic Medicines
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              At present, New Life manufactures a wide range of quality homoeopathic medicines
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center group hover:bg-white/20 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                custom={index}
              >
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center text-white text-xl sm:text-2xl group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-white font-medium text-xs sm:text-sm">{product.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-[#f8faf8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Experience the Power of <span className="text-[#0b6b31]">Natural Healing</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join millions of satisfied customers who trust New Life for their healthcare needs.
              Discover our range of traditional medicines today.
            </p>
            <motion.a
              href="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#0b6b31] text-white font-medium rounded-full hover:bg-[#095228] transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GiMedicines className="text-lg" />
              Explore Our Products
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
