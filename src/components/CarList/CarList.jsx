import React, { useState } from "react";
import { FaGasPump, FaCog, FaTachometerAlt, FaChargingStation, FaCarSide } from 'react-icons/fa';
import CarDetails from "../CarDetails/CarDetails";
import Reservation from "../Reservation/Reservation";
import { motion } from "framer-motion";

const carList = [
  {
    id: 1,
    name: "Mercedes-Benz EQS",
    price: 299,
    image: "https://rpmweb.ca/medias/Mercedes-Benz-EQS-580-4MATIC-2025-2.JPG",
    specs: {
      mileage: "Electric",
      transmission: "Automatic",
      fuelType: "Electric"
    },
    features: [
      "Hyperscreen Display",
      "Level 3 Autonomous Driving",
      "Massage Seats",
      "AR Head-Up Display",
      "HEPA Air Filtration",
      "4-Zone Climate Control",
      "Burmester 4D Sound",
      "Remote Parking"
    ],
    performance: "0-60 mph in 4.1s",
    capacity: "5 Passengers",
    luggage: "610L Capacity",
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Porsche Taycan",
    price: 349,
    image: "https://file.kelleybluebookimages.com/kbb/base/house/2025/2025-Porsche-Taycan-FrontSide_PSTAY2501_640x480.jpg?downsize=750:*",
    specs: {
      mileage: "Electric",
      transmission: "2-Speed",
      fuelType: "Electric"
    },
    features: [
      "Curved Digital Display",
      "Sport Chrono Package",
      "Adaptive Air Suspension",
      "Performance Battery Plus",
      "Porsche Dynamic Light System",
      "14-Way Sport Seats",
      "Bose Surround Sound",
      "Lane Change Assist"
    ],
    performance: "0-60 mph in 2.6s",
    capacity: "4 Passengers",
    luggage: "407L Capacity",
    aosDelay: "500",
  },
  {
    id: 3,
    name: "BMW iX M60",
    price: 279,
    image: "https://www.annonces-automobile.com/images/data/actualite/2022/03/images/ixm60-3.jpg",
    specs: {
      mileage: "Electric",
      transmission: "Automatic",
      fuelType: "Electric"
    },
    features: [
      "Curved Display",
      "Driving Assistant Pro",
      "Panoramic Sky Lounge",
      "Harman Kardon Sound",
      "5G Connectivity",
      "Comfort Access",
      "Parking Assistant Plus",
      "BMW Natural Interaction"
    ],
    performance: "0-60 mph in 3.6s",
    capacity: "5 Passengers",
    luggage: "500L Capacity",
    aosDelay: "1000",
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    price: 329,
    image: "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c1440-d720/content/medias/images/news/36000/600/10/audi-etron_gt_2.jpg",
    specs: {
      mileage: "Electric",
      transmission: "2-Speed",
      fuelType: "Electric"
    },
    features: [
      "Matrix LED Headlights",
      "Adaptive Air Suspension",
      "Carbon Fiber Roof",
      "Bang & Olufsen Sound",
      "Virtual Cockpit Plus",
      "Sport Seats Pro",
      "360° Camera",
      "Night Vision Assistant"
    ],
    performance: "0-60 mph in 3.1s",
    capacity: "4 Passengers",
    luggage: "405L Capacity",
    aosDelay: "1500",
  },
  {
    id: 5,
    name: "Lucid Air Dream",
    price: 399,
    image: "https://bringatrailer.com/wp-content/uploads/2022/04/198A1586-LowRes-01241-scaled.jpg?fit=940%2C627",
    specs: {
      mileage: "Electric",
      transmission: "Automatic",
      fuelType: "Electric"
    },
    features: [
      "Glass Canopy Roof",
      "DreamDrive Pro",
      "34-inch Curved Display",
      "Dolby Atmos Sound",
      "Executive Seating",
      "Soft-Close Doors",
      "PurLuxe Interior",
      "Wireless Charging"
    ],
    performance: "0-60 mph in 2.5s",
    capacity: "5 Passengers",
    luggage: "739L Capacity",
    aosDelay: "2000",
  },
  {
    id: 6,
    name: "Tesla Model S",
    price: 599,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Tesla_Model_S_(Facelift_ab_04-2016)_trimmed.jpg",
    specs: {
      mileage: "Electric",
      transmission: "Automatic",
      fuelType: "Electric"
    },
    features: [
      "Dual Motor",
      "Dual Motor",
      "Dual Motor",
      "Dual Motor",
      "Dual Motor",
      "Dual Motor",
      "Dual Motor",
      "Dual Motor",
    ],
    performance: "0-60 mph in 3.1s",
    capacity: "5 Passengers",
    luggage: "500L Capacity",
    aosDelay: "2500",
  }
];

const CarList = ({ onViewDetails, onBookNow }) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showReservation, setShowReservation] = useState(false);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setShowReservation(false);
  };

  const handleBookNow = (car) => {
    setSelectedCar(car);
    setShowReservation(true);
  };

  const handleBack = () => {
    setSelectedCar(null);
    setShowReservation(false);
  };

  if (showReservation && selectedCar) {
    return <Reservation car={selectedCar} onBack={handleBack} />;
  }

  if (selectedCar) {
    return <CarDetails car={selectedCar} onBack={handleBack} onBookNow={() => setShowReservation(true)} />;
  }

  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient-custom">Premium Fleet</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
            Experience the future of luxury with our all-electric premium fleet.
            Cutting-edge technology meets unparalleled comfort.
          </p>
        </motion.div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {carList.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Car Image */}
              <div 
                className="relative h-48 sm:h-52 lg:h-56 cursor-pointer overflow-hidden"
                onClick={() => handleCarSelect(car)}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-end">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{car.name}</h3>
                  <div className="text-white">
                    <span className="text-xl sm:text-2xl font-bold">${car.price}</span>
                    <span className="text-xs sm:text-sm">/day</span>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <FaChargingStation className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gradient-custom mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{car.specs.fuelType}</span>
                  </div>
                  <div className="text-center">
                    <FaCarSide className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gradient-custom mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{car.capacity}</span>
                  </div>
                  <div className="text-center">
                    <FaTachometerAlt className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gradient-custom mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{car.performance}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button 
                    onClick={() => handleCarSelect(car)}
                    className="w-full py-2 sm:py-3 px-4 glass-effect text-gray-800 dark:text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => handleBookNow(car)}
                    className="w-full py-2 sm:py-3 px-4 bg-gradient-custom text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect text-gray-800 dark:text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            View All Vehicles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CarList;
