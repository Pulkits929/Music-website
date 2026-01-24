import React, { useState } from "react";




export default function GetInTouch() {
    const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="contact" className="bg-[#0b0b0f] text-gray-200 py-16 px-5">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading text-center mb-16
                         bg-gold
                         bg-clip-text text-transparent">
        Get in Touch
          </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <div>
            <div className="mb-9">
              <h2 className="text-white text-xl mb-4 flex items-center gap-3 font-normal">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
              harmonicstudio@gmail.com
              </p>
            </div>

            <div className="mb-9">
              <h2 className="text-white text-xl mb-4 flex items-center gap-3 font-normal">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Phone
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
              +91 75009 58684
              </p>
            </div>

            <div className="mb-9">
              <h2 className="text-white text-xl mb-4 flex items-center gap-3 font-normal">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                Available Hours
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Monday - Saturday: 9AM - 8PM<br />
                Sunday: 1PM - 6PM
              </p>
            </div>
          </div>

          
          {/* FAQ Section */}
<div>
  <h2 className="text-3xl text-gray-200 mb-8 font-normal">
    Frequently Asked Questions
  </h2>

  {[
    {
      q: "What do I need for online lessons?",
      a: "A computer or tablet with camera, stable internet connection, and a quiet space for learning.",
    },
    {
      q: "How long are the lessons?",
      a: "Standard lessons are 60 minutes. Trial lessons are 30 minutes, and we also offer extended sessions for advanced students.",
    },
    {
      q: "Can I reschedule lessons?",
      a: "Yes! We offer flexible scheduling with 24-hour notice for rescheduling. Life happens, and we understand that.",
    },
  ].map((item, i) => {
    const isOpen = openIndex === i;

    return (
      <div
        key={i}
        className={`mb-4 rounded-lg border transition-all duration-300
          ${isOpen ? "border-[#d4af37]" : "border-gray-700"}
          bg-[#141824]`}
      >
        {/* Question */}
        <button
          onClick={() => setOpenIndex(isOpen ? null : i)}
          className="w-full flex items-center justify-between text-left p-6"
        >
          <span className="text-lg text-gray-200 font-semibold">
            {item.q}
          </span>

          <span
            className={`ml-4 text-gold transition-transform duration-300
              ${isOpen ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-6 text-gray-400 leading-relaxed">
            {item.a}
          </div>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>
    </section>
  );
};
