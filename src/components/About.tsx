import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/home/about.jpg";
import img2 from "../assets/home/about2.jpg";
import img3 from "../assets/home/about3.jpg";
import { Avatar } from "antd";
import { FaLeaf } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      // Floating animation for orbit avatars
      gsap.to(".orbit-avatar", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.3,
          from: "random",
        },
      });

      // Rotate rings slowly
      gsap.to(".orbit-ring-1", {
        rotation: 360,
        duration: 60,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".orbit-ring-2", {
        rotation: -360,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8faf8] to-[#f0f5f1]" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-[#0b6b31]/5 rounded-full -translate-x-1/2 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-64 h-64 bg-[#2e3191]/5 rounded-full translate-x-1/2 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Leaf Pattern - Top Left */}
      <motion.div
        className="absolute top-10 left-10 text-[#0b6b31]/5 text-8xl lg:text-9xl hidden md:block"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>

      {/* Leaf Pattern - Bottom Right */}
      <motion.div
        className="absolute bottom-10 right-10 text-[#0b6b31]/5 text-7xl lg:text-8xl hidden md:block rotate-180"
        animate={{ rotate: [180, 185, 180, 175, 180] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Side */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center py-8 sm:py-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div
              ref={imageRef}
              style={{
                position: "relative",
                width: 360,
                height: 360,
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="scale-[0.7] sm:scale-[0.85] md:scale-100"
            >
              {/* Rings */}
              <div
                className="orbit-ring-1"
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  border: "2px dashed #d9d9d9",
                  width: 350,
                  height: 350,
                }}
              />
              <div
                className="orbit-ring-2"
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  border: "2px dashed #d9d9d9",
                  width: 500,
                  height: 500,
                }}
              />

              {/* Center Avatar */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Avatar
                  size={250}
                  src={img2}
                  style={{ zIndex: 5 }}
                />
              </motion.div>

              {/* Orbit Avatars */}
              <Avatar
                size={80}
                src={img3}
                className="orbit-avatar"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  top: -64,
                  left: "12%",
                  transform: "translateX(-50%)",
                }}
              />

              <Avatar
                size={50}
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="orbit-avatar"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  right: -10,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />

              <Avatar
                size={90}
                src={img}
                className="orbit-avatar"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  bottom: -40,
                  left: "105%",
                  transform: "translateX(-50%)",
                }}
              />

              <Avatar
                size={65}
                src="https://randomuser.me/api/portraits/men/76.jpg"
                className="orbit-avatar"
                style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  left: -32,
                  top: "95%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            ref={textRef}
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              className="inline-block text-[#0b6b31] text-xs sm:text-sm font-medium mb-3 sm:mb-4"
              variants={itemVariants}
            >
              Welcome to
            </motion.span>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              the popular and famous homoeopathic treatment center of Bangladesh
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2"
              variants={itemVariants}
            >
              New Life & Co. (Pvt) Ltd. is the pioneer in Homoeopathic
              Pharmaceuticals & Health center in Bangladesh. It was established
              by eminent <strong>Doctor S. Motaher Ali</strong>.
            </motion.p>

            <motion.p
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2"
              variants={itemVariants}
            >
              In 1948 he established the popular and famous homoeopathic
              treatment center of Bangladesh, the "New Life Pharmacy". Then in
              1961, he established the first homoeopathic medicine manufacturing
              industry, the "New Life & Co. (Pvt) Ltd".
            </motion.p>
            <motion.p
              className="text-gray-600 text-sm sm:text-base leading-relaxed"
              variants={itemVariants}
            >
              In 2003, Doctor S. Motaher Ali established the "New Life
              Foundation" for the purpose of human wellbeing and for the
              research work on homoeopathy. This foundation is also engaged in
              the publication of different books written on Homoeopathy and
              Unani treatment. It also publishes a magazine on Homoeopathy,
              Unani and Ayurvedic science and social health care, which is
              named <strong>"New Life Barta"</strong>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
