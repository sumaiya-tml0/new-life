import React from 'react';
import { Button, Carousel } from 'antd';
import { motion } from 'framer-motion';
import banner1 from '../assets/home/banner1.png';
import banner2 from '../assets/home/banner2.png';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.95 },
};

const BannerContent: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="text-center pt-32 sm:pt-40 md:pt-48 lg:pt-60 px-4 md:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin text-white mb-3 sm:mb-4 md:mb-6"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariants}
      >
        Natural <span className='font-semibold'>Healing</span>
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariants}
      >
        Discover the power of traditional remedies.
        <br />
        Trusted wellness solutions since 1948.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <Button
          type="primary"
          size="large"
          className="!bg-[#0b6b31] hover:!bg-[#095228] !border-none !rounded-full !px-5 sm:!px-6 md:!px-8 !h-9 sm:!h-10 md:!h-12 !text-xs sm:!text-sm md:!text-base !font-medium"
        >
          Read More
        </Button>
      </motion.div>
    </div>
  </div>
);

const Banner: React.FC = () => (
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
    <div>
      <div className="relative overflow-hidden">
        <motion.img
          src={banner1}
          alt="banner"
          className="m-0 min-h-[70vh] sm:min-h-[80vh] md:h-screen w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <BannerContent />
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden">
        <motion.img
          src={banner2}
          alt="banner"
          className="m-0 min-h-[70vh] sm:min-h-[80vh] md:h-screen w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <BannerContent />
      </div>
    </div>
  </Carousel>
);

export default Banner;
