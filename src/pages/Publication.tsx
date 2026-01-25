import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaBook, FaNewspaper, FaDownload } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { BsJournalMedical } from "react-icons/bs";
import herbsImg from "../assets/home/herb_medicine.jpg";

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

interface Publication {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  year?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Homoeopathic Treatment Guide",
    author: "Dr. S. Motaher Ali",
    description: "A comprehensive guide to homoeopathic treatment methods and practices.",
    category: "Homoeopathy",
    year: "2010",
  },
  {
    id: 2,
    title: "Unani Medicine Fundamentals",
    author: "New Life Foundation",
    description: "Essential knowledge about Unani medicine system and its applications.",
    category: "Unani",
    year: "2012",
  },
  {
    id: 3,
    title: "Ayurvedic Healing Practices",
    author: "New Life Foundation",
    description: "Traditional Ayurvedic healing methods for modern healthcare.",
    category: "Ayurvedic",
    year: "2015",
  },
  {
    id: 4,
    title: "Herbal Remedies Handbook",
    author: "New Life Research Team",
    description: "A collection of effective herbal remedies for common ailments.",
    category: "Herbal",
    year: "2018",
  },
  {
    id: 5,
    title: "Traditional Medicine Research",
    author: "New Life Foundation",
    description: "Research findings and developments in traditional medicine.",
    category: "Research",
    year: "2020",
  },
  {
    id: 6,
    title: "Health & Wellness Guide",
    author: "New Life Foundation",
    description: "Practical guide for maintaining health through natural methods.",
    category: "Wellness",
    year: "2022",
  },
];

interface PublicationCardProps {
  publication: Publication;
  index: number;
  isInView: boolean;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication, index, isInView }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Book Cover Placeholder */}
        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[#0b6b31] to-[#095228] overflow-hidden flex-shrink-0 flex items-center justify-center">
          <motion.div
            className="text-white/20 text-6xl sm:text-7xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <FaBook />
          </motion.div>
          {/* Category Badge */}
          <span className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium rounded-full">
            {publication.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 group-hover:text-[#0b6b31] transition-colors line-clamp-2">
            {publication.title}
          </h3>
          <p className="text-[#0b6b31] text-xs font-medium mb-2">
            {publication.author}
          </p>
          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 flex-grow">
            {publication.description}
          </p>
          {publication.year && (
            <p className="text-gray-400 text-xs mt-2">Published: {publication.year}</p>
          )}

          {/* Action Button */}
          <motion.button
            className="mt-4 w-full py-2 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-lg hover:bg-[#0b6b31] hover:text-white transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload className="text-xs" />
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Publication: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const magazineRef = useRef<HTMLElement>(null);
  const booksRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const magazineInView = useInView(magazineRef, { once: true, margin: "-100px" });
  const booksInView = useInView(booksRef, { once: true, margin: "-100px" });

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
          <FaBook />
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
              <BsJournalMedical className="text-white" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">New Life Foundation</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Publications
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Explore our collection of books, magazines, and research publications on traditional medicine
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

      {/* Magazine Section - New Life Barta */}
      <section ref={magazineRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={magazineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span
                className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Featured Magazine
              </motion.span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                <span className="text-[#0b6b31]">New Life Barta</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  New Life Barta is our flagship magazine dedicated to spreading knowledge about Homoeopathy, Unani, Ayurvedic science, and social health care.
                </p>
                <p>
                  Published by the New Life Foundation, this magazine serves as a comprehensive resource for practitioners, students, and anyone interested in traditional medicine systems.
                </p>
                <p>
                  Each issue features articles on treatment methods, research findings, health tips, and updates from the world of alternative medicine.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <motion.button
                  className="px-5 sm:px-6 py-2.5 bg-[#0b6b31] text-white text-sm font-medium rounded-full hover:bg-[#095228] transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaNewspaper />
                  Subscribe Now
                </motion.button>
                <motion.button
                  className="px-5 sm:px-6 py-2.5 border-2 border-[#0b6b31] text-[#0b6b31] text-sm font-medium rounded-full hover:bg-[#0b6b31] hover:text-white transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  View Archive
                </motion.button>
              </div>
            </motion.div>

            {/* Right - Magazine Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={magazineInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0b6b31] to-[#095228] p-8 sm:p-12"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaNewspaper className="text-white text-4xl sm:text-5xl" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">New Life Barta</h3>
                    <p className="text-white/70 text-sm sm:text-base mb-4">Magazine on Traditional Medicine</p>
                    <div className="flex justify-center gap-4 text-white/60 text-xs sm:text-sm">
                      <span>Homoeopathy</span>
                      <span>•</span>
                      <span>Unani</span>
                      <span>•</span>
                      <span>Ayurvedic</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-xl p-3 sm:p-4"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={magazineInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
                      <FaBook className="text-[#0b6b31] text-lg sm:text-xl" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-[#0b6b31]">50+</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Issues Published</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section ref={booksRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={booksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Our Library
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Books & <span className="text-[#0b6b31]">Publications</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our collection of books on Homoeopathy, Unani, and traditional medicine
            </p>
          </motion.div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {publications.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
                isInView={booksInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={herbsImg}
                alt="Research"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b6b31]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Research & Development</h3>
                <p className="text-white/80 text-sm">Advancing traditional medicine through scientific research</p>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Contributing to <span className="text-[#0b6b31]">Medical Research</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  The New Life Foundation is actively engaged in research work on homoeopathy and traditional medicine systems. Our publications reflect decades of research and practical experience.
                </p>
                <p>
                  We collaborate with medical professionals, researchers, and institutions to advance the understanding and application of traditional medicine in modern healthcare.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { number: "50+", label: "Research Papers" },
                  { number: "20+", label: "Books Published" },
                  { number: "75+", label: "Years Experience" },
                  { number: "100+", label: "Contributors" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-[#f8faf8] rounded-xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#0b6b31]">{stat.number}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#0b6b31] to-[#095228]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Stay Updated with Our Publications
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Subscribe to receive the latest issues of New Life Barta and updates on new publications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                className="px-6 py-3 bg-white text-[#0b6b31] font-medium rounded-full hover:bg-gray-100 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publication;
