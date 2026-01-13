export default function Booking() {
    async function handleSubmit(e) {
      e.preventDefault();
      const form = e.target;
  
      const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        course: form.course.value,
      };
  
      await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(data),
      });
  
      alert("Lesson booked successfully 🎶");
      form.reset();
    }
  
    return (
      <section id="book" className="py-20 scroll-mt-16 bg-gradient-to-b from-black/0 via-black/50 via-[#0b0b0f] via-[#0b0b0f] via-black/50 to-black/0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-heading text-3xl text-gold">Book Your Lesson</h2>
            <input name="name" placeholder="Full Name" className="w-full p-3 bg-black border" required />
            <input name="email" type="email" placeholder="Email" className="w-full p-3 bg-black border" required />
            <input name="phone" placeholder="Phone" className="w-full p-3 bg-black border" required />
            <select name="course" className="w-full p-3 bg-black border">
              <option>Piano</option>
              <option>Drums</option>
              <option>Tabla</option>
              <option>Music Theory</option>
            </select>
            <button className="bg-gold text-black px-6 py-3 rounded-full">
              Book Lesson
            </button>
          </form>
  
          <div className="border border-gold/30 p-6 rounded-xl">
            <h3 className="text-xl text-gold mb-4">Course Fees</h3>
            <p>Piano – ₹1500 / session</p>
            <p>Drums – ₹1200 / session</p>
            <p>Tabla – ₹1200 / session</p>
            <p>Music Theory – ₹1000 / session</p>
          </div>
        </div>
      </section>
    );
  }
  