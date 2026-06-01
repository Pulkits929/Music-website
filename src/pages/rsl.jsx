import { useState } from "react";
import { useParams } from "react-router-dom";

const gold = "#C9A84C";
const goldLight = "#F5C842";
const dark = "#0d0d0d";
const darkCard = "#130f0a";
const white = "#ffffff";
const muted = "#b0a090";
const accentRed = "#3d1a10"; // RSL's rock/electric energy

const certTabs = ["RSL", "Trinity", "ABRSM", "ABGMVM", "ISTD", "Spardha"];

const instruments = [
  { icon: "🎸", name: "Electric Guitar" },
  { icon: "🎸", name: "Acoustic Guitar" },
  { icon: "🥁", name: "Drums" },
  { icon: "🎹", name: "Keyboards" },
  { icon: "🎤", name: "Vocals" },
  { icon: "🎸", name: "Bass Guitar" },
  { icon: "🎵", name: "Music Production" },
  { icon: "📝", name: "Music Theory" },
];

const grades = ["Debut", "Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8"];

const examTypes = [
  {
    title: "Grade Exam",
    icon: "🏆",
    desc: "A comprehensive performance-based exam including free choice pieces, technical exercises, and supporting tests. The most holistic RSL qualification.",
    recommended: true,
  },
  {
    title: "Performance Certificate",
    icon: "🎭",
    desc: "Performance-only certification based on a set of pieces. No technical work or supporting tests — perfect if you want to showcase your repertoire.",
    recommended: false,
  },
];

const faqs = [
  {
    q: "What makes RSL different from Trinity and ABRSM?",
    a: "Rockschool (RSL) focuses on contemporary and popular music — rock, pop, blues, jazz, and funk. If your child loves modern music rather than classical repertoire, RSL is likely the best fit. Trinity and ABRSM are more classical in approach.",
  },
  {
    q: "Should I choose a Performance Certificate or a Grade Exam?",
    a: "We recommend the Grade Exam for a holistic assessment. It covers performance pieces, technical exercises, and supporting tests, giving you a well-rounded certification. A Performance Certificate is great if you want recognition purely for your performance ability.",
  },
  {
    q: "Can I appear for Grade 3 without appearing for Grade 2?",
    a: "Yes — RSL has no prerequisite grade requirement. You can appear for any grade based on your current skill level. Our instructors will assess you and recommend the best starting grade.",
  },
  {
    q: "Does Harmonic Studio prepare for all RSL instruments and grades?",
    a: "Yes, our teachers are qualified to prepare students for all RSL grades across Guitar, Drums, Keyboards, Vocals, Bass, and Music Theory. We'll guide you from Debut level all the way through Grade 8.",
  },
];

const S = {
  page: { background: dark, minHeight: "100vh", fontFamily: "'Cormorant Garamond','Georgia',serif", color: white, overflowX: "hidden" },
  hero: { position: "relative", width: "100%", minHeight: 420, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(135deg,#0d0d0d 0%,#1a0d08 50%,#0d0d0d 100%)", padding: "80px 24px 60px" },
  heroGlow: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(180,60,30,0.12) 0%,rgba(201,168,76,0.07) 50%,transparent 70%)", pointerEvents: "none" },
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
  instSection: { background: "linear-gradient(180deg,#150d08 0%,#0d0d0d 100%)", padding: "70px 32px" },
  instInner: { maxWidth: 1100, margin: "0 auto" },
  secHead: { textAlign: "center", marginBottom: 50 },
  instGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 16 },
  instCard: { background: darkCard, border: "1px solid rgba(180,60,30,0.25)", borderRadius: 14, padding: "24px 16px", textAlign: "center", transition: "border-color 0.25s,transform 0.25s" },
  instIcon: { fontSize: 36, marginBottom: 10, display: "block" },
  instName: { fontSize: 14, fontFamily: "'Montserrat',sans-serif", fontWeight: 500, color: white, lineHeight: 1.4 },
  gradesSection: { padding: "70px 32px", maxWidth: 1100, margin: "0 auto" },
  gradesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))", gap: 14, marginTop: 40 },
  gradeCard: (a) => ({ background: a ? `linear-gradient(135deg,${gold},#8B6914)` : "rgba(255,255,255,0.03)", border: `1px solid ${a ? gold : "rgba(201,168,76,0.2)"}`, borderRadius: 12, padding: "18px 10px", textAlign: "center", cursor: "pointer", transition: "all 0.25s" }),
  gradeLabel: (a) => ({ fontSize: 13, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, color: a ? dark : gold, letterSpacing: "0.05em", display: "block", marginBottom: 4 }),
  gradeRibbon: { fontSize: 20, display: "block" },
  examSection: { background: "#0f0805", padding: "70px 32px" },
  examInner: { maxWidth: 1100, margin: "0 auto" },
  examGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 40 },
  examCard: (rec) => ({ background: darkCard, border: `1px solid ${rec ? "rgba(201,168,76,0.4)" : "rgba(180,60,30,0.25)"}`, borderRadius: 18, padding: "36px 32px", position: "relative", transition: "all 0.25s" }),
  examBadge: { position: "absolute", top: 20, right: 20, background: gold, color: dark, borderRadius: 20, padding: "4px 12px", fontSize: 11, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, letterSpacing: "0.05em" },
  examTitle: { fontSize: "1.3rem", fontWeight: 700, color: goldLight, marginBottom: 16, fontFamily: "'Cormorant Garamond',serif" },
  examList: { listStyle: "none", padding: 0, margin: 0 },
  examItem: { display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12, fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "0.9rem", color: muted, lineHeight: 1.6 },
  dot: { width: 6, height: 6, borderRadius: "50%", background: gold, flexShrink: 0, marginTop: 7 },
  faqSection: { background: "#0f0805", padding: "70px 32px" },
  faqInner: { maxWidth: 800, margin: "0 auto" },
  faqItem: { borderBottom: "1px solid rgba(201,168,76,0.15)" },
  faqQ: { width: "100%", background: "none", border: "none", textAlign: "left", padding: "22px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, color: white, fontSize: "1rem", fontFamily: "'Montserrat',sans-serif", fontWeight: 500 },
  faqA: { fontFamily: "'Montserrat',sans-serif", fontWeight: 300, fontSize: "0.9rem", color: muted, lineHeight: 1.8, paddingBottom: 20 },
  chev: (o) => ({ color: gold, fontSize: 20, transition: "transform 0.25s", transform: o ? "rotate(180deg)" : "rotate(0)", flexShrink: 0 }),
  ctaSection: { padding: "90px 32px", textAlign: "center", background: "linear-gradient(180deg,#0d0d0d,#150d08,#0d0d0d)", position: "relative", overflow: "hidden" },
  ctaGlow: { position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 200, background: "radial-gradient(ellipse,rgba(180,60,30,0.15) 0%,rgba(201,168,76,0.06) 50%,transparent 70%)", pointerEvents: "none" },
  ctaTitle: { fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: goldLight, marginBottom: 16, fontStyle: "italic" },
  ctaSub: { fontSize: "1rem", color: muted, fontFamily: "'Montserrat',sans-serif", fontWeight: 300, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 },
  ctaBtn: { display: "inline-block", padding: "16px 44px", background: `linear-gradient(135deg,${goldLight},${gold})`, color: dark, borderRadius: 40, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", border: "none", transition: "transform 0.2s,box-shadow 0.2s", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" },
};

export default function RSLCertification() {
  const [activeGrade, setActiveGrade] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .inst-card:hover { border-color: rgba(201,168,76,0.55) !important; transform: translateY(-4px); }
        .grade-card:hover { border-color: rgba(201,168,76,0.6) !important; transform: translateY(-2px); }
        .cta-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 14px 40px rgba(201,168,76,0.4) !important; }
        .faq-q:hover { color: #F5C842 !important; }
        .tab-btn:hover { border-color: rgba(201,168,76,0.6) !important; background: rgba(201,168,76,0.08) !important; }
        .exam-card:hover { transform: translateY(-3px); }
      `}</style>

      {/* Hero */}
      <section style={S.hero}>
        <div style={S.heroGlow} />
        <div style={S.heroContent}>
          <p style={S.eyebrow}>International Certification</p>
          <h1 style={S.heroTitle}>Rockschool (RSL)</h1>
          <p style={S.heroSub}>
            The world's leading contemporary music exam board — built for rock, pop,
            blues, funk, and everything in between. Over 650,000 exams taken annually
            in 60+ countries.
          </p>
          <div style={S.tabBar}>
            {certTabs.map((t) => (
              <button key={t} className="tab-btn" style={S.tab(t === "RSL")}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* Intro + Badge */}
      <div style={S.intro}>
        <div>
          <p style={S.label}>About RSL</p>
          <h2 style={S.h2}>Contemporary Music. World-Class Recognition.</h2>
          <p style={S.body}>
            Rockschool (RSL Awards) was founded to provide internationally recognised
            qualifications in contemporary music — the genres students actually love.
            From electric guitar to music production, RSL exams are accredited by Ofqual
            and recognised by UCAS, making them highly valuable for students pursuing
            music further education.
          </p>
          <br />
          <p style={S.body}>
            At Harmonic Studio, we prepare students for all RSL grades across Guitar,
            Drums, Keyboards, Vocals, and Bass — with a focus on the music that
            inspires them most.
          </p>
        </div>
        <div style={S.badgeWrap}>
          {/* RSL — Rock/electric energy badge */}
          <svg viewBox="0 0 340 340" style={{ width: "100%", maxWidth: 320, filter: "drop-shadow(0 0 40px rgba(180,60,30,0.4))" }}>
            <defs>
              <radialGradient id="rslgrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1a0e08" />
                <stop offset="100%" stopColor="#0d0a06" />
              </radialGradient>
            </defs>
            <circle cx="170" cy="170" r="160" fill="none" stroke={gold} strokeWidth="2" opacity="0.35" />
            <circle cx="170" cy="170" r="148" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.2" />
            <circle cx="170" cy="170" r="145" fill="url(#rslgrad)" />
            {/* Lightning bolt - RSL rock energy */}
            <path d="M185,65 L150,155 L172,155 L155,245 L200,145 L178,145 Z" fill={gold} fillOpacity="0.15" stroke={gold} strokeWidth="1.5" opacity="0.7" />
            {/* Outer pentagon */}
            <polygon points="170,50 255,110 225,210 115,210 85,110" fill="none" stroke={gold} strokeWidth="1" opacity="0.2" />
            {/* RSL monogram */}
            <text x="170" y="178" textAnchor="middle" fontFamily="Cormorant Garamond,serif" fontSize="60" fontWeight="700" fill={goldLight} opacity="0.9">RSL</text>
            <text x="170" y="220" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="10" fontWeight="600" fill={gold} letterSpacing="5">ROCKSCHOOL</text>
            <text x="170" y="238" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="400" fill={muted} letterSpacing="2">AWARDS</text>
            <rect x="95" y="250" width="150" height="24" rx="4" fill={gold} fillOpacity="0.1" />
            <text x="170" y="266" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill={gold} letterSpacing="2">OFQUAL ACCREDITED</text>
            {[0,45,90,135,180,225,270,315].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              return <circle key={i} cx={170 + 155 * Math.cos(rad)} cy={170 + 155 * Math.sin(rad)} r="3" fill={gold} opacity="0.4" />;
            })}
          </svg>
        </div>
      </div>

      <div style={S.divider} />

      {/* Instruments */}
      <section style={S.instSection}>
        <div style={S.instInner}>
          <div style={S.secHead}>
            <p style={S.label}>What We Offer</p>
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
        </div>
      </section>

      <div style={S.divider} />

      {/* Grades */}
      <section style={S.gradesSection}>
        <div style={S.secHead}>
          <p style={S.label}>Levels</p>
          <h2 style={S.h2}>9 Grades — From Debut to Grade 8</h2>
          <p style={{ ...S.body, maxWidth: 520, margin: "10px auto 0", textAlign: "center" }}>
            RSL starts at Debut level for complete beginners and goes all the way to Grade 8,
            the professional standard. No prerequisite grade needed to enter any level.
          </p>
        </div>
        <div style={S.gradesGrid}>
          {grades.map((g, i) => (
            <div key={i} className="grade-card" style={S.gradeCard(activeGrade === i)} onClick={() => setActiveGrade(activeGrade === i ? null : i)}>
              <span style={S.gradeRibbon}>{i === 0 ? "⭐" : "🎖️"}</span>
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
            <p style={S.label}>Assessment Paths</p>
            <h2 style={S.h2}>Choose Your Exam Format</h2>
          </div>
          <div style={S.examGrid}>
            {examTypes.map((e, i) => (
              <div key={i} className="exam-card" style={S.examCard(e.recommended)}>
                {e.recommended && <span style={S.examBadge}>Recommended</span>}
                <div style={{ fontSize: 32, marginBottom: 16 }}>{e.icon}</div>
                <div style={S.examTitle}>{e.title}</div>
                <p style={{ ...S.body, fontSize: "0.9rem" }}>{e.desc}</p>
                {e.recommended && (
                  <ul style={{ ...S.examList, marginTop: 20 }}>
                    {["Performance Pieces — contemporary repertoire", "Technical Exercises — instrument-specific drills", "Supporting Tests — ear training & quick study"].map((item, j) => (
                      <li key={j} style={S.examItem}><span style={S.dot} />{item}</li>
                    ))}
                  </ul>
                )}
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
        <p style={S.label}>Start Your Journey</p>
        <h2 style={S.ctaTitle}>Ready to Rock Your RSL Certification?</h2>
        <p style={S.ctaSub}>
          Book a free trial with our qualified instructors. We'll assess your level
          and find your perfect RSL starting grade.
        </p>
        <button className="cta-btn" style={S.ctaBtn}>Book a Free Trial →</button>
      </section>
    </div>
  );
}