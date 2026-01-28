import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaLeaf } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f5f1] via-white to-[#e5f0e7] flex items-center justify-center px-4 py-12">
      {/* Decorative Elements */}
      <motion.div
        className="fixed top-10 right-10 text-[#0b6b31]/5 text-[200px] sm:text-[300px] pointer-events-none"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf />
      </motion.div>
      <motion.div
        className="fixed bottom-0 left-0 w-64 h-64 bg-[#0b6b31]/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <motion.img
              src={logo}
              alt="New Life Logo"
              className="w-48 mx-auto mb-4"
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 text-sm mt-2">Sign in to continue to your account</p>
        </div>

        {/* Login Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6b31]/20 focus:border-[#0b6b31] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#0b6b31] focus:ring-[#0b6b31]"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-[#0b6b31] hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-[#0b6b31] text-white font-medium rounded-xl hover:bg-[#095228] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <motion.button
              type="button"
              className="w-full py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FcGoogle className="text-xl" />
              <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#0b6b31] font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-[#0b6b31] transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
