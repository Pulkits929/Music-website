import { motion } from "framer-motion";

const services = [
  { title: "Piano Lessons", desc: "Technique, expression & sight reading" },
  { title: "Drums Lessons", desc: "Groove, rhythm & coordination" },
  { title: "Tabla Lessons", desc: "Traditional Indian percussion mastery" },
  { title: "Music Theory", desc: "Harmony, notation & composition" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-15 bg-black py-20">
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
          className="grid md:grid-cols-4 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="border border-gold/30 p-6 rounded-xl"
            >
              <h3 className="text-xl text-gold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
