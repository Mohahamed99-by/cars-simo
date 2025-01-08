import React from "react";
import { motion } from "framer-motion";
import HeroPng from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  return (
    <div className="my-10 relative min-h-[calc(100vh-80px)] flex items-start sm:items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-12 sm:pt-0">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 pt-8 sm:pt-0"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-gradient-custom block sm:inline">Premium Car</span>{" "}
              <span className="text-gray-800 dark:text-white block sm:inline">Rental Service</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Experience luxury and comfort with our premium car rental service. 
              Choose from our wide range of high-end vehicles for your perfect journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-custom text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book a Car
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 glass-effect text-gray-800 dark:text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
              <div className="text-center p-2 sm:p-4 glass-effect rounded-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-custom mb-1 sm:mb-2">500+</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Luxury Cars</p>
              </div>
              <div className="text-center p-2 sm:p-4 glass-effect rounded-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-custom mb-1 sm:mb-2">100%</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Satisfied Clients</p>
              </div>
              <div className="text-center p-2 sm:p-4 glass-effect rounded-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-custom mb-1 sm:mb-2">24/7</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none mx-auto"
          >
            <div className="relative z-10">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={HeroPng}
                alt="Premium Car"
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Decorative circle behind the car */}
            <div className="absolute inset-0 bg-gradient-custom rounded-full filter blur-3xl opacity-20"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1"
          >
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;