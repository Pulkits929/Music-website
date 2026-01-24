import { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";
import { motion } from "framer-motion";


const navItems = [
  { label: "Home", id: "home" },
  { label: "Know Your Teacher", id: "about" },
  { label: "Courses", id: "services" },
  { label: "Certifications", id: "partners" },
  { label: "Portfolio", id: "testimonials" },
  { label: "Contact", id: "contact" },
  
  
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("home");
  
    if (!heroSection) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCTA(!entry.isIntersecting);
      },
      {
        threshold: 0.3, // hero is considered visible if 30% is in view
      }
    );
  
    observer.observe(heroSection);
  
    return () => observer.disconnect();
  }, []);
  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/90 backdrop-blur shadow-lg"
          : "bg-gradient-to-b from-black/90 via-black/50 to-black/0"
      }`}
    >
      <div className="mx-auto flex items-center justify-between  px-6 md:px-12 lg:px-16 py-3 md:py-4">

        {/* LOGO */}
        <div
          onClick={() => handleScroll("home")}
          className="cursor-pointer flex items-center translate-y-[1px]"
        >
          <img
            src="/golden_logo-Photoroom.png"
            alt="Music Academy"
            className="h-[2.75rem] md:h-12 w-auto object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-base">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative cursor-pointer transition-all duration-300
                ${
                  activeSection === item.id
                    ? "text-gold"
                    : "text-gray-300 hover:text-gold"
                }`}
            >
              {item.label}

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-300
                ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}

          {/* CTA BUTTON */}
          <li>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              onClick={() => handleScroll("book")}
              className="ml-4 cursor-pointer px-6 py-2 rounded-xl
              bg-yellow-500 hover:bg-yellow-400
              text-black font-thin text-md font-semibold
              shadow-md shadow-gold/30
              hover:shadow-lg hover:shadow-gold/50
              hover:scale-105 transition-all duration-300"
            >
              Book Lesson
            </motion.button>
          </li>
        </ul>
      </div>
      {showStickyCTA && (
  <motion.button
    onClick={() => handleScroll("book")}
    whileTap={{ scale: 0.95 }}
    className="fixed top-4 right-4 md:top-6 md:right-8
     px-6 py-2 rounded-xl
    bg-yellow-500 hover:bg-yellow-400
    text-black font-thin text-md font-semibold       
      shadow-md shadow-gold/30
      block md:hidden
      hover:shadow-lg hover:shadow-gold/50
      hover:scale-105 transition-all duration-300              
    z-[999]"
  >
    Book Lesson
  </motion.button>
)}

    </nav>
  );
}
