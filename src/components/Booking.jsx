export default function Booking() {
  async function handleSubmit(e) {
    e.preventDefault();
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      instrument: e.target.instrument.value,
      timeslot: e.target.timeslot.value,
      date: e.target.date.value,
    };
  
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbxOQPifG8uN6OY7xwDwdofnpgrW4xHfZgv9aFtWROKcK4iEOzjHGfRodhH_SP2VNONwGQ/exec", {
        method: "POST",
        
        body: JSON.stringify(formData),
      });
  
      
        alert("Lesson booked successfully 🎶");
        e.target.reset();
      
    } catch (err) {
      alert("Something went wrong. Try again.");
    }
  }
  

  return (
    <section
      id="book"
      className="scroll-mt-14 py-18
      bg-gradient-to-b from-black/0 via-[#0b0b0f] to-black/0"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading text-gold mb-4">
            Book Your Lesson
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Start your musical journey with personalized, one-on-one guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* FORM CARD */}
          <div className="bg-purple-900/20 backdrop-blur
            border border-purple-500/20 rounded-2xl p-10">

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <input
                name="name"
                placeholder="Full Name"
                className="w-full p-4 rounded-lg
                bg-[#0b0b0f] border border-purple-500/30
                focus:border-gold outline-none [color-scheme:dark]"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-lg
                bg-[#0b0b0f] border border-purple-500/30
                focus:border-gold outline-none [color-scheme:dark]"
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 rounded-lg
                bg-[#0b0b0f] border border-purple-500/30
                focus:border-gold outline-none [color-scheme:dark]"
                required
              />

              <select
                name="instrument"
                defaultValue={""}
                className="w-full p-4 rounded-lg
                bg-[#0b0b0f] border border-purple-500/30
                focus:border-gold outline-none [color-scheme:dark]"
              >
                <option value="" disabled>
                  Select Instrument
                </option>
                <option>Piano</option>
                <option>Guitar</option>
                <option>Drums</option>
                <option>Tabla</option>
                <option>Music Theory</option>
              </select>

              <select
                name="timeslot"
                className="w-1/2 p-4 rounded-lg
                bg-[#0b0b0f] border border-purple-500/30
                focus:border-gold outline-none [color-scheme:dark]"
              >
                <option>11AM - 1PM</option>
                <option>3PM - 5PM</option>
                <option>6PM - 8PM</option>
              </select>
              <input type="date" name="date"
                className="w-1/2 p-4 rounded-lg
                bg-[#0b0b0f] border border-purple-500/30
                focus:border-gold outline-none [color-scheme:dark]" />

              <button
                className="w-full py-4 rounded-xl
                bg-gradient-to-r from-gold to-yellow-500
                text-black font-semibold text-lg
                hover:opacity-90 transition"
              >
                Book Your First Lesson
              </button>

              <p className="text-sm text-gray-400 text-center">
                No commitment • Flexible scheduling • Online & Offline
              </p>
            </form>
          </div>

          {/* FEES + TRUST */}
          <div className="bg-purple-900/10 backdrop-blur
            border border-purple-500/20 rounded-2xl p-10">

            <h3 className="text-2xl font-heading text-gold mb-6">
              Course Fees
            </h3>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex justify-between">
                <span>Piano</span>
                <span className="text-gold">₹1500 / session</span>
              </li>
              <li className="flex justify-between">
                <span>Drums</span>
                <span className="text-gold">₹1200 / session</span>
              </li>
              <li className="flex justify-between">
                <span>Tabla</span>
                <span className="text-gold">₹1200 / session</span>
              </li>
              <li className="flex justify-between">
                <span>Music Theory</span>
                <span className="text-gold">₹1000 / session</span>
              </li>
            </ul>

            <div className="border-t border-purple-500/30 pt-6 text-gray-400 text-sm space-y-2">
              <p>✔ One-on-one personal lessons</p>
              <p>✔ Tailored to student’s level</p>
              <p>✔ Experienced & patient teaching</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
