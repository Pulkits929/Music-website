import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "My child’s confidence and musical skills improved drastically.",
    author: "Parent of Piano Student",
    image: "/students/piano1.jpeg",
  },
  {
    text: "Structured lessons and excellent teaching style.",
    author: "Guitar Student",
    image: "/students/guitar.jpg",
  },
  {
    text: "Professional, patient, and inspiring teacher.",
    author: "Tabla Learner",
    image: "/students/tabla.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000); // slow & premium
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className=" py-18
      bg-gradient-to-b from-black/0 via-[#0b0b0f] to-black/0"
    >
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <h2 className="text-4xl font-heading text-gold mb-20 text-center">
          What Students & Parents Say
        </h2>

        {/* CAROUSEL TRACK */}
        <div className="relative h-[360px] flex justify-center items-center overflow-hidden">
  {reviews.map((r, i) => {
    const total = reviews.length;

    const rawOffset = i - active;

    // Normalize offset into [-1, 0, 1]
    let offset = rawOffset;
    if (rawOffset > 1) offset = rawOffset - total;
    if (rawOffset < -1) offset = rawOffset + total;

    const isCenter = offset === 0;

    return (
      <motion.div
        key={i}
        onClick={() => setActive(i)}
        initial={false}
        animate={{
          x: offset * 420,
          scale: isCenter ? 1 : 0.9,
          opacity: isCenter ? 1 : 0.5,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{
          zIndex: isCenter ? 20 : 10,
        }}
        className="absolute cursor-pointer
          w-[720px] h-[320px]
          bg-purple-900/20 backdrop-blur
          border border-gold/30 rounded-2xl
          flex overflow-hidden shadow-2xl"
      >
        {/* LEFT IMAGE */}
        <div className="w-1/2">
          <img
            src={r.image}
            alt="Student learning music"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            “{r.text}”
          </p>
          <p className="text-gold font-semibold tracking-wide">
            {r.author}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>



      </div>
    </section>
  );
}
