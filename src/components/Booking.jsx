import { useState } from "react";

export default function Booking() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm(formData) {
    const newErrors = {};

    // Phone validation - exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Email validation - must end with @gmail.com
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    return newErrors;
  }

  async function sendEmails(formData) {
    try {
      // Send email to user
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_guhds26",
          template_id: "template_u9bp1nk",
          user_id: "puaM7Y6VySYP_dp67",
          template_params: {
            to_email: formData.email,
            to_name: formData.name,
            instrument: formData.instrument,
            message: `Congratulations! You have been successfully enrolled for ${formData.instrument} lessons. Our team will contact you shortly with further details.`,
          },
        }),
      });

      // Send email to owner
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_guhds26",
          template_id: "template_wz3aalu",
          user_id: "puaM7Y6VySYP_dp67",
          template_params: {
            to_email: "spulkit929@gmail.com",
            instrument: formData.instrument,
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            timeslot: formData.timeslot,
            date: formData.date,
          },
        }),
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone.value.trim(),
      instrument: e.target.instrument.value,
      timeslot: e.target.timeslot.value,
      date: e.target.date.value,
    };

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxOQPifG8uN6OY7xwDwdofnpgrW4xHfZgv9aFtWROKcK4iEOzjHGfRodhH_SP2VNONwGQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      // Send emails after successful submission
      await sendEmails(formData);

      alert("Lesson booked successfully 🎶");
      e.target.reset();
      setErrors({});
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="book"
      className="scroll-mt-14 py-18 bg-gradient-to-b from-black/0 via-[#0b0b0f] to-black/0"
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
          <div className="bg-purple-900/20 backdrop-blur border border-purple-500/20 rounded-2xl p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Full Name"
                className="w-full p-4 rounded-lg placeholder-gray-700 bg-white text-black border border-purple-500/30 focus:border-gold outline-none [color-scheme:light]"
                required
              />

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-lg placeholder-gray-700 bg-white text-black border border-purple-500/30 focus:border-gold outline-none [color-scheme:light]"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">⚠️ {errors.email}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="int"
                  className="w-full p-4 rounded-lg placeholder-gray-700 bg-white text-black border border-purple-500/30 focus:border-gold outline-none [color-scheme:light]"
                  pattern="[0-9]{10}"
                 
                  required
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2">⚠️ {errors.phone}</p>
                )}
              </div>

              <select
                name="instrument"
                defaultValue=""
                className="
                  w-full p-4 rounded-lg bg-white
                  border border-purple-500/30
                  focus:border-gold focus:ring-0
                  outline-none
                  text-black
                  focus:text-gray-800
                  invalid:text-gray-400
                "
              >
                <option value="" disabled hidden>
                  Select Instrument
                </option>
                <option value="Piano" className="text-gray-800">Piano</option>
                <option value="Guitar" className="text-gray-800">Guitar</option>
                <option value="Drums" className="text-gray-800">Drums</option>
                <option value="Tabla" className="text-gray-800">Tabla</option>
                <option value="Music Theory" className="text-gray-800">Music Theory</option>
              </select>


              <div className="grid md:grid-cols-2 gap-2">
                <select
                  name="timeslot"
                  className="w-full p-4 rounded-lg bg-white text-black border border-purple-500/30 focus:border-gold outline-none [color-scheme:light]"
                >
                  <option>11AM - 1PM</option>
                  <option>3PM - 5PM</option>
                  <option>6PM - 8PM</option>
                </select>
                <input
                  type="date"
                  name="date"
                  className="w-full p-4 rounded-lg bg-white text-black border border-purple-500/30 focus:border-gold outline-none [color-scheme:light]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold text-lg hover:opacity-90 transition hover:cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "Booking..." : "Book Your First Lesson"}
              </button>

              <p className="text-sm text-gray-400 text-center">
                No commitment • Flexible scheduling • Online & Offline
              </p>
            </form>
          </div>

          {/* FEES + TRUST */}
          <div className="bg-purple-900/10 backdrop-blur border border-purple-500/20 rounded-2xl p-10">
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
              <p>✔ Tailored to student's level</p>
              <p>✔ Experienced & patient teaching</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}