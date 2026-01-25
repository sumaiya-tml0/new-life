import React from "react";
import { motion } from "framer-motion";
import { Link, useRouteError, isRouteErrorResponse } from "react-router";
import { Button } from "antd";
import { FaHome, FaLeaf, FaExclamationTriangle } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  let errorCode = "404";
  let errorMessage = "Page Not Found";
  let errorDescription = "The page you're looking for doesn't exist or has been moved.";

  if (isRouteErrorResponse(error)) {
    errorCode = String(error.status);
    if (error.status === 404) {
      errorMessage = "Page Not Found";
      errorDescription = "The page you're looking for doesn't exist or has been moved.";
    } else if (error.status === 500) {
      errorMessage = "Server Error";
      errorDescription = "Something went wrong on our end. Please try again later.";
    } else {
      errorMessage = error.statusText || "An Error Occurred";
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#f8faf8] via-[#f0f5f1] to-[#e5f0e7] flex items-center justify-center px-4">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-[#0b6b31]/10 rounded-full -translate-x-1/2 blur-3xl"
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
        className="absolute bottom-20 right-0 w-64 h-64 bg-[#2e3191]/10 rounded-full translate-x-1/2 blur-3xl"
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

      {/* Floating Leaves */}
      <motion.div
        className="absolute top-10 right-10 text-[#0b6b31]/10 text-6xl md:text-8xl"
        animate={{
          rotate: [0, 10, 0, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10 text-[#0b6b31]/10 text-5xl md:text-7xl rotate-180"
        animate={{
          rotate: [180, 190, 180, 170, 180],
          y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg">
        {/* Animated Icon */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white shadow-xl flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 10px 40px rgba(11, 107, 49, 0.1)",
                "0 10px 60px rgba(11, 107, 49, 0.2)",
                "0 10px 40px rgba(11, 107, 49, 0.1)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaExclamationTriangle className="text-5xl md:text-6xl text-[#0b6b31]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Error Code */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-[#0b6b31] mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {errorCode}
        </motion.h1>

        {/* Error Message */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {errorMessage}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 mb-8 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {errorDescription}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/">
              <Button
                type="primary"
                size="large"
                icon={<FaHome />}
                className="!bg-[#0b6b31] hover:!bg-[#095228] !border-none !rounded-full !px-6 !h-11 !font-medium !flex !items-center !gap-2"
              >
                Back to Home
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/products">
              <Button
                size="large"
                icon={<GiMedicines />}
                className="!border-[#0b6b31] !text-[#0b6b31] hover:!bg-[#0b6b31] hover:!text-white !rounded-full !px-6 !h-11 !font-medium !flex !items-center !gap-2"
              >
                Browse Products
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Medicine Icons */}
        <motion.div
          className="mt-12 flex justify-center gap-4 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            >
              <FaLeaf className="text-2xl text-[#0b6b31]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
