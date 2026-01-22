import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Shalini Subramanian",
    role: "Parent · Piano",
    initials: "SS",
    color: "bg-purple-500",
    short:
      "Both my daughter and I enrolled for different music classes and we loved the experience.",
    full:
      "Both my daughter and I enrolled for different music classes and we loved the experience. The lessons are structured, the teachers are patient, and progress is visible within weeks. Highly recommended for parents looking for quality music education.",
  },
  {
    name: "Manasi Shah",
    role: "Parent · Drums",
    initials: "MS",
    color: "bg-blue-500",
    short:
      "My 7 year old son has been learning drums for the past 3 months and enjoys every class.",
    full:
      "My 7 year old son has been learning drums for the past 3 months and enjoys every class. The instructor keeps lessons engaging while maintaining discipline and focus. His rhythm and coordination have improved a lot.",
  },
  {
    name: "Sohini Chatterjee",
    role: "Parent · Music Theory",
    initials: "SC",
    color: "bg-teal-500",
    short:
      "I chose Harmonic Studio for my child and never looked back.",
    full:
      "I chose Harmonic Studio for my child and never looked back. The attention to detail, personal feedback, and structured syllabus really stand out. It feels like a premium learning experience.",
  },
  {
    name: "Rohit Mehra",
    role: "Student · Guitar",
    initials: "RM",
    color: "bg-yellow-500",
    short:
      "I finally understand chords and strumming patterns properly.",
    full:
      "I finally understand chords and strumming patterns properly. Earlier I was stuck for years, but the teaching approach here made everything click within a month.",
  },
  {
    name: "Ananya Kapoor",
    role: "Student · Piano",
    initials: "AK",
    color: "bg-pink-500",
    short:
      "Learning piano here has boosted my confidence.",
    full:
      "Learning piano here has boosted my confidence. The teacher focuses equally on technique and musical expression, which makes practice enjoyable.",
  },
  {
    name: "Kunal Verma",
    role: "Student · Drums",
    initials: "KV",
    color: "bg-orange-500",
    short:
      "Grooves and timing finally make sense to me.",
    full:
      "Grooves and timing finally make sense to me. The metronome exercises and live playing techniques are extremely helpful.",
  },
  {
    name: "Neha Iyer",
    role: "Parent · Tabla",
    initials: "NI",
    color: "bg-green-500",
    short:
      "Traditional teaching with a modern approach.",
    full:
      "Traditional teaching with a modern approach. My son enjoys learning tabla while also understanding rhythm theory clearly.",
  },
  {
    name: "Amit Joshi",
    role: "Student · Music Theory",
    initials: "AJ",
    color: "bg-indigo-500",
    short:
      "Music theory is no longer confusing.",
    full:
      "Music theory is no longer confusing. Concepts like harmony and chord progressions are explained very clearly with real examples.",
  },
  {
    name: "Pooja Malhotra",
    role: "Parent · Guitar",
    initials: "PM",
    color: "bg-red-500",
    short:
      "Professional, patient, and very supportive.",
    full:
      "Professional, patient, and very supportive. The teachers ensure that students stay motivated and progress consistently.",
  },
  {
    name: "Arjun Patel",
    role: "Student · Drums",
    initials: "AP",
    color: "bg-cyan-500",
    short:
      "Best decision I made for my musical journey.",
    full:
      "Best decision I made for my musical journey. From basics to advanced techniques, everything is well planned and executed.",
  },
];

export default function Testimonials() {
  const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    let speed = 0.5; // Adjust speed: 0.3 = slow, 1 = faster
    let isPaused = false;

    const startScroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        // Seamless loop reset
        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(startScroll);
    };

    startScroll();

    // Pause on hover
    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="bg-[#0b0b0f] py-20 relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-6">
        {/* HEADER */}
        <h2 className="text-4xl font-heading text-center mb-16
                         bg-gold
                         bg-clip-text text-transparent">
          What Our Students & Parents Say
          </h2>

        {/* HORIZONTAL SCROLL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {loopedTestimonials.map((t, i) => {
            const originalIndex = i % testimonials.length;
            const isActive = activeIndex === originalIndex;

            return (
              <motion.div
                key={i}
                layout
                onClick={() => setActiveIndex(isActive ? null : originalIndex)}
                className={`cursor-pointer flex-shrink-0 w-80 rounded-2xl p-6 border transition-all duration-300 ${
                  isActive
                    ? "bg-gray-800 border-yellow-500"
                    : "bg-gray-900 border-gray-700"
                }`}
              >
                <div className="text-4xl text-gray-700 mb-3">"</div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {t.full}
                </p>

                <div className="h-6" />

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}