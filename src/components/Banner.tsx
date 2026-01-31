import React from 'react';
import { Button, Carousel } from 'antd';
import { motion } from 'framer-motion';
import banner1 from '../assets/home/banner1.png';
import banner2 from '../assets/home/banner2.png';
import banner3 from '../assets/home/banner3.jpg';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
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
      ease: [0.25, 0.4, 0.25, 1] as const,
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
    <div className="text-center pt-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center max-w-4xl mx-auto">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-thin text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariants}
      >
        Natural <span className='font-semibold'>Healing</span>
      </motion.h1>
      <motion.p
        className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariants}
      >
        Discover the power of traditional remedies.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
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
          className="!bg-[#0b6b31] hover:!bg-[#095228] !border-none !rounded-full !px-4 sm:!px-5 md:!px-6 lg:!px-8 !h-8 sm:!h-9 md:!h-10 lg:!h-12 !text-xs sm:!text-sm md:!text-base !font-medium"
        >
          Read More
        </Button>
      </motion.div>
    </div>
  </div>
);

const Banner: React.FC = () => (
  <div>
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
      <div>
        <div className="relative overflow-hidden h-screen">
          <motion.img
            src={banner1}
            alt="banner"
            style={{height: "100%"}}
            className="w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-black/60 h-screen" />
          <BannerContent />
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden h-screen">
          <motion.img
            src={banner2}
            alt="banner"
              style={{height: "100%"}}
            className="w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <BannerContent />
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden h-screen">
          <motion.img
            src={banner3}
            alt="banner"
              style={{height: "100%"}}
            className="w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <BannerContent />
        </div>
      </div>
    </Carousel>
  </div>
);

export default Banner;
