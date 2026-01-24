import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "Piano Lessons", desc: "Technique, expression & sight reading", img: "/piano.jpg" },
  { title: "Drums Lessons", desc: "Groove, rhythm & coordination", img: "/drums1.jpg" },
  { title: "Guitar Lessons", desc: "Chords, strumming & soloing", img: "/guitar.jpg" },
  { title: "Tabla Lessons", desc: "Traditional Indian percussion mastery", img: "/tabla2.jpg" },
  { title: "Music Theory", desc: "Harmony, notation & composition", img: "/theory.jpg" },
];

const journeys = {
  "Piano Lessons": [
    { phase: "Beginner", title: "Basics", desc: "Finger placement, posture & key recognition", level: 1 },
    { phase: "Beginner", title: "Reading Notes", desc: "Treble & bass clef fundamentals", level: 1 },
    { phase: "Intermediate", title: "Hand Coordination", desc: "Independence & two-hand playing", level: 2 },
    { phase: "Intermediate", title: "Advanced Pieces", desc: "Classical & contemporary repertoire", level: 2 },
    { phase: "Advanced", title: "Performance", desc: "Stage presence & interpretation", level: 3 },
    { phase: "Mastery", title: "Mastery", desc: "Virtuoso technique & personal style", level: 4 },
  ],
  "Guitar Lessons": [
    { phase: "Beginner", title: "Chord Basics", desc: "Open chords & finger strength", level: 1 },
    { phase: "Beginner", title: "Strumming Patterns", desc: "Rhythm & timing exercises", level: 1 },
    { phase: "Intermediate", title: "Scales & Solos", desc: "Lead techniques & improvisation", level: 2 },
    { phase: "Intermediate", title: "Song Learning", desc: "Full song arrangements & covers", level: 2 },
    { phase: "Advanced", title: "Live Playing", desc: "Performance skills & confidence", level: 3 },
    { phase: "Mastery", title: "Mastery", desc: "Advanced soloing & composition", level: 4 },
  ],
  "Drums Lessons": [
    { phase: "Beginner", title: "Stick Control", desc: "Grip, rebound & rudiments", level: 1 },
    { phase: "Beginner", title: "Basic Grooves", desc: "Rock, pop & basic patterns", level: 1 },
    { phase: "Intermediate", title: "Timing & Tempo", desc: "Metronome work & consistency", level: 2 },
    { phase: "Intermediate", title: "Fills & Breaks", desc: "Dynamic transitions & creativity", level: 2 },
    { phase: "Advanced", title: "Live Playing", desc: "Band coordination & improvisation", level: 3 },
    { phase: "Mastery", title: "Mastery", desc: "Complex polyrhythms & signature style", level: 4 },
  ],
  "Tabla Lessons": [
    { phase: "Beginner", title: "Bol Basics", desc: "Fundamental syllables & sounds", level: 1 },
    { phase: "Beginner", title: "Hand Technique", desc: "Proper stroke & tonal clarity", level: 1 },
    { phase: "Intermediate", title: "Taal Structures", desc: "Rhythmic cycles & patterns", level: 2 },
    { phase: "Intermediate", title: "Advanced Compositions", desc: "Traditional kaidas & relas", level: 2 },
    { phase: "Advanced", title: "Accompaniment", desc: "Supporting vocal & instrumental music", level: 3 },
    { phase: "Mastery", title: "Mastery", desc: "Solo performance & gharana mastery", level: 4 },
  ],
  "Music Theory": [
    { phase: "Beginner", title: "Notation", desc: "Reading & writing music", level: 1 },
    { phase: "Beginner", title: "Scales", desc: "Major, minor & modes", level: 1 },
    { phase: "Intermediate", title: "Chords", desc: "Triads, 7ths & extensions", level: 2 },
    { phase: "Intermediate", title: "Harmony", desc: "Chord progressions & voice leading", level: 2 },
    { phase: "Advanced", title: "Composition", desc: "Songwriting & arranging", level: 3 },
    { phase: "Mastery", title: "Mastery", desc: "Advanced analysis & orchestration", level: 4 },
  ],
};

const levelColors = {
  1: { // Beginner – soft antique gold
    bg: "bg-gradient-to-br from-[#d4af37]/10 to-transparent",
    border: "border-[#d4af37]/40",
    text: "text-[#e6c75f]",
    glow: "shadow-[0_0_20px_rgba(212,175,55,0.25)]",
    badgeBg: "bg-[#d4af37]/15",
    badgeBorder: "border-[#d4af37]/30",
    line: "bg-[#d4af37]/30"
  },

  2: { // Intermediate – richer gold
    bg: "bg-gradient-to-br from-[#e6c75f]/12 to-transparent",
    border: "border-[#e6c75f]/45",
    text: "text-[#f0d878]",
    glow: "shadow-[0_0_25px_rgba(230,199,95,0.3)]",
    badgeBg: "bg-[#e6c75f]/18",
    badgeBorder: "border-[#e6c75f]/35",
    line: "bg-[#e6c75f]/35"
  },

  3: { // Advanced – deep royal gold
    bg: "bg-gradient-to-br from-[#f5dd90]/14 to-transparent",
    border: "border-[#f5dd90]/55",
    text: "text-[#f5dd90]",
    glow: "shadow-[0_0_30px_rgba(245,221,144,0.4)]",
    badgeBg: "bg-[#f5dd90]/22",
    badgeBorder: "border-[#f5dd90]/45",
    line: "bg-[#f5dd90]/45"
  },

  4: { // Mastery – signature luxe highlight
    bg: "bg-gradient-to-br from-[#ffd966]/20 to-transparent",
    border: "border-[#ffd966]/70",
    text: "text-[#ffd966]",
    glow: "shadow-[0_0_45px_rgba(255,217,102,0.6)]",
    badgeBg: "bg-[#ffd966]/28",
    badgeBorder: "border-[#ffd966]/60",
    line: "bg-gradient-to-r from-[#ffd966] via-[#f5dd90] to-[#ffd966]"
  },
};



// Journey Component
const JourneySection = ({ service, hoveredStep, setHoveredStep }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="overflow-hidden col-span-full"
  >
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-black/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gold/20 shadow-2xl shadow-black/40 backdrop-blur-sm relative overflow-hidden mt-4"
    >
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/5 to-transparent rounded-tl-full" />
      
      <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10">
        <motion.h3
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-heading text-gold mb-2 sm:mb-3"
        >
          Your Journey to Mastery
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-amber-200/80 text-base sm:text-lg"
        >
          {service}
        </motion.p>
      </div>

      {/* Desktop Journey Timeline */}
      <div className="hidden md:block relative">
        <div className="relative">
          {/* CONNECTING LINE */}
          <div
  className="
    absolute
    top-[68.2px]
    left-0 right-0
    h-[2px]
    bg-gradient-to-r
    from-[#d4af37]/20
    via-[#ffd966]/60
    to-[#d4af37]/20
    z-0
  "
/>

          
          <div className="flex justify-between items-start relative z-10">
            {journeys[service].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                onHoverStart={() => setHoveredStep(i)}
                onHoverEnd={() => setHoveredStep(null)}
                className="flex flex-col items-center relative group"
                style={{ width: `${100 / journeys[service].length}%` }}
              >
                {/* Phase Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className={`text-xs font-semibold mb-3 px-3 py-1 rounded-full ${levelColors[step.level].badgeBg} ${levelColors[step.level].badgeBorder} border ${levelColors[step.level].text}`}
                >
                  {step.phase}
                </motion.div>

                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full border-3 
                    ${levelColors[step.level].border} ${levelColors[step.level].bg}
                    flex items-center justify-center
                    transition-all duration-300 cursor-pointer backdrop-blur-sm
                    ${hoveredStep === i ? `shadow-xl ${levelColors[step.level].glow}` : 'shadow-lg shadow-black/30'}`}
                >
                  <span className={`text-xl lg:text-2xl font-bold ${levelColors[step.level].text}`}>
                    {i + 1}
                  </span>
                  
                  {/* Pulse Effect on Hover */}
                  {hoveredStep === i && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full ${levelColors[step.level].border} border-2`}
                    />
                  )}
                </motion.div>

                {/* Step Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="mt-4 sm:mt-5 md:mt-6 text-center max-w-[120px] sm:max-w-[140px]"
                >
                  <h4 className={`font-semibold text-sm md:text-base mb-1 md:mb-2 ${levelColors[step.level].text} group-hover:text-amber-300 transition-colors`}>
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Subtle Hover Glow */}
                <AnimatePresence>
                  {hoveredStep === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`absolute top-12 w-24 h-24 lg:w-32 lg:h-32 rounded-full blur-2xl ${levelColors[step.level].bg} -z-10`}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Journey Stack */}
      <div className="md:hidden space-y-4 relative z-10">
        {journeys[service].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex items-start gap-3 sm:gap-4 p-4 rounded-xl border ${levelColors[step.level].border} ${levelColors[step.level].bg} backdrop-blur-sm shadow-lg`}
          >
            {/* Mobile Step Circle */}
            <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 ${levelColors[step.level].border} ${levelColors[step.level].bg} flex items-center justify-center shadow-md`}>
              <span className={`text-lg sm:text-xl font-bold ${levelColors[step.level].text}`}>{i + 1}</span>
            </div>

            {/* Mobile Content */}
            <div className="flex-1">
              <div className={`inline-block text-xs font-semibold mb-1 px-2 py-0.5 rounded-full ${levelColors[step.level].badgeBg} ${levelColors[step.level].badgeBorder} border ${levelColors[step.level].text}`}>
                {step.phase}
              </div>
              <h4 className={`font-semibold text-sm sm:text-base mb-1 ${levelColors[step.level].text}`}>
                {step.title}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default function Services() {
  const [activeService, setActiveService] = useState("Piano Lessons");
  const [hoveredStep, setHoveredStep] = useState(null);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="scroll-mt-20 bg-[#0b0b0f] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-heading text-gold mb-8 sm:mb-10 md:mb-12 text-center">
          Music Lessons Offered
        </h2>

        {/* Mobile: Each card with its journey below */}
        <div className="md:hidden space-y-6">
          {services.map((s) => (
            <div key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(activeService === s.title ? null : s.title)}
                className={`group relative cursor-pointer rounded-xl border 
                  ${activeService === s.title ? "border-gold shadow-xl shadow-gold/30" : "border-gold/20"}
                  bg-black/40 overflow-hidden transition-all duration-300
                  hover:border-gold/60 hover:shadow-xl hover:shadow-gold/20`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-40 sm:h-44 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl text-gold mb-2 group-hover:text-amber-300 transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{s.desc}</p>
                </div>
                {activeService === s.title && (
                  <motion.div
                    layoutId="activeIndicatorMobile"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-400 to-gold"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>

              {/* Journey appears right after clicked card on mobile */}
              <AnimatePresence mode="wait">
                {activeService === s.title && (
                  <JourneySection 
                    key={s.title}
                    service={s.title} 
                    hoveredStep={hoveredStep} 
                    setHoveredStep={setHoveredStep} 
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop: Grid layout with journey below all cards */}
        <div className="hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => setActiveService(activeService === s.title ? null : s.title)}
                className={`group relative cursor-pointer rounded-xl border 
                  ${activeService === s.title ? "border-gold shadow-xl shadow-gold/30" : "border-gold/20"}
                  bg-black/40 overflow-hidden transition-all duration-300
                  hover:-translate-y-2 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/20`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl text-gold mb-2 group-hover:text-amber-300 transition-colors">{s.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{s.desc}</p>
                </div>
                {activeService === s.title && (
                  <motion.div
                    layoutId="activeIndicatorDesktop"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-400 to-gold"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Journey Section for Desktop - appears below all cards */}
            <AnimatePresence mode="wait">
              {activeService && (
                <JourneySection 
                  key={activeService}
                  service={activeService} 
                  hoveredStep={hoveredStep} 
                  setHoveredStep={setHoveredStep} 
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => scrollToSection("book")}
  className="
    w-full sm:w-auto
    bg-yellow-500 hover:bg-yellow-400
    text-sm sm:text-base md:text-lg uppercase
    text-black
    px-6 sm:px-8 py-3 sm:py-4
    rounded-full
    flex items-center justify-center gap-2
    transition-all duration-300
    mt-5 cursor-pointer
  "
>
  <span>Book a free trial</span>
  <ion-icon name="arrow-forward-outline"></ion-icon>
</button>
      </div>
    </section>
  );
}