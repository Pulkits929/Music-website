export default function Testimonials() {
    const reviews = [
      {
        text: "My child’s confidence and musical skills improved drastically.",
        author: "Parent of Piano Student",
      },
      {
        text: "Structured lessons and excellent teaching style.",
        author: "Guitar Student",
      },
      {
        text: "Professional, patient, and inspiring teacher.",
        author: "Tabla Learner",
      },
    ];
  
    return (
      <section id="testimonials" className="scroll-mt-15 py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-heading text-gold mb-12 text-center">
            What Students & Parents Say
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="border border-gold/30 p-6 rounded-xl"
              >
                <p className="text-gray-300 mb-4">“{r.text}”</p>
                <p className="text-gold font-semibold">{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  