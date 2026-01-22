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
          <h2 className="text-4xl font-heading text-gold mb-12 text-center">
            How Online Lessons Work
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
           {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            Ready to start your musical journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const bookingSection = document.getElementById("book");
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-gold text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50"
          >
            Book Your First Lesson
          </motion.button>
        </motion.div> */}
        </div>
      </section>
    );
  }
  