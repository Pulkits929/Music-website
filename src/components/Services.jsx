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
  1: { bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", glow: "shadow-gold/20" },
  2: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", glow: "shadow-amber-500/20" },
  3: { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-300", glow: "shadow-yellow-500/20" },
  4: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-300", glow: "shadow-orange-500/20" },
};

export default function Services() {
  const [activeService, setActiveService] = useState("Piano Lessons");
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section id="services" className="scroll-mt-20 bg-[#0b0b0f] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-heading text-gold mb-8 sm:mb-10 md:mb-12 text-center">
          Music Lessons Offered
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
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
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-400 to-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {activeService && (
          <motion.div
            key={activeService}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-12 sm:mt-14 md:mt-16 overflow-hidden"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-black/80 via-black/60 to-black/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gold/20 shadow-2xl shadow-gold/10 backdrop-blur-sm"
            >
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <motion.h3
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-2xl sm:text-2xl md:text-3xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-gold mb-2 sm:mb-3"
                >
                  Your Journey to Mastery
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-amber-200/80 text-base sm:text-lg"
                >
                  {activeService}
                </motion.p>
              </div>

              {/* Desktop Journey Timeline */}
              <div className="hidden md:block relative">
                <div className="relative">
                  
                  
                  <div className="flex justify-between items-start">
                    {journeys[activeService].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        onHoverStart={() => setHoveredStep(i)}
                        onHoverEnd={() => setHoveredStep(null)}
                        className="flex flex-col items-center relative group"
                        style={{ width: `${100 / journeys[activeService].length}%` }}
                      >
                        {/* Phase Label */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.15 + 0.2 }}
                          className={`text-xs font-semibold mb-3 px-2 sm:px-3 py-1 rounded-full ${levelColors[step.level].bg} ${levelColors[step.level].border} border ${levelColors[step.level].text}`}
                        >
                          {step.phase}
                        </motion.div>

                        {/* Step Circle */}
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`relative z-10 w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full border-3 md:border-4 
                            ${levelColors[step.level].border} ${levelColors[step.level].bg}
                            flex items-center justify-center
                            transition-all duration-300 cursor-pointer
                            ${hoveredStep === i ? `shadow-2xl ${levelColors[step.level].glow}` : 'shadow-lg shadow-black/50'}`}
                        >
                          <span className={`text-xl md:text-2xl lg:text-3xl font-bold ${levelColors[step.level].text}`}>
                            {i + 1}
                          </span>
                          
                          {/* Pulse Effect */}
                          {hoveredStep === i && (
                            <motion.div
                              initial={{ scale: 1, opacity: 0.8 }}
                              animate={{ scale: 1.8, opacity: 0 }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className={`absolute inset-0 rounded-full ${levelColors[step.level].border} border-2`}
                            />
                          )}
                        </motion.div>

                        {/* Step Content */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.15 + 0.3 }}
                          className="mt-4 sm:mt-5 md:mt-6 text-center max-w-[120px] sm:max-w-[140px] md:max-w-[160px]"
                        >
                          <h4 className={`font-semibold text-sm md:text-base mb-1 md:mb-2 ${levelColors[step.level].text} group-hover:text-amber-200 transition-colors`}>
                            {step.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {step.desc}
                          </p>
                        </motion.div>

                        {/* Hover Glow Effect */}
                        <AnimatePresence>
                          {hoveredStep === i && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className={`absolute top-8 md:top-12 w-24 h-24 md:w-32 md:h-32 rounded-full blur-3xl ${levelColors[step.level].bg} -z-10`}
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Journey Stack */}
              <div className="md:hidden space-y-4 sm:space-y-6">
                {journeys[activeService].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border ${levelColors[step.level].border} ${levelColors[step.level].bg} backdrop-blur-sm`}
                  >
                    {/* Mobile Step Circle */}
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 ${levelColors[step.level].border} ${levelColors[step.level].bg} flex items-center justify-center shadow-lg ${levelColors[step.level].glow}`}>
                      <span className={`text-lg sm:text-xl font-bold ${levelColors[step.level].text}`}>{i + 1}</span>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1">
                      <div className={`inline-block text-xs font-semibold mb-1 px-2 py-0.5 rounded-full ${levelColors[step.level].text}`}>
                        {step.phase}
                      </div>
                      <h4 className={`font-semibold text-sm sm:text-base mb-1 ${levelColors[step.level].text}`}>
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {step.desc}
                      </p>
                    </div>

                    {/* Connecting Line for Mobile */}
                    {i < journeys[activeService].length - 1 && (
                      <div className={`absolute left-6 sm:left-7 top-14 sm:top-16 w-0.5 h-4 sm:h-6 ${levelColors[step.level].bg}`} />
                    )}
                  </motion.div>
                ))}
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}