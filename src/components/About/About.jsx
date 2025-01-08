import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaAward, FaClock, FaHeadset } from 'react-icons/fa';
import CarPng from "../../assets/car-hero.png.jpg";

const features = [
  {
    icon: <FaCar />,
    title: "Premium Fleet",
    description: "Luxury vehicles maintained to perfection"
  },
  {
    icon: <FaAward />,
    title: "Quality Service",
    description: "Award-winning customer experience"
  },
  {
    icon: <FaClock />,
    title: "24/7 Availability",
    description: "Round-the-clock support and service"
  },
  {
    icon: <FaHeadset />,
    title: "Personal Assistant",
    description: "Dedicated concierge for every client"
  }
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="relative group">
                {/* Image Container with Glass Effect */}
                <div className="glass-card rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-custom opacity-10"></div>
                  <img
                    src={CarPng}
                    alt="Luxury Car"
                    className="w-full rounded-3xl h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 transform -translate-x-1/2 w-[90%] sm:w-4/5"
                >
                  <div className="glass-card rounded-2xl p-3 sm:p-4 grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-gradient-custom">500+</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Premium Cars</div>
                    </div>
                    <div className="text-center border-x border-gray-200 dark:border-gray-700">
                      <div className="text-lg sm:text-2xl font-bold text-gradient-custom">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-gradient-custom">99%</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6 sm:space-y-8"
            >
              {/* Section Header */}
              <div className="space-y-4 text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                >
                  Elevating Your <span className="text-gradient-custom">Journey</span>
                </motion.h2>
                <div className="h-1 w-20 bg-gradient-custom rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Main Text */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                  Welcome to <span className="font-semibold text-gradient-custom">Premium Car Rentals</span>, 
                  where luxury meets innovation. We've reimagined the car rental experience by combining 
                  cutting-edge technology with unparalleled service.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                  Our commitment goes beyond providing vehicles – we create experiences. From executive 
                  travel to special celebrations, our service guarantees excellence at every turn.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="glass-effect rounded-2xl p-4 text-center sm:text-left"
                  >
                    <div className="text-xl sm:text-2xl text-gradient-custom mb-2 sm:mb-3 flex justify-center sm:justify-start">
                      {feature.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-custom text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Fleet
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 glass-effect text-gradient-custom rounded-xl font-semibold transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;