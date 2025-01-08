import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGasPump, FaCog, FaTachometerAlt, FaUsers, FaSuitcase, FaCalendarAlt, FaCheck, FaArrowLeft, FaChargingStation, FaBatteryFull, FaWifi, FaList, FaDollarSign, FaClock, FaCalendarWeek, FaRegCalendarAlt } from 'react-icons/fa';
import { IoSpeedometer, IoFlash, IoStatsChart } from 'react-icons/io5';

const CarDetails = ({ car, onBack, onBookNow }) => {
  const [selectedTab, setSelectedTab] = useState('specs');

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-gradient-custom font-semibold mb-6 sm:mb-8 group hover:scale-105 transition-all duration-300"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Cars
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Image and Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Car Image */}
              <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8">
                <div className="relative aspect-[4/3] sm:aspect-video">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center">
                  <IoFlash className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gradient-custom mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">{car.performance}</p>
                </div>
                <div className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center">
                  <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gradient-custom mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">{car.capacity}</p>
                </div>
                <div className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center">
                  <FaChargingStation className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gradient-custom mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">{car.specs.fuelType}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Car Header */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  <span className="text-gradient-custom">{car.name}</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                  Experience the future of automotive luxury
                </p>
              </div>

              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { id: 'specs', icon: <IoStatsChart />, label: 'Specs' },
                  { id: 'features', icon: <FaList />, label: 'Features' },
                  { id: 'pricing', icon: <FaDollarSign />, label: 'Pricing' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selectedTab === tab.id
                        ? 'bg-gradient-custom text-white shadow-lg'
                        : 'glass-effect text-gray-700 dark:text-gray-300 hover:scale-105'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Sections */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                {/* Specifications Tab */}
                {selectedTab === 'specs' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                  >
                    <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <FaBatteryFull className="w-6 h-6 sm:w-8 sm:h-8 text-gradient-custom mb-2 sm:mb-3" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Range</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">400+ miles</p>
                    </div>
                    <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <IoSpeedometer className="w-6 h-6 sm:w-8 sm:h-8 text-gradient-custom mb-2 sm:mb-3" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Top Speed</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">155 mph</p>
                    </div>
                    <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <FaWifi className="w-6 h-6 sm:w-8 sm:h-8 text-gradient-custom mb-2 sm:mb-3" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Connectivity</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">5G Built-in</p>
                    </div>
                    <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <FaSuitcase className="w-6 h-6 sm:w-8 sm:h-8 text-gradient-custom mb-2 sm:mb-3" />
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Cargo Space</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{car.luggage}</p>
                    </div>
                  </motion.div>
                )}

                {/* Features Tab */}
                {selectedTab === 'features' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                  >
                    {car.features.map((feature, index) => (
                      <div key={index} className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-custom flex items-center justify-center">
                          <FaCheck className="text-white text-xs sm:text-sm" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Pricing Tab */}
                {selectedTab === 'pricing' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                      <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                        <FaClock className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-gradient-custom mb-2 sm:mb-3" />
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Daily</h3>
                        <p className="text-2xl sm:text-3xl font-bold text-gradient-custom">${car.price}</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">Per Day</p>
                      </div>
                      <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform scale-105 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-custom text-white text-xs px-3 sm:px-4 py-1 rounded-full">
                          Popular
                        </div>
                        <FaCalendarWeek className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-gradient-custom mb-2 sm:mb-3" />
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Weekly</h3>
                        <p className="text-2xl sm:text-3xl font-bold text-gradient-custom">${car.price * 6}</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">Per Week</p>
                      </div>
                      <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                        <FaRegCalendarAlt className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-gradient-custom mb-2 sm:mb-3" />
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Monthly</h3>
                        <p className="text-2xl sm:text-3xl font-bold text-gradient-custom">${car.price * 25}</p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">Per Month</p>
                      </div>
                    </div>

                    <button 
                      onClick={onBookNow}
                      className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-custom text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
