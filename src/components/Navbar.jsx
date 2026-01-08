import { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Book Lesson", id: "book" },
  { label: "Contact", id: "contact" },
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
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <nav
  className={`fixed w-full z-50 transition-all duration-300 transform
    ${
      scrolled
        ? "bg-black/90 backdrop-blur shadow-lg scale-[1.02]"
        : "bg-transparent scale-100"
    }`}
>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          onClick={() => handleScroll("home")}
          className="font-heading text-2xl text-gold cursor-pointer"
        >
          Music Academy
        </h1>

        <ul className="hidden md:flex gap-8 text-base">

          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`cursor-pointer transition relative
                ${
                  activeSection === item.id
                    ? "text-gold"
                    : "text-gray-300 hover:text-gold"
                }`}
            >
              {item.label}

              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
