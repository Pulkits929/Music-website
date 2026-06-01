import { useState } from "react";

const gold = "#C9A84C";
const goldLight = "#F5C842";
const dark = "#0d0d0d";
const darkCard = "#141008";
const white = "#ffffff";
const muted = "#b0a090";

const certTabs = ["RSL", "Trinity", "ABRSM", "ABGMVM", "ISTD", "Spardha"];

const levels = [
  {
    icon: "🌱",
    name: "Beginner",
    subtitle: "Foundations",
    desc: "Core technique, basic scales, and your first simple pieces. Builds the right habits from day one.",
    duration: "3–6 months",
  },
  {
    icon: "🌿",
    name: "Elementary",
    subtitle: "Building Up",
    desc: "Expanding repertoire, more complex rhythms, and introduction to musical theory fundamentals.",
    duration: "6–12 months",
  },
  {
    icon: "🌳",
    name: "Intermediate",
    subtitle: "Growing Confidence",
    desc: "Diverse styles, intermediate theory, sight-reading practice, and performance preparation.",
    duration: "1–2 years",
  },
  {
    icon: "⭐",
    name: "Advanced",
    subtitle: "Mastery",
    desc: "Complex compositions, advanced theory, performance technique, and preparation for external certifications.",
    duration: "2+ years",
  },
];

const instruments = [
  { icon: "🎹", name: "Piano" },
  { icon: "🎸", name: "Guitar (Acoustic & Electric)" },
  { icon: "🥁", name: "Drums & Tabla" },
  { icon: "🎻", name: "Violin" },
  { icon: "🎤", name: "Vocals (Indian & Western)" },
  { icon: "🎹", name: "Electronic Keyboard" },
];

const benefits = [
  { icon: "🏅", title: "Recognised Certificate", desc: "Issued by Harmonic Studio, documenting your grade, instrument, and assessment results." },
  { icon: "🎯", title: "Personalised Pathway", desc: "No fixed syllabus — your learning plan is tailored to your pace, goals, and musical taste." },
  { icon: "🌍", title: "Gateway to External Exams", desc: "Our internal grades naturally align with RSL, Trinity, and ABRSM — making the transition seamless whenever you're ready." },
  { icon: "🎤", title: "Performance Recitals", desc: "Regular recital opportunities to build stage confidence, manage performance anxiety, and celebrate progress." },
  { icon: "📊", title: "Regular Progress Reports", desc: "Detailed feedback from your instructor after every assessment, so you always know what to work on next." },
  { icon: "🤝", title: "No Pressure Environment", desc: "Our internal certification is designed to motivate and celebrate — not intimidate. Every student progresses at their own pace." },
];

const faqs = [
  {
    q: "What is the Harmonic Studio Certification?",
    a: "The Harmonic Studio Certification is our own internal grading system — a structured, supportive way to track and celebrate your musical progress. It runs from Beginner through Advanced and is conducted by your instructor at Harmonic Studio.",
  },
  {
    q: "Is the Harmonic Studio Certificate internationally recognised?",
    a: "The Harmonic Studio Certificate is an internal qualification, not accredited by an external exam board. However, it serves as excellent preparation for RSL, Trinity, and ABRSM exams, which are internationally recognised — and many of our students transition to these boards after completing our internal program.",
  },
  {
    q: "Can I pursue external certifications alongside Harmonic Studio's program?",
    a: "Absolutely. Many students pursue our internal program and external certifications simultaneously. Your teacher will help you align both timelines so you're always well-prepared.",
  },
  {
    q: "How are assessments conducted?",
    a: "Assessments are conducted by your instructor at regular intervals — typically every 3 to 6 months, depending on your pace. They cover performance pieces, technical exercises, and musical knowledge appropriate to your level.",
  },
];

const S = {
  page: { background: dark, minHeight: "100vh", fontFamily: "'Cormorant Garamond','Georgia',serif", color: white, overflowX: "hidden" },
  hero: { position: "relative", width: "100%", minHeight: 440, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(135deg,#0d0d0d 0%,#1a1408 40%,#0d0a05 100%)", padding: "80px 24px 60px" },
  heroGlow: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 350, background: "radial-gradient(ellipse,rgba(201,168,76,0.14) 0%,rgba(201,168,76,0.04) 50%,transparent 70%)", pointerEvents: "none" },
  // Decorative music staff lines
  staffLines: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(180deg, transparent, transparent 28px, rgba(201,168,76,0.8) 28px, rgba(201,168,76,0.8) 29px)", pointerEvents: "none" },
  heroContent: { position: "relative", zIndex: 2, textAlign: "center", maxWidth: 780 },
  eyebrow: { fontSize: 13, letterSpacing: "0.35em", textTransform: "uppercase", color: gold, marginBottom: 18, fontFamily: "'Montserrat',sans-serif", fontWeight: 500 },
  heroTitle: { fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.15, color: goldLight, margin: "0 0 20px", fontStyle: "italic" },
  heroSub: { fontSize: "1.1rem", color: muted, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px", fontFamily: "'Montserrat',sans-serif", fontWeight: 300 },
  tabBar: { display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginTop: 10 },
  tab: (a) => ({ padding: "8px 22px", borderRadius: 30, border: `1px solid ${a ? gold : "rgba(201,168,76,0.3)"}`, background: a ? gold : "transparent", color: a ? dark : gold, fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", cursor: "pointer", transition: "all 0.25s" }),
  divider: { width: "100%", height: 1, background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)" },
  intro: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", maxWidth: 1100, margin: "0 auto", padding: "80px 32px" },
  label: { fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: gold, fontFamily: "'Montserrat',sans-serif", fontWeight: 600, marginBottom: 16 },
  h2: { fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: goldLight, margin: "0 0 20px", lineHeight: 1.2 },
  body: { fontSize: "1rem", color: muted, lineHeight: 1.85, fontFamily: "'Montserrat',sans-serif", fontWeight: 300 },
  badgeWrap: { display: "flex", justifyContent: "center", alignItems: "center" },
  // Levels
  levelsSection: { background: "linear-gradient(180deg,#0d0d0d,#130f05)", padding: "70px 32px" },
  levelsInner: { maxWidth: 1100, margin: "0 auto" },
  secHead: { textAlign: "center", marginBottom: 50 },
  levelsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 },
  levelCard: { background: darkCard, border: "1px solid rgba(201,168,76,0.15)", borderRadius: 18, padding: "32px 24px", transition: "all 0.25s", position: "relative", overflow: "hidden" },
  levelTop: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 },
  levelIcon: { fontSize: 32 },
  levelName: { fontSize: "1.2rem", fontWeight: 700, color: goldLight, fontFamily: "'Cormorant Garamond',serif" },
  levelSub: { fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: gold, fontFamily: "'Montserrat',sans-serif" },
  levelDesc: { fontSize: "0.88rem", color: muted, lineHeight: 1.75, fontFamily: "'Montserrat',sans-serif", fontWeight: 300, marginBottom: 16 },
  levelDuration: { display: "inline-block", padding: "4px 12px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: 20, fontSize: 12, color: gold, fontFamily: "'Montserrat',sans-serif", fontWeight: 500 },
  // Instruments
  instSection: { padding: "70px 32px", maxWidth: 1100, margin: "0 auto" },
  instGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 16, marginTop: 40 },
  instCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 14, padding: "24px 16px", textAlign: "center", transition: "border-color 0.25s,transform 0.25s" },
  instIcon: { fontSize: 36, marginBottom: 10, display: "block" },
  instName: { fontSize: 14, fontFamily: "'Montserrat',sans-serif", fontWeight: 500, color: white, lineHeight: 1.4 },
  // Benefits
  benefitsSection: { background: "#0a0805", padding: "70px 32px" },
  benefitsInner: { maxWidth: 1100, margin: "0 auto" },
  benefitsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginTop: 40 },
  benefitCard: { display: "flex", gap: 18, padding: "24px 20px", background: darkCard, border: "1px solid rgba(201,168,76,0.12)", borderRadius: 14, transition: "border-color 0.25s,transform 0.25s" },
  benefitIcon: { fontSize: 28, flexShrink: 0 },
  benefitTitle: { fontSize: "1rem", fontWeight: 600, color: goldLight, fontFamily: "'Cormorant Garamond',serif", marginBottom: 6 },
  benefitDesc: { fontSize: "0.87rem", color: muted, lineHeight: 1.7, fontFamily: "'Montserrat',sans-serif", fontWeight: 300 },
  // FAQ
  faqSection: { padding: "70px 32px", background: "#0a0805" },
  faqInner: { maxWidth: 800, margin: "0 auto" },
  faqItem: { borderBottom: "1px solid rgba(201,168,76,0.15)" },
  faqQ: { width: "100%", background: "none", border: "none", textAlign: "left", padding: "22px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: white, fontSize: "1rem", fontFamily: "'Montserrat',sans-serif", fontWeight: 500 },
  faqA: { fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "0.9rem", color: muted, lineHeight: 1.8, paddingBottom: 20 },
  chev: (o) => ({ color: gold, fontSize: 20, transition: "transform 0.25s", transform: o ? "rotate(180deg)" : "rotate(0)", flexShrink: 0 }),
  // CTA
  ctaSection: { padding: "90px 32px", textAlign: "center", background: "linear-gradient(180deg,#0d0d0d,#1a1408,#0d0d0d)", position: "relative", overflow: "hidden" },
  ctaGlow: { position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 250, background: "radial-gradient(ellipse,rgba(201,168,76,0.12) 0%,transparent 70%)", pointerEvents: "none" },
  ctaTitle: { fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: goldLight, marginBottom: 16, fontStyle: "italic" },
  ctaSub: { fontSize: "1rem", color: muted, fontFamily: "'Montserrat',sans-serif", fontWeight: 300, marginBottom: 36, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", padding: "16px 44px", background: `linear-gradient(135deg,${goldLight},${gold})`, color: dark, borderRadius: 40, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", border: "none", transition: "transform 0.2s,box-shadow 0.2s", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" },
};

export default function HarmonicCertification() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .level-card:hover { border-color: rgba(201,168,76,0.45) !important; transform: translateY(-4px); }
        .inst-card:hover { border-color: rgba(201,168,76,0.5) !important; transform: translateY(-4px); }
        .benefit-card:hover { border-color: rgba(201,168,76,0.35) !important; transform: translateY(-3px); }
        .cta-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 14px 40px rgba(201,168,76,0.4) !important; }
        .faq-q:hover { color: #F5C842 !important; }
        .tab-btn:hover { border-color: rgba(201,168,76,0.6) !important; background: rgba(201,168,76,0.08) !important; }
      `}</style>

      {/* Hero */}
      <section style={S.hero}>
        <div style={S.heroGlow} />
        <div style={S.staffLines} />
        <div style={S.heroContent}>
          <p style={S.eyebrow}>Internal Certification</p>
          <h1 style={S.heroTitle}>Harmonic Studio</h1>
          <p style={S.heroSub}>
            Our own structured certification program — designed to nurture every student
            at their own pace, celebrate milestones, and build the confidence needed
            for the world stage.
          </p>
          <div style={S.tabBar}>
            {certTabs.map((t) => (
              <button key={t} className="tab-btn" style={S.tab(t === "Spardha")}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* Intro + Badge */}
      <div style={S.intro}>
        <div>
          <p style={S.label}>Our Philosophy</p>
          <h2 style={S.h2}>Your Journey. Your Pace. Your Certificate.</h2>
          <p style={S.body}>
            Not every student is ready for an international exam — and that's perfectly fine.
            The Harmonic Studio Certification is a warm, encouraging alternative: a structured
            internal grading program that recognises your progress on your own terms.
          </p>
          <br />
          <p style={S.body}>
            Whether you're a young beginner or an adult learner rediscovering music, our
            internal certification tracks your growth from Beginner to Advanced, issuing
            a formal certificate at each milestone. And whenever you're ready to step up
            to RSL, Trinity, or ABRSM — we'll be right there with you.
          </p>
        </div>
        <div style={S.badgeWrap}>
          {/* Harmonic Studio — elegant musical badge */}
          <svg viewBox="0 0 340 340" style={{ width: "100%", maxWidth: 320, filter: "drop-shadow(0 0 50px rgba(201,168,76,0.3))" }}>
            <defs>
              <radialGradient id="hsgrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1e1508" />
                <stop offset="100%" stopColor="#0d0a04" />
              </radialGradient>
            </defs>
            <circle cx="170" cy="170" r="160" fill="none" stroke={gold} strokeWidth="2" opacity="0.4" />
            <circle cx="170" cy="170" r="152" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.2" />
            <circle cx="170" cy="170" r="145" fill="url(#hsgrad)" />
            {/* Music staff lines */}
            {[130,142,154,166,178].map((y, i) => (
              <line key={i} x1="80" y1={y} x2="260" y2={y} stroke={gold} strokeWidth="0.8" opacity="0.25" />
            ))}
            {/* Treble clef simplified */}
            <text x="108" y="180" fontFamily="serif" fontSize="90" fill={gold} fillOpacity="0.18">𝄞</text>
            {/* HS monogram over staff */}
            <text x="178" y="178" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="52" fontWeight="700" fill={goldLight} opacity="0.92">H</text>
            <text x="205" y="198" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="30" fontWeight="700" fill={gold} opacity="0.7">S</text>
            <text x="170" y="218" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="10" fontWeight="600" fill={gold} letterSpacing="4">HARMONIC</text>
            <text x="170" y="234" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="400" fill={muted} letterSpacing="3">STUDIO</text>
            <rect x="95" y="248" width="150" height="24" rx="4" fill={gold} fillOpacity="0.1" />
            <text x="170" y="264" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill={gold} letterSpacing="2">CERTIFIED LEARNING</text>
            {/* Decorative dots */}
            {[0,45,90,135,180,225,270,315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return <circle key={i} cx={170 + 155 * Math.cos(rad)} cy={170 + 155 * Math.sin(rad)} r="3" fill={gold} opacity="0.45" />;
            })}
            {/* Inner ring diamonds */}
            {[22,67,112,157,202,247,292,337].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return <circle key={i} cx={170 + 130 * Math.cos(rad)} cy={170 + 130 * Math.sin(rad)} r="1.5" fill={gold} opacity="0.2" />;
            })}
          </svg>
        </div>
      </div>

      <div style={S.divider} />

      {/* Levels */}
      <section style={S.levelsSection}>
        <div style={S.levelsInner}>
          <div style={S.secHead}>
            <p style={S.label}>Our Grading System</p>
            <h2 style={S.h2}>4 Levels of Achievement</h2>
            <p style={{ ...S.body, maxWidth: 520, margin: "10px auto 0", textAlign: "center" }}>
              Each level is assessed by your instructor and awarded a formal Harmonic Studio
              certificate upon successful completion.
            </p>
          </div>
          <div style={S.levelsGrid}>
            {levels.map((lv, i) => (
              <div key={i} className="level-card" style={S.levelCard}>
                {/* Corner number */}
                <div style={{ position: "absolute", top: 16, right: 20, fontSize: 36, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: gold, opacity: 0.08 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={S.levelTop}>
                  <span style={S.levelIcon}>{lv.icon}</span>
                  <div>
                    <div style={S.levelName}>{lv.name}</div>
                    <div style={S.levelSub}>{lv.subtitle}</div>
                  </div>
                </div>
                <p style={S.levelDesc}>{lv.desc}</p>
                <span style={S.levelDuration}>⏱ {lv.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* Instruments */}
      <section style={S.instSection}>
        <div style={S.secHead}>
          <p style={S.label}>Available For</p>
          <h2 style={S.h2}>Instruments & Disciplines</h2>
        </div>
        <div style={S.instGrid}>
          {instruments.map((inst, i) => (
            <div key={i} className="inst-card" style={S.instCard}>
              <span style={S.instIcon}>{inst.icon}</span>
              <span style={S.instName}>{inst.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* Benefits */}
      <section style={S.benefitsSection}>
        <div style={S.benefitsInner}>
          <div style={S.secHead}>
            <p style={S.label}>What You Get</p>
            <h2 style={S.h2}>Benefits of Harmonic Studio Certification</h2>
          </div>
          <div style={S.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card" style={S.benefitCard}>
                <div style={S.benefitIcon}>{b.icon}</div>
                <div>
                  <div style={S.benefitTitle}>{b.title}</div>
                  <p style={S.benefitDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* FAQ */}
      <section style={S.faqSection}>
        <div style={S.faqInner}>
          <div style={{ ...S.secHead, marginBottom: 40 }}>
            <p style={S.label}>Common Questions</p>
            <h2 style={{ ...S.h2, textAlign: "center" }}>FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} style={S.faqItem}>
              <button className="faq-q" style={S.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={S.chev(openFaq === i)}>⌄</span>
              </button>
              {openFaq === i && <p style={S.faqA}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* CTA */}
      <section style={S.ctaSection}>
        <div style={S.ctaGlow} />
        <p style={S.label}>Begin Today</p>
        <h2 style={S.ctaTitle}>Start Your Musical Journey with Us</h2>
        <p style={S.ctaSub}>
          Book a free trial lesson. We'll assess where you are, explain our certification
          pathway, and match you with the perfect instructor.
        </p>
        <button className="cta-btn" style={S.ctaBtn}>Book a Free Trial →</button>
      </section>
    </div>
  );
}