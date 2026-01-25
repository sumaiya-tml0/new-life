import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import director1Img from "../assets/director_1.jpg";
import director2Img from "../assets/director_2.jpg";
import director3Img from "../assets/director_3.jpg";
import director4Img from "../assets/director_4.jpg";
import director5Img from "../assets/director_5.jpg";

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

interface Director {
  id: number;
  name: string;
  designation: string;
  description: string;
  image?: string;
}

const directors: Director[] = [
  {
    id: 1,
    name: "Dr. S. M. Nurul Hoque",
    designation: "Managing Director",
    description: "Dr. S. M. Nurul Hoque, Managing Director of the New Life & Co. (Pvt.) Ltd. He is the leading industrialist in the Traditional Medicine (Herbal Medicine) sector. He is actively engaged in development activity of Homoeopathic, Unani, Ayurvedic Medicine System. He is the member of Bangladesh Homoeopathic Pharmacopoeia committee. Connected with Bangladesh Unani Aushad Shilpa Samity as Vice-President & Federation of Bangladesh Chamber of Commerce and Industry (FBCCI). He has visited Herbal Industries of Malaysia, Indonesia, Australia, Pakistan, India & Singapore and trained in Traditional Medicine from China and Iran. He is also associated with Bangladesh Red Crescent Society, Bangladesh Poribesh Andolon and Rotary Club of Dhaka North-East.",
    image: director1Img,
  },
  {
    id: 2,
    name: "S. M. Shamsul Haque",
    designation: "Director",
    description: "Mr. S. M. Shamsul Hoque, Executive Director of the New Life & Co. (Pvt.) Ltd. He is a young entrepreneur in the Traditional Medicine sector. He is devoted to developing New Life Company for the ailing people and nourishing the Traditional Medicine sector. Socially, he is actively involved with different educational and social organizations. He has visited different Herbal Industries of India, Pakistan, China, Singapore, Malaysia, Indonesia & Iran.",
    image: director2Img,
  },
  {
    id: 3,
    name: "Dr. S. M. Enamul Huq",
    designation: "Director",
    description: "Dr. S. M. Enamul Hoque, Director of the New Life & Co. (Pvt.) Ltd. He is an entrepreneur of Homoeopathic, Cosmetics & Food industries and also an established Homeo Practitioner. He is actively engaged with different social and educational organizations and has visited India several times to observe Homoeopathic and Unani pharmaceutical development.",
    image: director3Img,
  },
  {
    id: 4,
    name: "S. M. Rezaul Haque",
    designation: "Director",
    description: "S. M. Rezaul Hoque, son of late Dr. S. Motaher Ali, is the Director of New Life & Co. (Pvt.) Ltd. He is the co-ordinator of Traditional Homoeopathic Pharmacy of Bangladesh, the 'New Life Pharmacy' of Dhaka Govt. New Market. He is also a devoted social thinker and activist of Dhaka city.",
    image: director4Img,
  },
  {
    id: 5,
    name: "S. M. Ataul Huq",
    designation: "Director",
    description: "Dr. S. M. Ataul Hoque, son of late Dr. S. Motaher Ali, is the Director of New Life & Co. (Pvt.) Ltd. He is the chief physician of the renowned Homoeopathic Pharmacy of the country, the 'New Life Pharmacy' of Dhaka Govt. New Market.",
    image: director5Img,
  },
];

interface DirectorCardProps {
  director: Director;
  index: number;
  isInView: boolean;
}

const DirectorCard: React.FC<DirectorCardProps> = ({ director, index, isInView }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-[#f0f5f1] to-[#e5f0e7] overflow-hidden flex-shrink-0">
          {director.image ? (
            <img
              src={director.image}
              alt={director.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0b6b31]/10 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <BsBuilding className="text-[#0b6b31] text-3xl sm:text-4xl" />
              </motion.div>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#0b6b31]/0 group-hover:bg-[#0b6b31]/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 group-hover:text-[#0b6b31] transition-colors">
            {director.name}
          </h3>
          <p className="text-[#0b6b31] text-xs sm:text-sm font-medium mb-2">
            {director.designation}
          </p>
          <p className="text-gray-600 text-xs leading-relaxed line-clamp-4 flex-grow">
            {director.description}
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
            <motion.a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0b6b31] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-sm" />
            </motion.a>
            <motion.a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0b6b31] hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-sm" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BoardOfDirectors: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const directorsRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const directorsInView = useInView(directorsRef, { once: true, margin: "-100px" });

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
              <span className="text-white/90 text-xs sm:text-sm font-medium">Our Leadership</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Board of Directors
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Meet the visionary leaders guiding New Life towards excellence
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

      {/* Directors Grid Section */}
      <section ref={directorsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={directorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Leadership Team
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Our <span className="text-[#0b6b31]">Directors</span>
            </h2>
          </motion.div>

          {/* Directors Grid - 5 cards layout */}
          {/* First row: 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {directors.slice(0, 3).map((director, index) => (
              <DirectorCard
                key={director.id}
                director={director}
                index={index}
                isInView={directorsInView}
              />
            ))}
          </div>

          {/* Second row: 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {directors.slice(3, 5).map((director, index) => (
              <DirectorCard
                key={director.id}
                director={director}
                index={index + 3}
                isInView={directorsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#0b6b31]">Core Values</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              The principles that guide our leadership and organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Upholding the highest ethical standards" },
              { title: "Innovation", desc: "Continuously improving our products" },
              { title: "Quality", desc: "Committed to excellence in everything" },
              { title: "Care", desc: "Prioritizing customer wellbeing" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
                  <FaLeaf className="text-[#0b6b31] text-xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Learn More About <span className="text-[#0b6b31]">New Life</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Discover our history, mission, and commitment to providing quality healthcare solutions.
            </p>
            <motion.a
              href="/company-profile"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#0b6b31] text-white font-medium rounded-full hover:bg-[#095228] transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsBuilding className="text-lg" />
              View Company Profile
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BoardOfDirectors;
