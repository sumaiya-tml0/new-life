import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GiMedicines,
  GiLaurelsTrophy,
  GiFactory
} from "react-icons/gi";
import { FaUserMd, FaShieldAlt, FaLeaf, FaTruck } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import bgImage from "../../assets/home/herb_medicine.jpg";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
  index: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
  end,
  suffix = "",
  label,
  icon,
  duration = 2000,
  index
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-white/10 flex items-center justify-center text-2xl sm:text-3xl text-white group-hover:bg-[#2e3191] transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2"
        initial={{ scale: 0.5 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-white/80 text-xs sm:text-sm md:text-base">{label}</div>
    </motion.div>
  );
};

const stats = [
  { end: 76, suffix: "+", label: "Years of Excellence", icon: <GiLaurelsTrophy /> },
  { end: 7, suffix: "k+", label: "Quality Products", icon: <GiMedicines /> },
  { end: 1, suffix: "M+", label: "Practitioners and Families", icon: <FaUserMd /> },
  { end: 10000, suffix: "+", label: "Distributors", icon: <FaTruck /> },
];

const trustBadges = [
  { icon: <FaShieldAlt />, label: "ISO Certified" },
  { icon: <GiFactory />, label: "GMP Approved" },
  { icon: <FaLeaf />, label: "100% Herbal" },
  { icon: <GiLaurelsTrophy />, label: "Award Winning" },
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Stats Section with Background Image */}
      <div
        className="relative py-12 sm:py-16 md:py-20 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <BsStars className="text-white" />
              </motion.div>
              <span className="text-white/90 text-xs sm:text-sm font-medium">Trusted Since 1948</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
              Why Choose New Life?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Bangladesh's pioneer in traditional medicine, delivering quality healthcare for over seven decades
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>

          {/* Trust Badges - Inside Background */}
          <motion.div
            className="border-t border-white/20 pt-8 sm:pt-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-2 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-lg sm:text-xl">{badge.icon}</span>
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
