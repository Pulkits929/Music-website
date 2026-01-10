import { motion } from "framer-motion";

const services = [
  { title: "Piano Lessons", desc: "Technique, expression & sight reading",img:"/piano.jpg" },
  { title: "Drums Lessons", desc: "Groove, rhythm & coordination", img:"/drums1.jpg" },
  { title: "Tabla Lessons", desc: "Traditional Indian percussion mastery", img:"/tabla.png" },
  { title: "Music Theory", desc: "Harmony, notation & composition", img:"/theory.jpg" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-15 bg-gradient-to-b from-[#0b0b0f] via-black/50 to-black/0 py-20">
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
            className="group relative rounded-xl border border-gold/20 
                       bg-black/40 overflow-hidden
                       transition-all duration-300
                       hover:-translate-y-2 
                       hover:border-gold/60
                       hover:shadow-xl hover:shadow-gold/20"
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
    </section>
  );
}
