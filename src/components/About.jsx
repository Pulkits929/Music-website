import AnimateOnScroll from "./AnimateOnScroll.jsx";
export default function About() {
    return (
      <section id="about" className="scroll-mt-15 py-20 max-w-7xl bg-purple-900/30 mx-auto px-6 ">
        <AnimateOnScroll>
        <h2 className="font-heading text-4xl text-gold mb-6">Meet Your Music Teacher</h2>
        <h3 className="text-2xl mb-2">Divyanshu Vashistha</h3>
        <p className="text-gray-400 mb-4">
          Master of Music Education • 10+ Years Experience
        </p>
        <p className="text-gray-300 max-w-3xl">
          Passionate music educator helping students of all ages discover confidence,
          creativity, and musical excellence.
        </p>
        </AnimateOnScroll>
      </section>
    );
  }
  