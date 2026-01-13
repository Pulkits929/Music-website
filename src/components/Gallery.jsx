export default function Roadmap() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Foundations",
      desc: "Posture, finger exercises, and your very first notes.",
    },
    {
      stage: "Stage 2",
      title: "The Language",
      desc: "Reading sheet music, understanding rhythm, and timing.",
    },
    {
      stage: "Stage 3",
      title: "Harmony & Melody",
      desc: "Playing chords, scales, and creating beautiful melodies.",
    },
    {
      stage: "Stage 4",
      title: "Stagecraft",
      desc: "Building confidence, stage presence, and performance prep.",
    },
  ];

  return (
    <section
      id="roadmap"
      className="scroll-mt-24 py-28
      bg-gradient-to-b from-black/0 via-[#0b0b0f] to-black/0"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading text-gold mb-20 text-center">
          Your Musical Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: IMAGE */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/roadmap/img1.png"
              alt="Student learning music"
              className="w-full h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-heading text-white">
                Music Mastery
              </h3>
              <p className="text-gray-300">
                Keyboard • Guitar • Vocals • Tabla
              </p>
            </div>
          </div>

          {/* RIGHT: ROADMAP */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-purple-500/30" />

            <div className="space-y-12">
              {stages.map((s, i) => (
                <div key={i} className="relative flex gap-6">
                  
                  {/* DOT */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#0b0b0f]
                      border border-gold/40 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gold" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="bg-purple-900/20 border border-purple-500/30
                    rounded-xl p-6 backdrop-blur w-md">
                    <p className="text-sm text-gold uppercase tracking-wide mb-1">
                      {s.stage}
                    </p>
                    <h4 className="text-xl font-semibold mb-2">
                      {s.title}
                    </h4>
                    <p className="text-gray-400">
                      {s.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="mt-16">
              <button className="w-full py-4 rounded-xl
                bg-gradient-to-r from-purple-600 to-purple-500
                text-white font-semibold tracking-wide hover:opacity-90 transition">
                Learn More
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}
