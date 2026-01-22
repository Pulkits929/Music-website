import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-dark-section py-20">
      <div className="max-w-8xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12">
        <h2 className="text-4xl font-heading text-center mb-16
                         bg-gold
                         bg-clip-text text-transparent">
            What Students & Parents Say
          </h2>

        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {testimonials.map((t, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                layout
                onClick={() =>
                  setActiveIndex(isActive ? null : i)
                }
                className={`cursor-pointer
                  min-w-[320px] max-w-[320px]
                  rounded-2xl p-6
                  border transition-all
                  ${
                    isActive
                      ? "bg-[#16161d] border-gold"
                      : "bg-[#121218] border-white/10"
                  }`}
              >
                {/* QUOTE */}
                <div className="text-4xl text-white/10 mb-3">“</div>

                {/* TEXT */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {isActive ? t.full : t.short}
                  {!isActive && (
                    <span className="text-gold ml-1">more</span>
                  )}
                </p>

                {/* SPACER */}
                <div className="h-6" />

                {/* USER */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center
                                text-white font-semibold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {t.role}
                    </p>
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
