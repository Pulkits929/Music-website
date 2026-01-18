import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";




const services = [
  { title: "Piano Lessons", desc: "Technique, expression & sight reading",img:"/piano.jpg" },
  { title: "Drums Lessons", desc: "Groove, rhythm & coordination", img:"/drums1.jpg" },
  { title: "Guitar Lessons", desc: "Chords, strumming & soloing", img:"/guitar.jpg" },
  { title: "Tabla Lessons", desc: "Traditional Indian percussion mastery", img:"/tabla.png" },
  { title: "Music Theory", desc: "Harmony, notation & composition", img:"/theory.jpg" },
  
];

const journeys = {
  "Piano Lessons": [
    "Keyboard Basics",
    "Reading Notes",
    "Hand Coordination",
    "Advanced Pieces",
    "Performance",
    "Mastery",
  ],
  "Guitar Lessons": [
    "Chord Basics",
    "Strumming Patterns",
    "Scales & Solos",
    "Song Learning",
    "Live Playing",
    "Mastery",
  ],
  "Drums Lessons": [
    "Stick Control",
    "Basic Grooves",
    "Timing & Tempo",
    "Fills & Breaks",
    "Live Playing",
    "Mastery",
  ],
  "Tabla Lessons": [
    "Bol Basics",
    "Hand Technique",
    "Taal Structures",
    "Advanced Compositions",
    "Accompaniment",
    "Mastery",
  ],
  "Music Theory": [
    "Notation",
    "Scales",
    "Chords",
    "Harmony",
    "Composition",
    "Mastery",
  ],
};


export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleSelect = (title) => {
    setActiveService((prev) => (prev === title ? null : title));
  };
  return (
    <section id="services" className="scroll-mt-5 bg-gradient-to-b from-[#0b0b0f] via-black/50 to-black/0 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading text-gold mb-12 text-center">
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
          className="grid md:grid-cols-5 gap-6"
        >
          {services.map((s) => (
            <motion.div
            key={s.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setActiveService(s.title)}
            className={`group relative cursor-pointer rounded-xl border 
              ${activeService === s.title ? "border-gold" : "border-gold/20"}
              bg-black/40 overflow-hidden transition-all duration-300
              hover:-translate-y-2 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/20`}
          >
          
          
              <div>
                <img src={s.img} alt="" className="mt-0 p-0 rounded-t-xl " />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
  {activeService && (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 bg-black/50 rounded-2xl p-10 border border-gold/20"
    >
      <h3 className="text-3xl text-gold text-center mb-10">
        Your Journey to Mastery — {activeService}
      </h3>

      <div className="relative flex items-center justify-between">
        {/* Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gold/30 -z-10" />

        {journeys[activeService].map((step, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-black border-2 border-gold 
                            flex items-center justify-center text-gold font-bold">
              {i + 1}
            </div>
            <p className="mt-3 text-sm text-gray-300 max-w-[90px]">
              {step}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
