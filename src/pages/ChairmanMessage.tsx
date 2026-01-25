import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import chairmanImg from "../assets/chairman.png";

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
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const ChairmanMessage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const messageInView = useInView(messageRef, { once: true, margin: "-100px" });

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
              <GiHealing className="text-white" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">Leadership</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Chairman Message
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              A message from our leadership
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

      {/* Message Section - Matching Reference Design */}
      <section ref={messageRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left - Text Content (3 cols on lg) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={messageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Welcome Text */}
              <motion.span
                className="text-[#0b6b31] italic text-base sm:text-lg mb-4 block"
                initial={{ opacity: 0 }}
                animate={messageInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                Welcome
              </motion.span>

              {/* Main Heading */}
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={messageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                A Place Of Healing, Peace, And Wellness.
              </motion.h2>

              {/* Two Column Paragraphs */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={messageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="space-y-4">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    New Life is dedicated to providing the public with medications of high quality, safety and efficacy through product developing, manufacturing and marketing.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Our medicines are safe and more than ever in line with healthcare needs. It is therefore an ethical duty to make homeopathy known as it becomes more and more efficient and widely used.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Our goal is to pursue the health and happy life of people; spreading the health culture between human and science.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We are excited about plans to continue the growth of our organization. We look forward to further improvements and a continued commitment to providing the best in our local community.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We are continuing our policy of innovation by further strengthening our research efforts; the entire senior management team is full of enthusiasm for the exciting years ahead.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Thank you to all for having faith in us.
                  </p>
                </div>
              </motion.div>

              {/* Signature Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={messageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Chairman</h4>
                {/* Signature line - styled as a simple decorative element */}
                <div className="w-24 sm:w-32 h-8 sm:h-10 relative">
                  <svg viewBox="0 0 120 40" className="w-full h-full text-gray-400">
                    <path
                      d="M5 30 Q 20 10, 40 25 T 80 20 Q 100 15, 115 25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Chairman Image */}
            <motion.div
              className="lg:col-span-2 mt-6 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={messageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl bg-[#f8faf8]"
                initial={{ opacity: 0, y: 20 }}
                animate={messageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={chairmanImg}
                  alt="Chairman - New Life"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="absolute top-0 left-0 sm:left-4 text-[#0b6b31]/10 text-4xl sm:text-5xl md:text-6xl" />
            <FaQuoteRight className="absolute bottom-0 right-0 sm:right-4 text-[#0b6b31]/10 text-4xl sm:text-5xl md:text-6xl" />

            <div className="py-8 sm:py-10 px-4 sm:px-12">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                "Our goal is to pursue the health and happy life of people; spreading the health culture between human and science."
              </p>
              <div className="mt-6">
                <span className="text-[#0b6b31] font-semibold text-sm sm:text-base">— Chairman, New Life</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Join Us in Our <span className="text-[#0b6b31]">Mission</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Together, we can continue to provide quality healthcare solutions and make a positive impact on people's lives.
            </p>
            <motion.a
              href="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#0b6b31] text-white font-medium rounded-full hover:bg-[#095228] transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GiHealing className="text-lg" />
              Explore Our Products
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;
