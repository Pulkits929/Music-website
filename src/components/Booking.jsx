import { useState } from "react";



const COURSE_DATA = {
  Piano: {
    Foundation: {
      duration: "3–4 Months",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Foundation",
      ],
    },
    Beginner: {
      duration: "6–8 Months (per book)",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 1",
        "Rockschool Piano Debut",
        "Rockschool Piano Grade 1",
        "Trinity Piano Initial",
        "Trinity Piano Grade 1",
        "ABRSM Piano Initial",
        "ABRSM Piano Grade 1",
      ],
    },
    Intermediate: {
      duration: "8–10 Months (per book)",
      fee: 700,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 2",
        "Rockschool Piano Grade 2",
        "Rockschool Piano Grade 3",
        "Rockschool Piano Grade 4",
        "Trinity Piano Grade 2",
        "Trinity Piano Grade 3",
        "Trinity Piano Grade 4",
      ],
    },
    Advanced: {
      duration: "12 Months (per book)",
      fee: 1000,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 3",
        "Rockschool Piano Grade 5",
        "Rockschool Piano Grade 6",
        "Rockschool Piano Grade 7",
        "Rockschool Piano Grade 8",
        "Trinity Piano Grade 5",
        "Trinity Piano Grade 6",
        "Trinity Piano Grade 7",
        "Trinity Piano Grade 8",
      ],
    },
  },
  Tabla: {
    Foundation: {
      duration: "3–4 Months",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Foundation",
      ],
    },
    Beginner: {
      duration: "6–8 Months (per book)",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 1",
        "Rockschool Piano Debut",
        "Rockschool Piano Grade 1",
        "Trinity Piano Initial",
        "Trinity Piano Grade 1",
        "ABRSM Piano Initial",
        "ABRSM Piano Grade 1",
      ],
    },
    Intermediate: {
      duration: "8–10 Months (per book)",
      fee: 700,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 2",
        "Rockschool Piano Grade 2",
        "Rockschool Piano Grade 3",
        "Rockschool Piano Grade 4",
        "Trinity Piano Grade 2",
        "Trinity Piano Grade 3",
        "Trinity Piano Grade 4",
      ],
    },
    Advanced: {
      duration: "12 Months (per book)",
      fee: 1000,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 3",
        "Rockschool Piano Grade 5",
        "Rockschool Piano Grade 6",
        "Rockschool Piano Grade 7",
        "Rockschool Piano Grade 8",
        "Trinity Piano Grade 5",
        "Trinity Piano Grade 6",
        "Trinity Piano Grade 7",
        "Trinity Piano Grade 8",
      ],
    },
  },

  Drums: {
    Foundation: {
      duration: "3–4 Months",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Foundation",
      ],
    },
    Beginner: {
      duration: "6–8 Months (per book)",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 1",
        "Rockschool Piano Debut",
        "Rockschool Piano Grade 1",
        "Trinity Piano Initial",
        "Trinity Piano Grade 1",
        "ABRSM Piano Initial",
        "ABRSM Piano Grade 1",
      ],
    },
    Intermediate: {
      duration: "8–10 Months (per book)",
      fee: 700,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 2",
        "Rockschool Piano Grade 2",
        "Rockschool Piano Grade 3",
        "Rockschool Piano Grade 4",
        "Trinity Piano Grade 2",
        "Trinity Piano Grade 3",
        "Trinity Piano Grade 4",
      ],
    },
    Advanced: {
      duration: "12 Months (per book)",
      fee: 1000,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 3",
        "Rockschool Piano Grade 5",
        "Rockschool Piano Grade 6",
        "Rockschool Piano Grade 7",
        "Rockschool Piano Grade 8",
        "Trinity Piano Grade 5",
        "Trinity Piano Grade 6",
        "Trinity Piano Grade 7",
        "Trinity Piano Grade 8",
      ],
    },
  },

  Guitar: {
    Foundation: {
      duration: "3–4 Months",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Foundation",
      ],
    },
    Beginner: {
      duration: "6–8 Months (per book)",
      fee: 500,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 1",
        "Rockschool Piano Debut",
        "Rockschool Piano Grade 1",
        "Trinity Piano Initial",
        "Trinity Piano Grade 1",
        "ABRSM Piano Initial",
        "ABRSM Piano Grade 1",
      ],
    },
    Intermediate: {
      duration: "8–10 Months (per book)",
      fee: 700,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 2",
        "Rockschool Piano Grade 2",
        "Rockschool Piano Grade 3",
        "Rockschool Piano Grade 4",
        "Trinity Piano Grade 2",
        "Trinity Piano Grade 3",
        "Trinity Piano Grade 4",
      ],
    },
    Advanced: {
      duration: "12 Months (per book)",
      fee: 1000,
      session: "60 min",
      syllabus: [
        "Harmonic Studio Piano Book 3",
        "Rockschool Piano Grade 5",
        "Rockschool Piano Grade 6",
        "Rockschool Piano Grade 7",
        "Rockschool Piano Grade 8",
        "Trinity Piano Grade 5",
        "Trinity Piano Grade 6",
        "Trinity Piano Grade 7",
        "Trinity Piano Grade 8",
      ],
    },
  },
};

export default function Booking() {
  const [selectedInstrument, setSelectedInstrument] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  

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
        <h2 className="text-3xl sm:text-4xl font-heading text-gold mb-3 sm:mb-4">
            Book Your Lesson
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Start your musical journey with personalized, one-on-one guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* FORM CARD */}
          <div className="bg-purple-900/20 backdrop-blur border border-purple-500/20 rounded-2xl p-6 sm:p-8 md:p-10">
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
                name="level"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full p-4 rounded-lg bg-white text-black border border-purple-500/30"
              >
                <option value="" disabled hidden>Select Level</option>
                <option value="Foundation">Foundation</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>



              <select
                name="instrument"
                value={selectedInstrument}
                onChange={(e) => setSelectedInstrument(e.target.value)}
                className="w-full p-4 rounded-lg bg-white text-black border border-purple-500/30"
              >
                <option value="" disabled hidden>Select Instrument</option>
                <option value="Piano">Piano</option>
                <option value="Guitar">Guitar</option>
                <option value="Drums">Drums</option>
                <option value="Tabla">Tabla</option>
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
          <div>
          <h3 className="text-2xl font-heading text-gold mb-6">
  Course Details
</h3>

{!selectedInstrument || !selectedLevel ? (
  <div className="text-gray-400 text-center py-8 border border-dashed border-purple-500/30 rounded-xl">
    <p className="text-lg mb-2">🎹 Select instrument & level</p>
    <p className="text-sm">
      Course details will appear here
    </p>
  </div>
) : (
  (() => {
    const course =
      COURSE_DATA[selectedInstrument]?.[selectedLevel];

    if (!course) {
      return (
        <p className="text-gray-400">
          Course details not available for this selection.
        </p>
      );
    }

    return (
      <div className="space-y-5 text-gray-300">
        <div className="flex justify-between">
          <span>Instrument</span>
          <span className="text-gold font-semibold">
            {selectedInstrument}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Level</span>
          <span>{selectedLevel}</span>
        </div>

        <div className="flex justify-between">
          <span>Duration</span>
          <span>{course.duration}</span>
        </div>

        <div className="flex justify-between">
          <span>Session Fee</span>
          <span className="text-gold font-semibold">
            ₹{course.fee} / session
          </span>
        </div>

        <div className="flex justify-between">
          <span>Session Length</span>
          <span>{course.session}</span>
        </div>

        <div className="pt-4 border-t border-purple-500/30">
          <p className="text-gold mb-2 font-semibold">
            Syllabus Covered
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {course.syllabus.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  })()
)}

          </div>
        </div>
      </div>
    </section>
  );
}