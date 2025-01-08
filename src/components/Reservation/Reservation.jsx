import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaShieldAlt, FaBabyCarriage, FaWifi, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const additionalServices = [
  {
    id: 1,
    name: "Insurance Coverage",
    icon: <FaShieldAlt />,
    price: 25,
    description: "Full coverage insurance for peace of mind"
  },
  {
    id: 2,
    name: "Child Seat",
    icon: <FaBabyCarriage />,
    price: 15,
    description: "Safe and comfortable child seat"
  },
  {
    id: 3,
    name: "Mobile WiFi",
    icon: <FaWifi />,
    price: 10,
    description: "Stay connected during your journey"
  }
];

const locations = [
  "Airport Terminal 1",
  "Airport Terminal 2",
  "City Center",
  "Central Station",
  "Hotel Zone"
];

const Reservation = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: ""
  });

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const basePrice = 199; // Base price per day
    const servicesTotal = selectedServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
    return basePrice + servicesTotal;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-gradient-custom">Premium Reservation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Experience luxury at every step of your journey
            </p>
          </motion.div>

          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <form className="space-y-6 sm:space-y-8">
              {/* Progress Steps */}
              <div className="hidden sm:flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-custom flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Step 1</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                  </div>
                </div>
                <div className="flex-1 mx-4 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-custom flex items-center justify-center">
                    <FaCalendarAlt className="text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Step 2</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Schedule</p>
                  </div>
                </div>
                <div className="flex-1 mx-4 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-custom flex items-center justify-center">
                    <FaCreditCard className="text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Step 3</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Payment</p>
                  </div>
                </div>
              </div>

              {/* Mobile Progress Steps */}
              <div className="flex sm:hidden justify-center space-x-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-gradient-custom"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gradient-custom text-lg" />
                      <select
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        className="glass-effect w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl"
                      >
                        <option value="">Select pickup location</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Drop-off Location
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gradient-custom text-lg" />
                      <select
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleInputChange}
                        className="glass-effect w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl"
                      >
                        <option value="">Select drop-off location</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Dates and Times */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Pickup Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      <div className="relative">
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gradient-custom text-lg" />
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          className="glass-effect w-full pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl"
                        />
                      </div>
                      <div className="relative">
                        <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gradient-custom text-lg" />
                        <input
                          type="time"
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          className="glass-effect w-full pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">
                      Drop-off Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      <div className="relative">
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gradient-custom text-lg" />
                        <input
                          type="date"
                          name="dropoffDate"
                          value={formData.dropoffDate}
                          onChange={handleInputChange}
                          className="glass-effect w-full pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl"
                        />
                      </div>
                      <div className="relative">
                        <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gradient-custom text-lg" />
                        <input
                          type="time"
                          name="dropoffTime"
                          value={formData.dropoffTime}
                          onChange={handleInputChange}
                          className="glass-effect w-full pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    Premium Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {additionalServices.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleServiceToggle(service.id)}
                        className={`cursor-pointer rounded-xl sm:rounded-2xl transition-all duration-300 ${
                          selectedServices.includes(service.id)
                            ? 'bg-gradient-custom shadow-lg'
                            : 'glass-effect'
                        }`}
                      >
                        <div className="p-4 sm:p-6">
                          <div className={`text-xl sm:text-2xl mb-3 sm:mb-4 ${
                            selectedServices.includes(service.id)
                              ? 'text-white'
                              : 'text-gradient-custom'
                          }`}>
                            {service.icon}
                          </div>
                          <h3 className={`font-semibold text-base sm:text-lg mb-1 sm:mb-2 ${
                            selectedServices.includes(service.id)
                              ? 'text-white'
                              : 'text-gray-800 dark:text-white'
                          }`}>
                            {service.name}
                          </h3>
                          <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${
                            selectedServices.includes(service.id)
                              ? 'text-white/90'
                              : 'text-gray-600 dark:text-gray-300'
                          }`}>
                            {service.description}
                          </p>
                          <div className={`flex items-center justify-between ${
                            selectedServices.includes(service.id)
                              ? 'text-white'
                              : 'text-gray-800 dark:text-white'
                          }`}>
                            <span className="text-sm sm:text-base font-bold">${service.price}/day</span>
                            {selectedServices.includes(service.id) && (
                              <FaCheckCircle className="text-white text-lg" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                    Reservation Summary
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-600 dark:text-gray-300">Base Rate</span>
                      <span className="font-semibold text-gray-800 dark:text-white">$199</span>
                    </div>
                    {selectedServices.map(serviceId => {
                      const service = additionalServices.find(s => s.id === serviceId);
                      return (
                        <div key={serviceId} className="flex justify-between items-center text-sm sm:text-base">
                          <span className="text-gray-600 dark:text-gray-300">{service.name}</span>
                          <span className="font-semibold text-gray-800 dark:text-white">${service.price}</span>
                        </div>
                      );
                    })}
                    <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">Total</span>
                        <span className="text-xl sm:text-2xl font-bold text-gradient-custom">
                          ${calculateTotal()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-custom text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Complete Reservation
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
