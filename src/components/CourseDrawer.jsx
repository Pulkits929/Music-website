import { useState, useEffect, useRef, useCallback } from "react";

// ─── Palette / tokens ────────────────────────────────────────────────────────
const G = "#c9a227";
const G2 = "#e0b730";
const DARK = "#0a0a0f";
const CARD_BG = "rgba(255,255,255,0.04)";
const BORDER = "rgba(255,255,255,0.09)";
const BORDER_GOLD = "rgba(201,162,39,0.35)";
const TEXT_DIM = "#7a7a8a";
const TEXT_MID = "#b0b0b8";
const TEXT_BRIGHT = "#ffffff";

// ─── Data ────────────────────────────────────────────────────────────────────
const INSTRUMENTS = ["Piano","Acoustic Guitar","Drums","Tabla"];
const LEVELS = ["Foundation","Beginner","Intermediate","Advanced"];

const CERT_BODIES = {
  rockschool: { name: "Rockschool UK", abbr: "RSL", color: "#1a6b3a" },
  trinity: { name: "Trinity College London", abbr: "TCL", color: "#1f3b8a" },
  abrsm: { name: "ABRSM", abbr: "AB", color: "#7a2020" },
  spardha: { name: "Spardha Certified", abbr: "SP", color: "#5c3a1a" },
  harmonic: { name: "Harmonic Studio", abbr: "HS", color: "#1a5c3a" },
};

const PACKAGES = [
  { label: "6 Months", months: 6, sessions: 24, perSession: 450, popular: false },
  { label: "12 Months", months: 12, sessions: 48, perSession: 430, popular: true },
  { label: "18 Months", months: 18, sessions: 72, perSession: 410, popular: false },
];

const COMMON_FAQS = [
  { q: "Do I need prior experience?", a: "No prior experience is needed for Foundation level. For Beginner and above, a short diagnostic assessment helps us place you correctly." },
  { q: "What equipment do I need?", a: "You need the relevant instrument and a stable internet connection. Our counsellor will guide you on the right model to purchase based on your budget once you enrol." },
  { q: "Are lessons 1-on-1?", a: "Yes. All lessons at Harmonic Learning Studio are personalised 1:1 sessions with your dedicated teacher via Zoom, Google Meet, or Microsoft Teams." },
  { q: "Will I receive a certificate?", a: "Yes. On successful completion you receive a certificate from Harmonic Learning Studio. For graded exam courses, you'll also sit for the respective UK certification board exam." },
  { q: "Can I reschedule a lesson?", a: "Yes, with 24 hours' notice. Our scheduling system allows flexible rescheduling at no extra charge." },
];

const COURSES = {
  Piano: {
    Foundation: [
      {
        logo: "🎹", logoBg: "#1a3a5c",
        title: "Spardha Piano Method Book 1",
        subtitle: "Foundation Level · Spardha Certified",
        tagline: "The perfect launchpad for curious beginners",
        desc: "If your child is curious about playing the piano, this Foundation course is the perfect place to begin their musical adventure. Our friendly teachers guide students through the foundational concepts — reading sheet music, correct posture, and important music skills — turning initial interest into a lifelong passion.",
        duration: "4–6 Months", cert: "Spardha Certificate", format: "1:1 with Teacher", access: "Mobile & Desktop", level: "Foundation",
        price: 350, certBodies: ["spardha"],
        prereqs: ["Interest and willingness to learn the Piano", "Access to a piano or digital keyboard (61 keys minimum)"],
        topics: ["Basic elements of piano — keys, notes, and layout","Posture, finger placement, and hand position","Beats, rhythm, and time signatures","Dynamics, slurs, tie notes, and dotted rhythms","Staff notation: clef, note values, rests","Songs in Middle C, C, and G positions","Basic chords and introductory music theory"],
        outcomes: ["Identify all notes on the instrument by name","Play basic rhythms and pieces with steady pulse","Read sheet music and staff notations independently","Understand basic touch and dynamic controls","Play simple 2 and 4-note harmonies using ties and dotted rhythms"],
        faqs: COMMON_FAQS,
      },
      {
        logo: "🎵", logoBg: "#3b1f5c",
        title: "Trinity Initial Piano",
        subtitle: "Foundation Level · Trinity College London",
        tagline: "Your first internationally recognised milestone",
        desc: "The Trinity Initial grade introduces young learners to formal music education through a structured, encouraging framework. Covering basic scales, sight-reading, and two short performance pieces, this course prepares students for their first official graded examination with Trinity College London.",
        duration: "4–6 Months", cert: "Trinity College London", format: "1:1 with Teacher", access: "Mobile & Desktop", level: "Foundation",
        price: 450, certBodies: ["trinity", "spardha"],
        prereqs: ["No prior piano experience required","Access to a piano or keyboard (61 keys minimum)","Commitment of at least 20 minutes practice daily"],
        topics: ["Introduction to the keyboard layout","Simple five-finger exercises and scales","Two Trinity Initial performance pieces","Basic music reading — note names on the stave","Rhythm, clapping, and pulse exercises","Aural awareness: call and response"],
        outcomes: ["Perform two Trinity Initial pieces confidently","Read basic notation on treble clef","Demonstrate steady pulse and accurate rhythm","Pass Trinity Initial examination (optional)","Build confidence performing in front of an examiner"],
        faqs: COMMON_FAQS,
      },
    ],
    Beginner: [
      {
        logo: "RSL", logoBg: "#1a5c3a",
        title: "Rockschool Piano Debut",
        subtitle: "Beginner Level · Rockschool London",
        tagline: "Where classical foundation meets contemporary style",
        desc: "The Rockschool Piano Debut exam is perfect for the student who has developed some foundational skills and techniques. This course blends popular music styles with classical technique, helping students develop a well-rounded musical vocabulary while preparing for an internationally recognised UK certification.",
        duration: "6–8 Months", cert: "Rockschool + Spardha", format: "1:1 with Teacher", access: "Mobile & Desktop", level: "Beginner",
        price: 450, certBodies: ["rockschool", "spardha"],
        prereqs: ["Completed Foundation level or 6 months of prior learning","Comfortable with both hands independently on the keyboard","Basic understanding of note names and rhythms"],
        topics: ["Three Rockschool Debut performance pieces (popular/rock styles)","Technical exercises: scales, arpeggios in C and G","Supporting tests: sight-reading, improvisation & interpretation","Music theory at Debut standard","Warm-up routines and practice strategies","Performance skills and managing exam nerves"],
        outcomes: ["Perform 3 pieces from the Rockschool Debut syllabus","Execute scales and arpeggios with correct fingering","Pass the Rockschool Debut examination (optional)","Sight-read a short piece at Debut standard","Improvise a short phrase over a given backing track"],
        faqs: COMMON_FAQS,
      },
      {
        logo: "TR", logoBg: "#2e52a0",
        title: "Trinity Grade 1 Piano",
        subtitle: "Beginner Level · Trinity College London",
        tagline: "The first rung of the global certification ladder",
        desc: "Trinity Grade 1 is the first formal certification grade and a significant milestone for any young musician. This course prepares students for the Trinity Piano Grade 1 examination, covering two performance pieces, technical work, scales, and aural tests in a structured yet encouraging environment.",
        duration: "6–8 Months", cert: "Trinity College London", format: "1:1 with Teacher", access: "Mobile & Desktop", level: "Beginner",
        price: 450, certBodies: ["trinity", "spardha"],
        prereqs: ["Completed Foundation course or equivalent","Able to read basic treble clef notation","Familiar with both hands on the keyboard"],
        topics: ["Two Trinity Grade 1 performance pieces","Technical work: five-finger exercises, C and G major scales","Sight-reading at Grade 1 standard","Aural tests: clap back rhythm, sing back phrase","Music theory: note values, basic key signatures","Introduction to musical expression and dynamics"],
        outcomes: ["Perform 2 Trinity Grade 1 pieces with expression","Play C major and G major scales hands separately","Demonstrate aural awareness through singing and clapping","Read and perform a short piece at sight","Pass Trinity Grade 1 (optional, with exam preparation sessions)"],
        faqs: COMMON_FAQS,
      },
    ],
    Intermediate: [
      {
        logo: "AB", logoBg: "#7a4a1a",
        title: "ABRSM Piano Grade 3–4",
        subtitle: "Intermediate Level · ABRSM",
        tagline: "A globally recognised benchmark of musical achievement",
        desc: "A globally recognised benchmark. Students learn advanced technique, expression, sight-reading, and aural skills required for ABRSM Grade 3 or 4 examinations. The Associated Board of the Royal Schools of Music certification is accepted by music colleges and universities worldwide as evidence of serious musical study.",
        duration: "8–12 Months", cert: "ABRSM Certificate", format: "1:1 with Teacher", access: "Mobile & Desktop", level: "Intermediate",
        price: 550, certBodies: ["abrsm", "spardha"],
        prereqs: ["Completed Beginner level or equivalent (Grade 1–2 standard)","Comfortable playing hands together in basic pieces","Basic music theory knowledge (note values, key signatures)"],
        topics: ["Three ABRSM Grade 3 or 4 repertoire pieces (A, B, and C lists)","Scales and arpeggios: major, minor, chromatic in 2 octaves","Sight-reading: reading and performing unseen music","Aural tests: interval recognition, cadence identification","Music theory aligned to Grade 5 (prerequisite for Grade 6+)","Dynamics, phrasing, pedalling technique"],
        outcomes: ["Perform 3 ABRSM pieces across different styles and periods","Play required scales and arpeggios from memory","Sight-read a short piece at Grade 3–4 standard","Pass ABRSM Grade 3 or 4 examination","Develop disciplined practice habits for long-term progress"],
        faqs: COMMON_FAQS,
      },
    ],
    Advanced: [
      {
        logo: "AB", logoBg: "#7a4a1a",
        title: "ABRSM Piano Grade 5–7",
        subtitle: "Advanced Level · ABRSM",
        tagline: "Concert-level performance meets academic rigour",
        desc: "For accomplished pianists seeking formal distinction. Covers complex repertoire spanning Baroque to contemporary, advanced aural skills, Music Theory Grade 5 (a prerequisite for ABRSM Grade 6 and above), and concert-level performance preparation. Ideal for students aspiring to conservatoire entry or music as a career.",
        duration: "12–18 Months", cert: "ABRSM Certificate", format: "1:1 with Teacher", access: "Mobile & Desktop", level: "Advanced",
        price: 650, certBodies: ["abrsm", "spardha"],
        prereqs: ["Completed Intermediate level or ABRSM Grade 4+","Music Theory Grade 5 (ABRSM requirement for Grade 6+)","Commitment of 45–60 mins practice daily"],
        topics: ["Three ABRSM repertoire pieces from Baroque, Classical, Romantic, Contemporary","Advanced scales: all major, minor, chromatic, broken chords — 4 octaves","Complex sight-reading at Grade 5–7 standard","Aural: interval, chord quality, style identification","Pedalling, voicing, colour, and expressive interpretation","Performance psychology and concert preparation"],
        outcomes: ["Perform 3 advanced pieces at a high musical standard","Demonstrate technical fluency across all required scales","Pass ABRSM Grade 5, 6, or 7 examination","Develop personal artistic interpretation and style","Build a performance-ready repertoire for recitals"],
        faqs: COMMON_FAQS,
      },
    ],
  },
};

// Generic course builder for other instruments
const makeCourse = (instrument, level, logo, logoBg, title, sub, certKeys, price) => ({
  logo, logoBg, title,
  subtitle: `${level} Level · ${sub}`,
  tagline: `Structured ${instrument} learning with international certification`,
  desc: `A comprehensive ${level.toLowerCase()}-level ${instrument} course designed to build genuine musical skill through structured learning, international certification preparation, and personalised 1:1 teaching. Each session is tailored to the individual student's pace, goals, and learning style.`,
  duration: level === "Foundation" ? "4–6 Months" : level === "Beginner" ? "6–8 Months" : level === "Intermediate" ? "8–12 Months" : "12–18 Months",
  cert: sub, format: "1:1 with Teacher", access: "Mobile & Desktop", level,
  price, certBodies: certKeys,
  prereqs: level === "Foundation" ? [`Interest in learning ${instrument}`, `Access to a ${instrument.toLowerCase()}`] : [`Completed Foundation level or equivalent`, `Basic familiarity with the instrument`, `Commitment of 20–30 mins daily practice`],
  topics: [`${instrument} fundamentals and technique`, `Scales, exercises, and technical development`, `Repertoire: 3 graded performance pieces`, `Sight-reading and music reading`, `Music theory at the appropriate grade level`, `Aural awareness and ear training`, `Performance skills and exam preparation`],
  outcomes: [`Perform graded repertoire confidently`, `Demonstrate technical proficiency on ${instrument}`, `Read notation at the appropriate grade standard`, `Prepare for and sit the relevant certification examination`, `Develop lifelong musical skills and love for the instrument`],
  faqs: COMMON_FAQS,
});

const REST_COURSES = {
  "Acoustic Guitar": {
    Foundation: [makeCourse("Acoustic Guitar","Foundation","🎸","#2d5c1a","Guitar Fundamentals – Open Chords","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Acoustic Guitar","Beginner","RS","#2d8a5e","Rockschool Guitar Debut","Rockschool London",["rockschool","spardha"],450), makeCourse("Acoustic Guitar","Beginner","TR","#2e52a0","Trinity Guitar Grade 1","Trinity College London",["trinity","spardha"],450)],
    Intermediate: [makeCourse("Acoustic Guitar","Intermediate","AB","#7a4a1a","ABRSM Guitar Grade 3–4","ABRSM",["abrsm","spardha"],550)],
    Advanced: [makeCourse("Acoustic Guitar","Advanced","RS","#2d8a8a","Rockschool Grade 5–6 Guitar","Rockschool London",["rockschool","spardha"],650)],
  },
  "Electric Guitar": {
    Foundation: [makeCourse("Electric Guitar","Foundation","⚡","#5c4a1a","Electric Guitar Basics","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Electric Guitar","Beginner","RS","#2d8a5e","Rockschool Electric Debut","Rockschool London",["rockschool","spardha"],450)],
    Intermediate: [makeCourse("Electric Guitar","Intermediate","RS","#2d8a8a","Rockschool Grade 2–3 Electric","Rockschool London",["rockschool","spardha"],550)],
    Advanced: [makeCourse("Electric Guitar","Advanced","RS","#8a2d5e","Rockschool Grade 5–6 Electric","Rockschool London",["rockschool","spardha"],650)],
  },
  Violin: {
    Foundation: [makeCourse("Violin","Foundation","🎻","#3a1f5c","Violin Foundation Course","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Violin","Beginner","TR","#2e52a0","Trinity Violin Grade 1","Trinity College London",["trinity","spardha"],450)],
    Intermediate: [makeCourse("Violin","Intermediate","AB","#7a4a1a","ABRSM Violin Grade 3–4","ABRSM",["abrsm","spardha"],550)],
    Advanced: [makeCourse("Violin","Advanced","AB","#7a4a1a","ABRSM Violin Grade 5–7","ABRSM",["abrsm","spardha"],650)],
  },
  "Electronic Keyboard": {
    Foundation: [makeCourse("Electronic Keyboard","Foundation","🎹","#1a3a5c","Keyboard Basics & Ear Training","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Electronic Keyboard","Beginner","SP","#8a2d2d","Keyboard to Piano Transition","Spardha Certified",["spardha"],450)],
    Intermediate: [makeCourse("Electronic Keyboard","Intermediate","TR","#2e52a0","Trinity Keyboard Grade 2–3","Trinity College London",["trinity","spardha"],550)],
    Advanced: [makeCourse("Electronic Keyboard","Advanced","TR","#2e52a0","Trinity Keyboard Grade 5+","Trinity College London",["trinity","spardha"],650)],
  },
  Ukulele: {
    Foundation: [makeCourse("Ukulele","Foundation","🎵","#3a5c1a","Ukulele Starter Pack","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Ukulele","Beginner","RS","#2d8a5e","Rockschool Ukulele Debut","Rockschool London",["rockschool","spardha"],450)],
    Intermediate: [makeCourse("Ukulele","Intermediate","RS","#2d8a8a","Rockschool Ukulele Grade 2–3","Rockschool London",["rockschool","spardha"],550)],
    Advanced: [makeCourse("Ukulele","Advanced","RS","#8a2d5e","Rockschool Ukulele Grade 5","Rockschool London",["rockschool","spardha"],650)],
  },
  Flute: {
    Foundation: [makeCourse("Flute","Foundation","🪈","#1a3a5c","Flute Foundation – First Tones","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Flute","Beginner","TR","#2e52a0","Trinity Flute Grade 1","Trinity College London",["trinity","spardha"],450)],
    Intermediate: [makeCourse("Flute","Intermediate","AB","#7a4a1a","ABRSM Flute Grade 3–4","ABRSM",["abrsm","spardha"],550)],
    Advanced: [makeCourse("Flute","Advanced","AB","#7a4a1a","ABRSM Flute Grade 5–7","ABRSM",["abrsm","spardha"],650)],
  },
  Tabla: {
    Foundation: [makeCourse("Tabla","Foundation","🥁","#7a4a1a","Tabla Foundation – Basic Bols","Spardha Certified",["spardha"],350)],
    Beginner: [makeCourse("Tabla","Beginner","SP","#8a2d2d","Tabla Beginner – Qaidas & Tihai","Spardha Certified",["spardha"],450)],
    Intermediate: [makeCourse("Tabla","Intermediate","HS","#2d8a5e","Tabla Intermediate – Relas & Gat","Harmonic Studio",["harmonic","spardha"],550)],
    Advanced: [makeCourse("Tabla","Advanced","HS","#5c3a8a","Tabla Advanced – Solo Recital","Harmonic Studio",["harmonic","spardha"],650)],
  },
};

const ALL_COURSES = { ...COURSES, ...REST_COURSES };

// ─── Sub-components ──────────────────────────────────────────────────────────
const Dot = ({ color = G }) => (
  <span style={{ display:"inline-block", width:5, height:5, borderRadius:"50%", background:color, margin:"0 8px 1px 0", flexShrink:0 }} />
);

const MetaPill = ({ icon, label, value }) => (
  <div style={{ display:"flex", flexDirection:"column", gap:3, padding:"10px 14px", background:"rgba(255,255,255,0.04)", borderRadius:10, border:`0.5px solid ${BORDER}`, flex:"1 1 120px" }}>
    <span style={{ fontSize:11, color:TEXT_DIM }}>{icon} {label}</span>
    <span style={{ fontSize:13, fontWeight:600, color:TEXT_BRIGHT }}>{value}</span>
  </div>
);

const FAQ = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom:`0.5px solid ${BORDER}` }}>
      <button onClick={() => setOpen(o => !o)} style={{ width:"100%", background:"none", border:"none", cursor:"pointer", padding:"14px 0", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, textAlign:"left" }}>
        <span style={{ fontSize:13, fontWeight:600, color:TEXT_BRIGHT, lineHeight:1.4 }}>{faq.q}</span>
        <span style={{ color:G, fontSize:18, flexShrink:0, transform: open ? "rotate(45deg)" : "none", transition:"transform 0.2s", lineHeight:1 }}>+</span>
      </button>
      {open && <p style={{ fontSize:13, color:TEXT_MID, lineHeight:1.7, paddingBottom:14, margin:0 }}>{faq.a}</p>}
    </div>
  );
};

// ─── Course Drawer ────────────────────────────────────────────────────────────
const CourseDrawer = ({ course, onClose }) => {
  const [activePackage, setActivePackage] = useState(1);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (course && scrollRef.current) scrollRef.current.scrollTop = 0;
    const handleKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [course, onClose]);

  const pkg = PACKAGES[activePackage];
  const total = pkg.sessions * pkg.perSession;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position:"fixed", inset:0, background:"rgba(0,0,0,0.72)", zIndex:100,
        opacity: course ? 1 : 0, pointerEvents: course ? "auto" : "none",
        transition:"opacity 0.3s ease", backdropFilter:"blur(2px)",
      }} />

      {/* Drawer panel */}
      <div style={{
        position:"fixed", top:0, right:0, bottom:0,
        width:"min(760px, 92vw)",
        background:"#0e0e18",
        borderLeft:`0.5px solid ${BORDER_GOLD}`,
        zIndex:101,
        display:"flex", flexDirection:"column",
        transform: course ? "translateX(0)" : "translateX(100%)",
        transition:"transform 0.36s cubic-bezier(0.32,0,0.2,1)",
        boxShadow:"-24px 0 80px rgba(0,0,0,0.7)",
      }}>
        {course && (
          <>
            {/* Scrollable body */}
            <div ref={scrollRef} style={{ flex:1, overflowY:"auto", scrollbarWidth:"thin", scrollbarColor:`${BORDER_GOLD} transparent` }}>

              {/* Header */}
              <div style={{ padding:"28px 32px 24px", borderBottom:`0.5px solid ${BORDER}`, position:"sticky", top:0, background:"#0e0e18", zIndex:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:16 }}>
                  <div style={{ display:"flex", gap:16, alignItems:"flex-start", flex:1 }}>
                    <div style={{ width:56, height:56, borderRadius:14, background:course.logoBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize: course.logo.length > 2 ? 14 : 24, fontWeight:800, color:"#fff", flexShrink:0 }}>
                      {course.logo}
                    </div>
                    <div>
                      <p style={{ fontSize:11, color:G, fontWeight:700, letterSpacing:1, textTransform:"uppercase", margin:"0 0 4px" }}>{course.subtitle}</p>
                      <h2 style={{ color:TEXT_BRIGHT, fontSize:20, fontWeight:800, margin:"0 0 4px", lineHeight:1.25 }}>{course.title}</h2>
                      <p style={{ color:TEXT_DIM, fontSize:13, margin:0, fontStyle:"italic" }}>{course.tagline}</p>
                    </div>
                  </div>
                  <button onClick={onClose} style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.06)", border:`0.5px solid ${BORDER}`, color:TEXT_MID, fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.12)"; e.currentTarget.style.color=TEXT_BRIGHT; }}
                    onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.color=TEXT_MID; }}>
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding:"28px 32px 100px" }}>

                {/* Meta pills */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:32 }}>
                  <MetaPill icon="⏱" label="Duration" value={course.duration} />
                  <MetaPill icon="👤" label="Format" value={course.format} />
                  <MetaPill icon="📊" label="Level" value={course.level} />
                  <MetaPill icon="🏅" label="Certificate" value="On completion" />
                  <MetaPill icon="💻" label="Access" value={course.access} />
                </div>

                {/* About */}
                <Section title="About the course">
                  <p style={{ color:TEXT_MID, fontSize:14, lineHeight:1.8, margin:0 }}>{course.desc}</p>
                </Section>

                {/* Prerequisites */}
                <Section title="Prerequisites">
                  {course.prereqs.map((p, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:0, marginBottom:8 }}>
                      <Dot />
                      <span style={{ color:TEXT_MID, fontSize:13, lineHeight:1.6 }}>{p}</span>
                    </div>
                  ))}
                </Section>

                {/* Topics + Outcomes side by side */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:32 }}>
                  <div>
                    <SectionHeading title="Topics covered" />
                    {course.topics.map((t, i) => (
                      <div key={i} style={{ display:"flex", alignItems:"flex-start", marginBottom:8 }}>
                        <Dot color={G} />
                        <span style={{ color:TEXT_MID, fontSize:12.5, lineHeight:1.6 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <SectionHeading title="Learning outcomes" />
                    {course.outcomes.map((o, i) => (
                      <div key={i} style={{ display:"flex", alignItems:"flex-start", marginBottom:8 }}>
                        <span style={{ color:G, fontSize:13, flexShrink:0, marginRight:8, marginTop:1 }}>✓</span>
                        <span style={{ color:TEXT_MID, fontSize:12.5, lineHeight:1.6 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packages */}
                <Section title="Select your package">
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:12 }}>
                    {PACKAGES.map((p, i) => (
                      <div key={i} onClick={() => setActivePackage(i)} style={{
                        position:"relative", padding:"18px 16px", borderRadius:14, cursor:"pointer",
                        border: activePackage === i ? `1.5px solid ${G}` : `0.5px solid ${BORDER}`,
                        background: activePackage === i ? "rgba(201,162,39,0.08)" : CARD_BG,
                        transition:"all 0.2s",
                      }}>
                        {p.popular && (
                          <div style={{ position:"absolute", top:-10, left:"50%", transform:"translateX(-50%)", background:G, color:"#000", fontSize:9, fontWeight:800, padding:"3px 10px", borderRadius:20, whiteSpace:"nowrap", letterSpacing:0.5 }}>MOST POPULAR</div>
                        )}
                        <p style={{ color: activePackage === i ? G : TEXT_DIM, fontSize:11, fontWeight:700, margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>{p.label}</p>
                        <p style={{ color:TEXT_BRIGHT, fontSize:22, fontWeight:800, margin:"0 0 2px" }}>₹{(p.sessions * p.perSession).toLocaleString("en-IN")}</p>
                        <p style={{ color:TEXT_DIM, fontSize:11, margin:"0 0 10px" }}>₹{p.perSession}/session incl. GST</p>
                        <div style={{ borderTop:`0.5px solid ${BORDER}`, paddingTop:10, display:"flex", flexDirection:"column", gap:4 }}>
                          <span style={{ fontSize:11, color:TEXT_MID }}>📅 {p.sessions} sessions total</span>
                          <span style={{ fontSize:11, color:TEXT_MID }}>⏱ 30 min each</span>
                          <span style={{ fontSize:11, color:TEXT_MID }}>👤 1:1 with teacher</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize:11, color:TEXT_DIM, textAlign:"center" }}>
                    All packages include masterclass access · Certificate on completion · Flexible rescheduling
                  </div>
                </Section>

                {/* Certifications */}
                <Section title="Certifications awarded">
                  <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
                    {course.certBodies.map(key => {
                      const cb = CERT_BODIES[key];
                      return (
                        <div key={key} style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px", background:CARD_BG, borderRadius:12, border:`0.5px solid ${BORDER}`, flex:"1 1 160px" }}>
                          <div style={{ width:40, height:40, borderRadius:10, background:cb.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:"#fff", flexShrink:0 }}>{cb.abbr}</div>
                          <div>
                            <p style={{ color:TEXT_BRIGHT, fontSize:13, fontWeight:600, margin:"0 0 2px" }}>{cb.name}</p>
                            <p style={{ color:TEXT_DIM, fontSize:11, margin:0 }}>Internationally recognised</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Section>

                {/* FAQs */}
                <Section title="Frequently asked questions">
                  {course.faqs.map((faq, i) => <FAQ key={i} faq={faq} />)}
                </Section>

              </div>
            </div>

            {/* Sticky footer */}
            <div style={{
              padding:"16px 32px", borderTop:`0.5px solid ${BORDER_GOLD}`,
              background:"#0e0e18",
              display:"flex", alignItems:"center", justifyContent:"space-between", gap:16,
              flexShrink:0,
            }}>
              <div>
                <p style={{ color:TEXT_DIM, fontSize:11, margin:"0 0 2px" }}>Starting from · incl. 18% GST</p>
                <p style={{ color:TEXT_BRIGHT, fontSize:20, fontWeight:800, margin:0 }}>₹{course.price}<span style={{ fontSize:13, fontWeight:400, color:TEXT_DIM }}>/session</span></p>
              </div>
              <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                <a href="#download" onClick={e => e.preventDefault()} style={{
                  fontSize:12, color:G, textDecoration:"none", fontWeight:600,
                  padding:"10px 16px", border:`0.5px solid ${BORDER_GOLD}`, borderRadius:10,
                  display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap",
                  transition:"all 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(201,162,39,0.1)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  ↓ Syllabus PDF
                </a>
                <button style={{
                  background:G, color:"#000", border:"none", borderRadius:12,
                  padding:"12px 28px", fontSize:14, fontWeight:800, cursor:"pointer",
                  fontFamily:"inherit", whiteSpace:"nowrap", transition:"all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = G2; e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = "scale(1)"; }}>
                  Book a Free Trial →
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

// ─── Section helpers ─────────────────────────────────────────────────────────
const SectionHeading = ({ title }) => (
  <p style={{ color:G, fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", margin:"0 0 12px" }}>{title}</p>
);
const Section = ({ title, children }) => (
  <div style={{ marginBottom:32 }}>
    <SectionHeading title={title} />
    {children}
  </div>
);

// ─── Course Card ──────────────────────────────────────────────────────────────
const CourseCard = ({ course, onSelect }) => (
  <div
    onClick={() => onSelect(course)}
    style={{
      flexShrink:0, width:290, cursor:"pointer",
      background:CARD_BG, borderRadius:18,
      border:`0.5px solid ${BORDER}`,
      padding:22, display:"flex", flexDirection:"column", gap:12,
      transition:"border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      scrollSnapAlign:"start",
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = BORDER_GOLD; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,162,39,0.1)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
  >
    <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
      <div style={{ width:50, height:50, borderRadius:12, background:course.logoBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize: course.logo.length > 2 ? 14 : 22, fontWeight:800, color:"#fff", flexShrink:0 }}>
        {course.logo}
      </div>
      <div>
        <h3 style={{ color:TEXT_BRIGHT, fontSize:14, fontWeight:700, margin:"0 0 3px", lineHeight:1.3 }}>{course.title}</h3>
        <p style={{ color:G, fontSize:11, margin:0, fontWeight:600, opacity:0.85 }}>{course.certBodies.map(k => CERT_BODIES[k]?.abbr).join(" · ")}</p>
      </div>
    </div>
    <p style={{ color:TEXT_DIM, fontSize:12.5, lineHeight:1.65, margin:0, display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
      {course.desc}
    </p>
    <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
      {[["⏱", `Duration: ${course.duration}`], ["🏅", `Cert: ${course.cert}`], ["🎓", "Masterclass included"]].map(([ic, txt]) => (
        <div key={txt} style={{ display:"flex", gap:7, alignItems:"flex-start" }}>
          <span style={{ fontSize:12, flexShrink:0 }}>{ic}</span>
          <span style={{ color:TEXT_MID, fontSize:12, lineHeight:1.5 }}>{txt}</span>
        </div>
      ))}
    </div>
    <div style={{ height:"0.5px", background:BORDER }} />
    <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
      <div>
        <p style={{ color:G, fontSize:10, margin:"0 0 2px", fontWeight:600 }}>Incl. 18% GST</p>
        <p style={{ color:TEXT_BRIGHT, fontSize:18, fontWeight:800, margin:"0 0 2px" }}>₹{course.price}/session</p>
        <p style={{ color:"#555", fontSize:10, margin:0 }}>30 min · 1:1 lesson</p>
      </div>
      <div style={{ background:G, color:"#000", borderRadius:10, padding:"9px 16px", fontSize:12, fontWeight:800, display:"flex", alignItems:"center", gap:6 }}>
        View Syllabus <span style={{ fontSize:14 }}>→</span>
      </div>
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────
export default function CoursesSection() {
  const [activeInstrument, setActiveInstrument] = useState("Piano");
  const [activeLevel, setActiveLevel] = useState("Beginner");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const scrollRef = useRef(null);

  const courses = ALL_COURSES[activeInstrument]?.[activeLevel] || [];

  const handleInstrument = (inst) => {
    setActiveInstrument(inst);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };
  const handleLevel = (lvl) => {
    setActiveLevel(lvl);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };
  const openDrawer = useCallback((course) => {
    setSelectedCourse(course);
    document.body.style.overflow = "hidden";
  }, []);
  const closeDrawer = useCallback(() => {
    setSelectedCourse(null);
    document.body.style.overflow = "";
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="coursedrawer" style={{ background:`linear-gradient(180deg,${DARK} 0%,#0d0d1a 100%)`, padding:"64px 0 80px", fontFamily:"'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <p style={{ color:G, fontSize:11, letterSpacing:3, textTransform:"uppercase", margin:"0 0 10px", fontWeight:700 }}>Structured Learning Paths</p>
          <h2 style={{ color:TEXT_BRIGHT, fontSize:"clamp(28px,4vw,40px)", fontWeight:800, margin:0 }}>
            Explore Our <span style={{ color:G }}>Courses</span>
          </h2>
          <p style={{ color:TEXT_DIM, marginTop:12, fontSize:15, lineHeight:1.7, maxWidth:520, margin:"12px auto 0" }}>
            Each course is mapped to internationally recognised certifications. Click any course to explore the full syllabus.
          </p>
        </div>

        {/* Instrument tabs */}
        <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:14, padding:6, display:"flex", flexWrap:"wrap", gap:4, marginBottom:28, border:`0.5px solid ${BORDER_GOLD}` }}>
          {INSTRUMENTS.map(inst => (
            <button key={inst} onClick={() => handleInstrument(inst)} style={{
              flex:"1 1 auto", minWidth:90, padding:"9px 12px", borderRadius:10, border:"none", cursor:"pointer",
              fontSize:12, fontWeight:700, fontFamily:"inherit", transition:"all 0.2s",
              background: activeInstrument === inst ? G : "transparent",
              color: activeInstrument === inst ? "#000" : TEXT_DIM,
            }}>
              {inst}
            </button>
          ))}
        </div>

        {/* Layout */}
        <div style={{ display:"flex", gap:20, alignItems:"flex-start" }}>
          {/* Sidebar */}
          <div style={{ flexShrink:0, width:170, background:"rgba(255,255,255,0.03)", borderRadius:14, border:`0.5px solid ${BORDER}`, overflow:"hidden" }}>
            {LEVELS.map((lvl, i) => (
              <button key={lvl} onClick={() => handleLevel(lvl)} style={{
                display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%",
                padding:"16px 18px", border:"none",
                borderBottom: i < LEVELS.length - 1 ? `0.5px solid ${BORDER}` : "none",
                cursor:"pointer", fontFamily:"inherit", fontWeight:700, fontSize:13, textAlign:"left",
                transition:"all 0.2s",
                background: activeLevel === lvl ? "rgba(201,162,39,0.12)" : "transparent",
                color: activeLevel === lvl ? G : "#5a5a6a",
                borderLeft: activeLevel === lvl ? `2.5px solid ${G}` : "2.5px solid transparent",
              }}>
                {lvl}
                <span style={{ fontSize:10, fontWeight:700, padding:"2px 7px", borderRadius:20, background: activeLevel === lvl ? "rgba(201,162,39,0.25)" : "rgba(255,255,255,0.07)", color: activeLevel === lvl ? G : "#444" }}>
                  {ALL_COURSES[activeInstrument]?.[lvl]?.length || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ flex:1, minWidth:0 }}>
            {courses.length === 0 ? (
              <div style={{ minHeight:300, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12, color:"#444", textAlign:"center" }}>
                <span style={{ fontSize:36 }}>🎵</span>
                <p style={{ margin:0, fontSize:14 }}>No courses yet for this combination.<br />Check back soon!</p>
              </div>
            ) : (
              <div ref={scrollRef} style={{ display:"flex", gap:18, overflowX:"auto", scrollSnapType:"x mandatory", paddingBottom:12, scrollbarWidth:"none" }}>
                {courses.map((course, idx) => <CourseCard key={idx} course={course} onSelect={openDrawer} />)}
              </div>
            )}
          </div>
        </div>
      </div>

      <CourseDrawer course={selectedCourse} onClose={closeDrawer} />
    </section>
  );
}
