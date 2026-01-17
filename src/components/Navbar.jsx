import { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Portfolio", id: "portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">

        {/* LOGO */}
        <div
          onClick={() => handleScroll("home")}
          className="cursor-pointer"
        >
          <img
            src="/golden_logo-Photoroom.png"
            alt="Music Academy"
            className="w-32"
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
            <button
              whileHover={{ scale: 1.05 }}
              
              onClick={() => handleScroll("book")}
              className="ml-4 px-6 py-2 rounded-xl
              bg-gradient-to-r from-gold to-yellow-500
              text-black font-semibold
              shadow-md shadow-gold/30
              hover:shadow-lg hover:shadow-gold/50
              hover:scale-105 transition-all duration-300"
            >
              Book Lesson
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
