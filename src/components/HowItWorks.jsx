import { motion } from "framer-motion";


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
      <section className="py-20 bg-gradient-to-b from-black/0 via-black/50 via-[#0b0b0f] via-[#0b0b0f] via-black/50 to-black/0">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-heading text-gold mb-10 sm:mb-16 text-center">
            How Online Lessons Work
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="border border-gold/30 p-6 rounded-xl text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
  rounded-full
  border border-gold/60
  bg-gray-600/50 backdrop-blur-sm
  text-gold text-2xl font-semibold
  shadow-[0_0_20px_rgba(212,175,55,0.25)]">
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
  