export default function Gallery() {
    return (
      <section id="portfolio" className="scroll-mt-15 py-20 bg-purple-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading text-gold mb-12 text-center">
            See Learning in Action
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-48 bg-black border border-gold/30 rounded-xl flex items-center justify-center text-gray-500"
              >
                Student Session {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  