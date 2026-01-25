import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaStar, FaQuoteLeft } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { BsChatDots, BsCheckCircleFill } from "react-icons/bs";

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

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  feedback: string;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohammad Rahman",
    location: "Dhaka",
    rating: 5,
    feedback: "I have been using New Life homoeopathic medicines for over 10 years. The quality and effectiveness of their products is unmatched. Highly recommended!",
    product: "Homoeopathic",
  },
  {
    id: 2,
    name: "Fatima Begum",
    location: "Chittagong",
    rating: 5,
    feedback: "New Life's Ayurvedic products have helped me manage my health naturally. Their customer service is also excellent and very helpful.",
    product: "Ayurvedic",
  },
  {
    id: 3,
    name: "Abdul Karim",
    location: "Sylhet",
    rating: 5,
    feedback: "The Unani medicines from New Life are authentic and effective. I trust their products for my family's health needs.",
    product: "Unani",
  },
  {
    id: 4,
    name: "Nasreen Akter",
    location: "Rajshahi",
    rating: 5,
    feedback: "Excellent herbal products! I've seen significant improvement in my overall health since I started using New Life products.",
    product: "Herbal",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isInView: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col p-5 sm:p-6">
        {/* Quote Icon */}
        <div className="text-[#0b6b31]/20 text-3xl mb-3">
          <FaQuoteLeft />
        </div>

        {/* Feedback Text */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
          {testimonial.feedback}
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < testimonial.rating ? "text-yellow-400" : "text-gray-200"}`}
            />
          ))}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-[#0b6b31]/10 flex items-center justify-center">
            <FaUser className="text-[#0b6b31] text-sm" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>
          {testimonial.product && (
            <span className="ml-auto px-2 py-0.5 bg-[#0b6b31]/10 text-[#0b6b31] text-[10px] font-medium rounded-full">
              {testimonial.product}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Feedback: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    rating: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

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
          <BsChatDots />
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
              <span className="text-white/90 text-xs sm:text-sm font-medium">We Value Your Opinion</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Feedback
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Your feedback helps us improve our products and services. Share your experience with us.
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

      {/* Feedback Form Section */}
      <section ref={formRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Share Your Experience
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Send Us Your <span className="text-[#0b6b31]">Feedback</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              We appreciate your thoughts and suggestions. Fill out the form below to share your feedback.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#0b6b31]/10 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <BsCheckCircleFill className="text-[#0b6b31] text-4xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Your feedback has been submitted successfully. We appreciate you taking the time to share your thoughts with us.
              </p>
              <motion.button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", subject: "", message: "", rating: 0 });
                }}
                className="px-6 py-2.5 bg-[#0b6b31] text-white text-sm font-medium rounded-full hover:bg-[#095228] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Another Feedback
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Feedback</option>
                    <option value="service">Service Feedback</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Rating */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rate Your Experience
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="p-1"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaStar
                          className={`text-2xl ${
                            star <= formData.rating ? "text-yellow-400" : "text-gray-200"
                          } transition-colors`}
                        />
                      </motion.button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500 self-center">
                      {formData.rating > 0 ? `${formData.rating} out of 5` : "Click to rate"}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Write your feedback here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="mt-6 w-full sm:w-auto px-8 py-3 bg-[#0b6b31] text-white text-sm font-medium rounded-full hover:bg-[#095228] transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Submit Feedback
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Customer Reviews
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              What Our <span className="text-[#0b6b31]">Customers Say</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Read feedback from our valued customers about their experience with New Life products
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isInView={testimonialsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#0b6b31] to-[#095228] rounded-3xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLeaf className="text-white" />
                  <span className="text-white/90 text-xs sm:text-sm font-medium">Get In Touch</span>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Have Questions?
                </h2>
                <p className="text-white/80 text-sm sm:text-base mb-6 max-w-md mx-auto lg:mx-0">
                  Our customer support team is here to help. Reach out to us for any queries about our products or services.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <motion.a
                    href="tel:+8801234567890"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#0b6b31] text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPhone />
                    Call Us
                  </motion.a>
                  <motion.a
                    href="mailto:info@newlife.com.bd"
                    className="flex items-center gap-2 px-5 py-2.5 border-2 border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-[#0b6b31] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope />
                    Email Us
                  </motion.a>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "10,000+", label: "Happy Customers" },
                  { number: "75+", label: "Years of Trust" },
                  { number: "500+", label: "Products" },
                  { number: "98%", label: "Satisfaction Rate" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
