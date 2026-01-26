import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { BsTelephone, BsCheckCircleFill } from "react-icons/bs";

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

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Head Office",
    details: [
      "101, Natun Paltan Line Azimpur, Dhaka-1205"
    ],
  },
  {
    icon: <FaPhone />,
    title: "Phone Numbers",
    details: [
      "+880-2-8931851",
      "+880-1711-123456"
    ],
    link: "tel:+88028931851",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    details: [
      "info@newlife.com.bd",
      "support@newlife.com.bd"
    ],
    link: "mailto:info@newlife.com.bd",
  },
  {
    icon: <FaClock />,
    title: "Business Hours",
    details: [
      "Saturday - Thursday",
      "9:00 AM - 6:00 PM",
      "Friday: Closed"
    ],
  },
];

const ContactUs: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <BsTelephone />
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
              <span className="text-white/90 text-xs sm:text-sm font-medium">Get In Touch</span>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              We're here to help. Reach out to us for any inquiries about our products, services, or partnerships.
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

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0b6b31]/10 flex items-center justify-center text-[#0b6b31] text-xl group-hover:bg-[#0b6b31] group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section ref={formRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8faf8] to-[#f0f5f1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Send a Message
              </motion.span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Let's <span className="text-[#0b6b31]">Talk</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0b6b31]/10 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <BsCheckCircleFill className="text-[#0b6b31] text-3xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Thank you for contacting us. We'll respond shortly.
                  </p>
                  <motion.button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2 bg-[#0b6b31] text-white text-sm font-medium rounded-full hover:bg-[#095228] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                      />
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
                        <option value="">Select subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="products">Product Information</option>
                        <option value="orders">Order Status</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="mt-4 w-full py-3 bg-[#0b6b31] text-white text-sm font-medium rounded-full hover:bg-[#095228] transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5877772567!2d90.38439731498!3d23.7294871846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e901a5c0a1%3A0x1a6b4f5bfb0ea71e!2sAzimpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699900000000!5m2!1sen!2sbd"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Life Office Locations"
                  className="w-full h-64 sm:h-80"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Follow us on social media for updates, health tips, and more.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: <FaFacebookF />, label: "Facebook", color: "#1877f2" },
                    { icon: <FaTwitter />, label: "Twitter", color: "#1da1f2" },
                    { icon: <FaLinkedinIn />, label: "LinkedIn", color: "#0077b5" },
                    { icon: <FaYoutube />, label: "YouTube", color: "#ff0000" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                      style={{ "--hover-bg": social.color } as React.CSSProperties}
                      whileHover={{ scale: 1.1, backgroundColor: social.color }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Offices Section */}
      <section ref={mapRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 bg-[#0b6b31]/10 text-[#0b6b31] text-xs sm:text-sm font-medium rounded-full mb-3"
              whileHover={{ scale: 1.05 }}
            >
              Our Locations
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Branch <span className="text-[#0b6b31]">Offices</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Visit our offices across Bangladesh for personalized assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "Head Office",
                address: "101, Natun Paltan Line Azimpur, Dhaka-1205",
                phone: "+880-2-8931851",
              },
              {
                city: "Corporate Office",
                address: "15/3, Barabag, Mirpur, Dhaka-1216",
                phone: "+880-31-123456",
              },
              {
                city: "Factory",
                address: "15/1, Barabag, Mirpur, Dhaka-1216",
                phone: "+880-821-123456",
              },
            ].map((branch, index) => (
              <motion.div
                key={branch.city}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={mapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0b6b31]/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#0b6b31]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{branch.city}</h3>
                    <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-[#0b6b31] text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      <FaPhone className="text-xs" />
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Need Immediate Assistance?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Our customer support team is available during business hours to help you with any queries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:+88028931851"
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#0b6b31] font-medium rounded-full hover:bg-gray-100 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                +880-2-8931851
              </motion.a>
              <motion.a
                href="mailto:info@newlife.com.bd"
                className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#0b6b31] transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                info@newlife.com.bd
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
