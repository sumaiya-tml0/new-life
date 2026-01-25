import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
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

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Life Launches Innovative Herbal Wellness Products",
    excerpt: "New Life introduces a new range of herbal wellness products designed to promote holistic health and well-being for the modern lifestyle.",
    date: "January 15, 2025",
    category: "Product Launch",
  },
  {
    id: 2,
    title: "Annual Health Camp Successfully Organized",
    excerpt: "The New Life Foundation organized its annual free health camp, providing medical consultations and medicines to over 500 people in rural areas.",
    date: "December 20, 2024",
    category: "Community",
  },
  {
    id: 3,
    title: "New Life Receives Quality Excellence Award",
    excerpt: "New Life & Co. has been recognized with the Quality Excellence Award for its commitment to maintaining the highest standards in traditional medicine manufacturing.",
    date: "November 10, 2024",
    category: "Achievement",
  },
  {
    id: 4,
    title: "Expansion of Manufacturing Facility Announced",
    excerpt: "New Life announces plans to expand its manufacturing facility to meet growing demand for traditional medicine products across Bangladesh.",
    date: "October 5, 2024",
    category: "Company News",
  },
  {
    id: 5,
    title: "Partnership with Research Institute for Clinical Studies",
    excerpt: "New Life Foundation partners with leading research institutes to conduct clinical studies on the efficacy of traditional medicine formulations.",
    date: "September 18, 2024",
    category: "Research",
  },
  {
    id: 6,
    title: "New Life Barta Magazine Celebrates 50th Issue",
    excerpt: "The flagship publication of New Life Foundation celebrates its 50th issue, marking five decades of spreading knowledge about traditional medicine.",
    date: "August 25, 2024",
    category: "Publication",
  },
];

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "Traditional Medicine Seminar 2025",
    description: "A comprehensive seminar on the latest developments in Homoeopathy, Unani, and Ayurvedic medicine systems.",
    date: "February 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Dhaka Medical Convention Center",
    type: "Seminar",
  },
  {
    id: 2,
    title: "Free Health Camp - Gazipur",
    description: "Free medical consultation and distribution of medicines to underprivileged communities.",
    date: "March 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Gazipur Community Center",
    type: "Health Camp",
  },
  {
    id: 3,
    title: "Herbal Medicine Workshop",
    description: "Hands-on workshop on preparing herbal remedies for common ailments using traditional methods.",
    date: "March 20, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "New Life Training Center, Dhaka",
    type: "Workshop",
  },
  {
    id: 4,
    title: "Annual General Meeting 2025",
    description: "Annual meeting of New Life stakeholders to discuss company progress and future plans.",
    date: "April 10, 2025",
    time: "11:00 AM - 2:00 PM",
    location: "New Life Head Office, Dhaka",
    type: "Corporate",
  },
];

interface NewsCardProps {
  news: NewsItem;
  index: number;
  isInView: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index, isInView }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-[#0b6b31] to-[#095228] overflow-hidden flex-shrink-0 flex items-center justify-center">
          <motion.div
            className="text-white/20 text-5xl sm:text-6xl"
            whileHover={{ scale: 1.1 }}
          >
            <BsNewspaper />
          </motion.div>
          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium rounded-full">
            {news.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
            <FaCalendarAlt />
            <span>{news.date}</span>
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-[#0b6b31] transition-colors line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 flex-grow">
            {news.excerpt}
          </p>

          {/* Read More Link */}
          <motion.a
            href="#"
            className="mt-4 inline-flex items-center gap-2 text-[#0b6b31] text-xs sm:text-sm font-medium hover:gap-3 transition-all"
            whileHover={{ x: 5 }}
          >
            Read More
            <FaArrowRight className="text-xs" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

interface EventCardProps {
  event: EventItem;
  index: number;
  isInView: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, index, isInView }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row">
        {/* Date Box */}
        <div className="bg-[#0b6b31] text-white p-4 sm:p-6 flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:min-w-[100px]">
          <div className="text-2xl sm:text-3xl font-bold">{event.date.split(" ")[1]?.replace(",", "")}</div>
          <div className="text-xs sm:text-sm uppercase">{event.date.split(" ")[0]}</div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-[#0b6b31]/10 text-[#0b6b31] text-[10px] sm:text-xs font-medium rounded-full">
              {event.type}
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-[#0b6b31] transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-3 text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <FaClock className="text-[#0b6b31]" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-[#0b6b31]" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NewsEvents: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const newsRef = useRef<HTMLElement>(null);
  const eventsRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const newsInView = useInView(newsRef, { once: true, margin: "-100px" });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

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
          <BsNewspaper />
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
              <span className="text-white/90 text-xs sm:text-sm font-medium">Stay Updated</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              News & Events
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Stay informed about the latest happenings, announcements, and upcoming events at New Life
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

      {/* Latest News Section */}
      <section ref={newsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Latest Updates
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Latest <span className="text-[#0b6b31]">News</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Read about our latest achievements, product launches, and community initiatives
            </p>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsItems.map((news, index) => (
              <NewsCard
                key={news.id}
                news={news}
                index={index}
                isInView={newsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section ref={eventsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Mark Your Calendar
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Upcoming <span className="text-[#0b6b31]">Events</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Join us at our upcoming events, seminars, and health camps
            </p>
          </motion.div>

          {/* Events List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                isInView={eventsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#0b6b31] to-[#095228] rounded-3xl p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaLeaf className="text-white text-2xl" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
              Get the latest news, event updates, and health tips delivered directly to your inbox.
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
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
                alt="Contact Us"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b6b31]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Get In Touch</h3>
                <p className="text-white/80 text-sm">We'd love to hear from you</p>
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
                Have a <span className="text-[#0b6b31]">Story</span> to Share?
              </h2>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  We welcome news tips, event suggestions, and stories about how New Life products have helped you or your community.
                </p>
                <p>
                  Contact our communications team to share your experience or inquire about partnering with us for health camps and events.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <motion.a
                  href="#"
                  className="px-5 sm:px-6 py-2.5 bg-[#0b6b31] text-white text-sm font-medium rounded-full hover:bg-[#095228] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/company-profile"
                  className="px-5 sm:px-6 py-2.5 border-2 border-[#0b6b31] text-[#0b6b31] text-sm font-medium rounded-full hover:bg-[#0b6b31] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
