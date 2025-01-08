import React from "react";
import { motion } from "framer-motion";

const ResponsiveMenu = ({ showMenu, navLinks, handleScroll, activeSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-20 left-0 right-0 backdrop-blur-lg bg-white/90 dark:bg-black/90 ${
        showMenu ? "block" : "hidden"
      }`}
    >
      <div className="container mx-auto px-4">
        <ul className="py-4 space-y-2">
          {navLinks.map(({ id, name, link }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: id * 0.1 }}
              className="border-b border-gray-200 dark:border-gray-700 last:border-none"
            >
              <a
                href={`#${link}`}
                onClick={(e) => handleScroll(e, link)}
                className={`block py-3 px-4 text-lg font-medium transition-colors duration-300 ${
                  activeSection === link
                    ? 'text-gradient-custom'
                    : 'hover:text-gradient-custom'
                }`}
              >
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ResponsiveMenu;
