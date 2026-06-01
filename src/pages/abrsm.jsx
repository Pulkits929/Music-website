import { useState } from "react";

const gold = "#C9A84C";
const goldLight = "#F5C842";
const dark = "#0d0d0d";
const darkCard = "#12100a";
const white = "#ffffff";
const muted = "#b0a090";
const accentBlue = "#2a3a5c"; // ABRSM's classical blue undertone

const certTabs = ["RSL", "Trinity", "ABRSM", "ABGMVM", "ISTD", "Spardha"];

const instruments = [
  { icon: "🎹", name: "Piano" },
  { icon: "🎻", name: "Violin" },
  { icon: "🎸", name: "Guitar" },
  { icon: "🎺", name: "Trumpet" },
  { icon: "🎷", name: "Saxophone" },
  { icon: "🎤", name: "Singing" },
  { icon: "🎹", name: "Electronic Keyboard" },
  { icon: "🪗", name: "Music Theory" },
];

const grades = ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8"];

const examTypes = [
  {
    title: "Graded Music Exam",
    icon: "🎓",
    desc: "A full assessment covering performance pieces, scales & arpeggios, sight-reading, and aural tests — the gold standard for classical music evaluation.",
  },
  {
    title: "Performance Grade",
    icon: "🎭",
    desc: "A performance-only assessment ideal for students who want recognition for their repertoire without the theory and aural components.",
  },
  {
    title: "Music Theory",
    icon: "📝",
    desc: "ABRSM's theory exams (Grades 1–8) are taken online and form an essential foundation for the higher practical grades.",
  },
];

const faqs = [
  {
    q: "Is ABRSM right for classical music students?",
    a: "ABRSM is widely considered the benchmark for classical music education. Its graded exams are recognised by universities, conservatoires, and music institutions worldwide, making it ideal for students pursuing a serious classical path.",
  },
  {
    q: "Do I need Grade 5 Theory to take Grade 6 practical?",
    a: "Yes — ABRSM requires candidates to have passed Grade 5 Music Theory (or an equivalent) before entering Grades 6, 7, or 8 practical exams. Our teachers will help you prepare for theory alongside your practical grades.",
  },
  {
    q: "What is the difference between a Graded Exam and a Performance Grade?",
    a: "A Graded Exam assesses performance, scales, sight-reading, and aural skills holistically. A Performance Grade assesses only your chosen pieces — ideal for students who want to showcase repertoire without the full exam breadth.",
  },
  {
    q: "Does Harmonic Studio prepare for ABRSM Theory as well?",
    a: "Absolutely. Our instructors are qualified to prepare students for both practical and theory exams across all ABRSM grades.",
  },
];

const S = {
  page: { background: dark, minHeight: "100vh", fontFamily: "'Cormorant Garamond','Georgia',serif", color: white, overflowX: "hidden" },
  hero: { position: "relative", width: "100%", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: `linear-gradient(135deg, #0a0c14 0%, #0d0d0d 50%, #0a0c14 100%)`, padding: "80px 24px 60px" },
  heroGlow: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: `radial-gradient(ellipse, rgba(42,58,92,0.35) 0%, rgba(201,168,76,0.06) 50%, transparent 70%)`, pointerEvents: "none" },
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
  instSection: { background: "linear-gradient(180deg,#0a0c14 0%,#0d0d0d 100%)", padding: "70px 32px" },
  instInner: { maxWidth: 1100, margin: "0 auto" },
  secHead: { textAlign: "center", marginBottom: 50 },
  instGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 16 },
  instCard: { background: darkCard, border: "1px solid rgba(42,58,92,0.5)", borderRadius: 14, padding: "24px 16px", textAlign: "center", transition: "border-color 0.25s,transform 0.25s" },
  instIcon: { fontSize: 36, marginBottom: 10, display: "block" },
  instName: { fontSize: 14, fontFamily: "'Montserrat',sans-serif", fontWeight: 500, color: white, lineHeight: 1.4 },
  gradesSection: { padding: "70px 32px", maxWidth: 1100, margin: "0 auto" },
  gradesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))", gap: 14, marginTop: 40 },
  gradeCard: (a) => ({ background: a ? `linear-gradient(135deg,${gold},#8B6914)` : "rgba(255,255,255,0.03)", border: `1px solid ${a ? gold : "rgba(201,168,76,0.2)"}`, borderRadius: 12, padding: "18px 10px", textAlign: "center", cursor: "pointer", transition: "all 0.25s" }),
  gradeLabel: (a) => ({ fontSize: 13, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: a ? dark : gold, letterSpacing: "0.05em", display: "block", marginBottom: 4 }),
  gradeRibbon: { fontSize: 20, display: "block" },
  examSection: { background: "#08090f", padding: "70px 32px" },
  examInner: { maxWidth: 1100, margin: "0 auto" },
  examGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24, marginTop: 40 },
  examCard: { background: darkCard, border: "1px solid rgba(42,58,92,0.6)", borderRadius: 18, padding: "32px 28px" },
  examTitle: { fontSize: "1.2rem", fontWeight: 700, color: goldLight, marginBottom: 12, fontFamily: "'Cormorant Garamond',serif" },
  examDesc: { fontSize: "0.9rem", color: muted, lineHeight: 1.75, fontFamily: "'Montserrat',sans-serif", fontWeight: 300 },
  note: { marginTop: 40, padding: "20px 24px", background: "rgba(42,58,92,0.2)", border: "1px solid rgba(42,58,92,0.5)", borderLeft: `3px solid ${gold}`, borderRadius: 10, fontFamily: "'Montserrat',sans-serif", fontSize: "0.9rem", color: muted, lineHeight: 1.7 },
  faqSection: { background: "#0a0c14", padding: "70px 32px" },
  faqInner: { maxWidth: 800, margin: "0 auto" },
  faqItem: { borderBottom: "1px solid rgba(201,168,76,0.15)" },
  faqQ: { width: "100%", background: "none", border: "none", textAlign: "left", padding: "22px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: white, fontSize: "1rem", fontFamily: "'Montserrat',sans-serif", fontWeight: 500 },
  faqA: { fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "0.9rem", color: muted, lineHeight: 1.8, paddingBottom: 20 },
  chev: (o) => ({ color: gold, fontSize: 20, transition: "transform 0.25s", transform: o ? "rotate(180deg)" : "rotate(0)", flexShrink: 0 }),
  ctaSection: { padding: "90px 32px", textAlign: "center", background: "linear-gradient(180deg,#0d0d0d,#0a0c14,#0d0d0d)", position: "relative", overflow: "hidden" },
  ctaGlow: { position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 200, background: "radial-gradient(ellipse,rgba(42,58,92,0.3) 0%,rgba(201,168,76,0.05) 50%,transparent 70%)", pointerEvents: "none" },
  ctaTitle: { fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: goldLight, marginBottom: 16, fontStyle: "italic" },
  ctaSub: { fontSize: "1rem", color: muted, fontFamily: "'Montserrat',sans-serif", fontWeight: 300, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", padding: "16px 44px", background: `linear-gradient(135deg,${goldLight},${gold})`, color: dark, borderRadius: 40, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", border: "none", transition: "transform 0.2s,box-shadow 0.2s", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" },
};

export default function ABRSMCertification() {
  const [activeGrade, setActiveGrade] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .inst-card:hover { border-color: rgba(201,168,76,0.5) !important; transform: translateY(-4px); }
        .grade-card:hover { border-color: rgba(201,168,76,0.6) !important; transform: translateY(-2px); }
        .cta-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 14px 40px rgba(201,168,76,0.4) !important; }
        .faq-q:hover { color: #F5C842 !important; }
        .tab-btn:hover { border-color: rgba(201,168,76,0.6) !important; background: rgba(201,168,76,0.08) !important; }
        .exam-card:hover { border-color: rgba(201,168,76,0.35) !important; transform: translateY(-3px); transition: all 0.25s; }
      `}</style>

      {/* Hero */}
      <section style={S.hero}>
        <div style={S.heroGlow} />
        <div style={S.heroContent}>
          <p style={S.eyebrow}>International Certification</p>
          <h1 style={S.heroTitle}>ABRSM</h1>
          <p style={S.heroSub}>
            Associated Board of the Royal Schools of Music — the world's leading music
            exam board, trusted by over 650,000 candidates annually in 93 countries.
          </p>
          <div style={S.tabBar}>
            {certTabs.map((t) => (
              <button key={t} className="tab-btn" style={S.tab(t === "ABRSM")}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* Intro + Badge */}
      <div style={S.intro}>
        <div>
          <p style={S.label}>About ABRSM</p>
          <h2 style={S.h2}>The Royal Standard of Music Education</h2>
          <p style={S.body}>
            Founded in 1889 by the principals of the Royal Academy and Royal College of Music,
            ABRSM is one of the most recognised and respected music exam boards in the world.
            Its rigorous graded exams are endorsed by universities, conservatoires, and music
            schools globally — making ABRSM qualifications a powerful credential for any
            serious musician.
          </p>
          <br />
          <p style={S.body}>
            At Harmonic Studio, our instructors are fully qualified to prepare students for
            both ABRSM Practical Graded Exams and Music Theory exams across all grades.
          </p>
        </div>
        <div style={S.badgeWrap}>
          {/* ABRSM — Royal Crest style badge */}
          <svg viewBox="0 0 340 340" style={{ width: "100%", maxWidth: 320, filter: "drop-shadow(0 0 40px rgba(42,58,92,0.6))" }}>
            <defs>
              <radialGradient id="abgrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0d1526" />
                <stop offset="100%" stopColor="#080a10" />
              </radialGradient>
            </defs>
            <circle cx="170" cy="170" r="160" fill="none" stroke={gold} strokeWidth="2" opacity="0.35" />
            <circle cx="170" cy="170" r="148" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.2" />
            <circle cx="170" cy="170" r="145" fill="url(#abgrad)" />
            {/* Crown */}
            <path d="M130,110 L140,80 L170,100 L200,80 L210,110 Z" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.8" />
            <path d="M125,110 L215,110 L210,130 L130,130 Z" fill={gold} fillOpacity="0.15" stroke={gold} strokeWidth="1" opacity="0.6" />
            {/* Shield */}
            <path d="M150,138 L190,138 L195,180 L170,200 L145,180 Z" fill={gold} fillOpacity="0.08" stroke={gold} strokeWidth="1.2" opacity="0.5" />
            {/* Monogram */}
            <text x="170" y="175" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="48" fontWeight="700" fill={goldLight} opacity="0.95">AB</text>
            <text x="170" y="220" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="600" fill={gold} letterSpacing="4">ABRSM</text>
            <text x="170" y="238" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="400" fill={muted} letterSpacing="2">ROYAL SCHOOLS OF MUSIC</text>
            <rect x="95" y="250" width="150" height="24" rx="4" fill={gold} fillOpacity="0.1" />
            <text x="170" y="266" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill={gold} letterSpacing="2">EST. 1889</text>
            {/* Laurel lines */}
            <line x1="80" y1="170" x2="120" y2="170" stroke={gold} strokeWidth="0.5" opacity="0.3" />
            <line x1="220" y1="170" x2="260" y2="170" stroke={gold} strokeWidth="0.5" opacity="0.3" />
            {[0,40,80,120,160,200,240,280,320].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return <circle key={i} cx={170 + 155 * Math.cos(rad)} cy={170 + 155 * Math.sin(rad)} r="2.5" fill={gold} opacity="0.45" />;
            })}
          </svg>
        </div>
      </div>

      <div style={S.divider} />

      {/* Instruments */}
      <section style={S.instSection}>
        <div style={S.instInner}>
          <div style={S.secHead}>
            <p style={S.label}>Specialisations</p>
            <h2 style={S.h2}>Instruments Offered by ABRSM</h2>
          </div>
          <div style={S.instGrid}>
            {instruments.map((inst, i) => (
              <div key={i} className="inst-card" style={S.instCard}>
                <span style={S.instIcon}>{inst.icon}</span>
                <span style={S.instName}>{inst.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* Grades */}
      <section style={S.gradesSection}>
        <div style={S.secHead}>
          <p style={S.label}>Levels</p>
          <h2 style={S.h2}>8 Grades of Excellence</h2>
          <p style={{ ...S.body, maxWidth: 520, margin: "10px auto 0", textAlign: "center" }}>
            ABRSM spans Grade 1 through Grade 8, each with progressively advanced
            repertoire, technical demands, and supporting tests.
          </p>
        </div>
        <div style={S.gradesGrid}>
          {grades.map((g, i) => (
            <div key={i} className="grade-card" style={S.gradeCard(activeGrade === i)} onClick={() => setActiveGrade(activeGrade === i ? null : i)}>
              <span style={S.gradeRibbon}>🎖️</span>
              <span style={S.gradeLabel(activeGrade === i)}>{g}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* Exam Types */}
      <section style={S.examSection}>
        <div style={S.examInner}>
          <div style={S.secHead}>
            <p style={S.label}>Assessment Options</p>
            <h2 style={S.h2}>ABRSM Exam Types</h2>
          </div>
          <div style={S.examGrid}>
            {examTypes.map((e, i) => (
              <div key={i} className="exam-card" style={S.examCard}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{e.icon}</div>
                <div style={S.examTitle}>{e.title}</div>
                <p style={S.examDesc}>{e.desc}</p>
              </div>
            ))}
          </div>
          <div style={S.note}>
            📌 <strong style={{ color: goldLight }}>Important:</strong> Candidates wishing to enter Grades 6, 7, or 8 practical exams must first achieve
            ABRSM Grade 5 Theory (or equivalent). Our teachers will help you plan both your practical and theory journey.
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
        <p style={S.label}>Start Your Journey</p>
        <h2 style={S.ctaTitle}>Ready to Earn Your ABRSM Certification?</h2>
        <p style={S.ctaSub}>
          Book a free trial with our qualified instructors. We'll assess your level
          and chart your path from Grade 1 through Grade 8.
        </p>
        <button className="cta-btn" style={S.ctaBtn}>Book a Free Trial →</button>
      </section>
    </div>
  );
}