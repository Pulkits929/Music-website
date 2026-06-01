import { useParams } from "react-router-dom";

const trinityData = {
  hero: {
    title: "Trinity College London",
    subtitle: "Internationally recognised music qualifications from one of the world's leading exam boards",
    badge: "Official Exam Centre",
  },
  overview: {
    founded: "1872",
    headquartered: "London, UK",
    recognised: "Globally",
    examType: "Practical & Theory",
  },
  gradeStructure: [
    { level: "Initial", color: "#e1f5ee", accent: "#0f6e56", label: "Beginner" },
    { level: "Grade 1", color: "#e6f1fb", accent: "#185fa5", label: "Foundation" },
    { level: "Grade 2", color: "#e6f1fb", accent: "#185fa5", label: "Foundation" },
    { level: "Grade 3", color: "#e6f1fb", accent: "#185fa5", label: "Elementary" },
    { level: "Grade 4", color: "#faeeda", accent: "#854f0b", label: "Elementary" },
    { level: "Grade 5", color: "#faeeda", accent: "#854f0b", label: "Intermediate" },
    { level: "Grade 6", color: "#faece7", accent: "#993c1d", label: "Intermediate" },
    { level: "Grade 7", color: "#faece7", accent: "#993c1d", label: "Advanced" },
    { level: "Grade 8", color: "#fbeaf0", accent: "#993556", label: "Advanced" },
  ],
  instruments: [
    { name: "Piano", icon: "🎹" },
    { name: "Guitar", icon: "🎸" },
    { name: "Violin", icon: "🎻" },
    { name: "Voice", icon: "🎤" },
    { name: "Flute", icon: "🪈" },
    { name: "Drums", icon: "🥁" },
    { name: "Keyboard", icon: "🎹" },
    { name: "Cello", icon: "🎻" },
  ],
  examComponents: [
    {
      title: "Pieces",
      description: "Perform three contrasting pieces from the Trinity syllabus, demonstrating musical range and technical skill.",
      weight: "60–70%",
    },
    {
      title: "Technical Work",
      description: "Scales, arpeggios, and technical exercises relevant to the instrument and grade level.",
      weight: "15–20%",
    },
    {
      title: "Supporting Tests",
      description: "Sight-reading, aural, and musical knowledge questions to assess broader musicianship.",
      weight: "15–20%",
    },
  ],
  passBands: [
    { band: "Distinction", minMark: "87+", color: "#1d9e75" },
    { band: "Merit", minMark: "75–86", color: "#185fa5" },
    { band: "Pass", minMark: "60–74", color: "#ba7517" },
  ],
  faqs: [
    {
      q: "How often are Trinity exams held?",
      a: "Trinity exams are held throughout the year in multiple sessions — typically January, May/June, and September/October.",
    },
    {
      q: "Are Trinity certificates internationally recognised?",
      a: "Yes. Trinity College London is accredited by Ofqual (UK) and recognised by universities and conservatoires worldwide.",
    },
    {
      q: "What age can students start?",
      a: "There is no minimum age. Students typically begin at Initial grade when they have a few months of learning behind them.",
    },
    {
      q: "Do I need a theory exam alongside the practical?",
      a: "Theory is embedded in the practical exam's supporting tests. A separate theory exam is not required for Grades 1–8.",
    },
  ],
};

export default function Trinity() {
  const { name } = useParams();

  if (name && name !== "trinity") {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem" }}>Page not found</h1>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a2e", background: "#fff", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0c1445 0%, #1a237e 50%, #0d47a1 100%)",
        padding: "5rem 2rem 4rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
        }} />
        <span style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.15)",
          color: "#c5cae9",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          padding: "0.35rem 1rem",
          borderRadius: "2rem",
          border: "1px solid rgba(255,255,255,0.2)",
          marginBottom: "1.5rem",
        }}>
          {trinityData.hero.badge}
        </span>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: "700",
          color: "#fff",
          margin: "0 0 1rem",
          lineHeight: 1.2,
          fontFamily: "'Georgia', serif",
        }}>
          {trinityData.hero.title}
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#90caf9",
          maxWidth: "600px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
          fontFamily: "'Arial', sans-serif",
          fontWeight: 300,
        }}>
          {trinityData.hero.subtitle}
        </p>

        {/* Overview Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "1rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}>
          {[
            { label: "Founded", value: trinityData.overview.founded },
            { label: "Based in", value: trinityData.overview.headquartered },
            { label: "Recognition", value: trinityData.overview.recognised },
            { label: "Exam Type", value: trinityData.overview.examType },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "1rem",
            }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "700", color: "#fff", fontFamily: "'Arial', sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: "0.75rem", color: "#90caf9", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.25rem", fontFamily: "'Arial', sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Grade Structure */}
      <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeading>Grade structure</SectionHeading>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "'Arial', sans-serif", fontSize: "1rem" }}>
          Trinity offers a clear progression pathway from Initial grade through to Grade 8, with each level building on the last. Students work at their own pace and enter exams when ready.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.75rem" }}>
          {trinityData.gradeStructure.map((g) => (
            <div key={g.level} style={{
              background: g.color,
              borderLeft: `4px solid ${g.accent}`,
              borderRadius: "8px",
              padding: "0.85rem 1rem",
            }}>
              <div style={{ fontWeight: "700", color: g.accent, fontSize: "0.95rem", fontFamily: "'Arial', sans-serif" }}>{g.level}</div>
              <div style={{ fontSize: "0.75rem", color: "#555", marginTop: "0.2rem", fontFamily: "'Arial', sans-serif" }}>{g.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Instruments */}
      <section style={{ background: "#f8f9ff", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionHeading>Instruments offered</SectionHeading>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "'Arial', sans-serif" }}>
            Spardha School of Music offers Trinity exams across a wide range of instruments taught by our faculty.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "0.75rem" }}>
            {trinityData.instruments.map((inst) => (
              <div key={inst.name} style={{
                background: "#fff",
                border: "1px solid #e0e4f0",
                borderRadius: "10px",
                padding: "1.25rem 0.75rem",
                textAlign: "center",
                transition: "box-shadow 0.2s",
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{inst.icon}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#1a237e", fontFamily: "'Arial', sans-serif" }}>{inst.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Components */}
      <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeading>What the exam includes</SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem", marginTop: "1.5rem" }}>
          {trinityData.examComponents.map((comp, i) => (
            <div key={comp.title} style={{
              background: "#fff",
              border: "1px solid #e0e4f0",
              borderRadius: "12px",
              padding: "1.5rem",
              borderTop: `4px solid ${["#1a237e", "#1565c0", "#0277bd"][i]}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: "700", color: "#1a237e", fontFamily: "'Georgia', serif" }}>{comp.title}</h3>
                <span style={{
                  background: "#e8eaf6",
                  color: "#1a237e",
                  fontSize: "0.72rem",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  marginLeft: "0.5rem",
                }}>
                  {comp.weight}
                </span>
              </div>
              <p style={{ margin: 0, color: "#555", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'Arial', sans-serif" }}>{comp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pass Bands */}
      <section style={{ background: "#0c1445", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "0.5rem", fontFamily: "'Georgia', serif" }}>Result bands</h2>
          <p style={{ color: "#90caf9", marginBottom: "2.5rem", fontFamily: "'Arial', sans-serif" }}>Marks are awarded out of 100 across all exam components.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {trinityData.passBands.map((band) => (
              <div key={band.band} style={{
                background: "rgba(255,255,255,0.06)",
                border: `2px solid ${band.color}`,
                borderRadius: "12px",
                padding: "1.5rem 1rem",
              }}>
                <div style={{ fontSize: "1.5rem", fontWeight: "700", color: band.color, fontFamily: "'Arial', sans-serif" }}>{band.minMark}</div>
                <div style={{ fontSize: "0.85rem", color: "#fff", marginTop: "0.4rem", fontFamily: "'Arial', sans-serif", fontWeight: "600" }}>{band.band}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "4rem 2rem", maxWidth: "780px", margin: "0 auto" }}>
        <SectionHeading>Frequently asked questions</SectionHeading>
        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {trinityData.faqs.map((faq, i) => (
            <details key={i} style={{
              background: "#f8f9ff",
              border: "1px solid #e0e4f0",
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              cursor: "pointer",
            }}>
              <summary style={{
                fontWeight: "700",
                color: "#1a237e",
                fontSize: "1rem",
                fontFamily: "'Georgia', serif",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                {faq.q}
                <span style={{ fontSize: "1.2rem", color: "#90caf9", marginLeft: "1rem", flexShrink: 0 }}>+</span>
              </summary>
              <p style={{
                margin: "0.75rem 0 0",
                color: "#444",
                lineHeight: 1.8,
                fontFamily: "'Arial', sans-serif",
                fontSize: "0.95rem",
              }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #1a237e, #0d47a1)",
        padding: "4rem 2rem",
        textAlign: "center",
      }}>
        <h2 style={{ color: "#fff", fontSize: "2rem", marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
          Ready to get certified?
        </h2>
        <p style={{ color: "#90caf9", marginBottom: "2rem", fontFamily: "'Arial', sans-serif", fontSize: "1rem" }}>
          Speak to our team to find the right grade and instrument path for you.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#1a237e",
            fontWeight: "700",
            fontFamily: "'Arial', sans-serif",
            fontSize: "0.95rem",
            padding: "0.85rem 2.5rem",
            borderRadius: "2rem",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          Enquire Now
        </a>
      </section>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontSize: "1.75rem",
      fontWeight: "700",
      color: "#1a237e",
      marginBottom: "0.5rem",
      fontFamily: "'Georgia', serif",
      borderBottom: "3px solid #1a237e",
      paddingBottom: "0.5rem",
      display: "inline-block",
    }}>
      {children}
    </h2>
  );
}


