import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "My child's confidence and musical skills improved drastically.",
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
  {
    text: "Professional, patient, and inspiring teacher.",
    author: "Tabla Learner",
    image: "/students/tabla.jpg",
  },
  {
    text: "Structured lessons and excellent teaching style.",
    author: "Guitar Student",
    image: "/students/guitar.jpg",
  },
];

export default function LearningInAction() {
  const [active, setActive] = useState(0);

  /* 🔁 Smooth auto-slide (no jerk) */
  useEffect(() => {
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearTimeout(id);
  }, [active]);

  const goNext = () =>
    setActive((prev) => (prev + 1) % reviews.length);

  const goPrev = () =>
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 py-16
      bg-gradient-to-b from-black/0 via-[#0b0b0f] to-black/0"
    >
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-heading text-gold mb-10 sm:mb-16 text-center">
          See Learning in Action
        </h2>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${active * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="min-w-full px-1">
                <div className="bg-purple-900/20 backdrop-blur
                                border border-gold/30 rounded-2xl
                                overflow-hidden shadow-xl">
                  {/* Image */}
                  <div className="h-56 sm:h-64">
                    <img
                      src={review.image}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-6 sm:p-8">
                    <p className="text-lg text-gray-200 mb-4">
                      “{review.text}”
                    </p>
                    <p className="text-gold font-semibold">
                      — {review.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-3 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300
                  ${i === active ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full
              bg-gold/20 border border-gold/40
              flex items-center justify-center text-gold"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full
              bg-gold/20 border border-gold/40
              flex items-center justify-center text-gold"
            >
              →
            </button>
          </div>
        </div>

 {/* ================= DESKTOP: 3 CARD CAROUSEL ================= */}
<div className="hidden lg:block relative h-[380px] overflow-hidden">
  <div className="relative h-full flex justify-center items-center">

    {reviews.map((r, i) => {
      const total = reviews.length;

      // Calculate wrapped offset
      let offset = i - active;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      // Only render left, center, right
      if (Math.abs(offset) > 1) return null;

      const isCenter = offset === 0;

      return (
        <motion.div
          key={i}
          onClick={() => setActive(i)}
          animate={{
            x: offset * 420,
            scale: isCenter ? 1 : 0.85,
            opacity: isCenter ? 1 : 0.35,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ zIndex: isCenter ? 20 : 10 }}
          className={`absolute cursor-pointer
            w-[720px] h-[340px]
            rounded-2xl flex overflow-hidden
            bg-purple-900/20 backdrop-blur
            border shadow-2xl
            ${isCenter
              ? "border-gold/50 shadow-gold/20"
              : "border-gold/20"}`}
        >
          {/* Image */}
          <div className="w-1/2">
            <img
              src={r.image}
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <p className="text-xl text-gray-200 mb-6">
              “{r.text}”
            </p>
            <p className="text-gold font-semibold">
              — {r.author}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>

  {/* Desktop dots */}
  <div className="flex justify-center gap-3 mt-10">
    {reviews.map((_, i) => (
      <button
        key={i}
        onClick={() => setActive(i)}
        className={`h-3 rounded-full transition-all duration-300
          ${i === active ? "w-10 bg-gold" : "w-3 bg-gold/30"}`}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
