export default function HowItWorks() {
    const steps = [
      {
        title: "Book Your Lesson",
        desc: "Choose your preferred time and instrument using our simple booking system.",
      },
      {
        title: "Get Setup",
        desc: "Receive lesson link and setup instructions. Just a device & internet.",
      },
      {
        title: "Join Your Lesson",
        desc: "Connect via Zoom, Google Meet, or Microsoft Teams.",
      },
      {
        title: "Practice & Progress",
        desc: "Get practice material and regular progress assessments.",
      },
    ];
  
    return (
      <section className="py-20 bg-[#0f0b1e]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading text-gold mb-12 text-center">
            How Lessons Work
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="border border-gold/30 p-6 rounded-xl text-center"
              >
                <div className="text-gold text-3xl font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  