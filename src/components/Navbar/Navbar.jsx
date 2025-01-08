import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "home"
  },
  {
    id: 2,
    name: "CARS",
    link: "cars"
  },
  {
    id: 3,
    name: "SERVICES",
    link: "services"
  },
  {
    id: 4,
    name: "ABOUT",
    link: "about"
  },
  {
    id: 5,
    name: "CONTACT",
    link: "contact"
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = Navlinks.map(link => link.link);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setShowMenu(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 dark:bg-black/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="text-3xl font-bold bg-gradient-custom bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Premium Cars
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                >
                  <a
                    href={`#${link}`}
                    onClick={(e) => handleScroll(e, link)}
                    className={`relative text-lg font-medium transition-colors duration-300 py-2 group ${
                      activeSection === link ? 'text-gradient-custom' : 'hover:text-gradient-custom'
                    }`}
                  >
                    {name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-custom transition-all duration-300 ${
                      activeSection === link ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                </motion.li>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-gradient-custom bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? (
                    <BiSolidSun className="text-2xl text-yellow-400" />
                  ) : (
                    <BiSolidMoon className="text-2xl text-slate-700" />
                  )}
                </motion.button>
              </motion.div>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle for Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gradient-custom bg-opacity-20"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <BiSolidSun className="text-2xl text-yellow-400" />
              ) : (
                <BiSolidMoon className="text-2xl text-slate-700" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-full bg-gradient-custom bg-opacity-20"
              aria-label={showMenu ? "Close menu" : "Open menu"}
            >
              {showMenu ? (
                <HiMenuAlt1 className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <ResponsiveMenu 
            showMenu={showMenu} 
            navLinks={Navlinks} 
            handleScroll={handleScroll}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
