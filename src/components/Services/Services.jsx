import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMoneyBillWave, FaMapMarkedAlt, FaHeadset, FaShieldAlt, FaCalendarCheck } from "react-icons/fa";

const services = [
  {
    icon: <FaCar />,
    title: "Wide Car Selection",
    description: "Choose from our extensive fleet of luxury and premium vehicles."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Best Price Guarantee",
    description: "We offer competitive rates and transparent pricing with no hidden fees."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Flexible Locations",
    description: "Pick up and drop off your vehicle at convenient locations."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description: "Our customer service team is always ready to assist you."
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance Coverage",
    description: "Comprehensive insurance options for peace of mind."
  },
  {
    icon: <FaCalendarCheck />,
    title: "Easy Booking",
    description: "Simple and fast online booking process with instant confirmation."
  }
];

const Services = () => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient-custom">Premium Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
            Experience unparalleled service quality with our premium car rental offerings.
            We ensure your journey is smooth and memorable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 sm:p-8 backdrop-blur-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 bg-gradient-custom text-white rounded-xl sm:rounded-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-custom text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;