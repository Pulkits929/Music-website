import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "coursedrawer",
  "testimonials",
  "partners",
  "portfolio",
  
  "contact",
];

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px",
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return active;
}
