export default function Partners() {
  
    const partners = [
      {
        title: "Rock School",
        subtitle: "UK",
        logo: "/partners/rsl.png",
        bg: "from-[#1a5d7e] to-[#1f7fae]",
        text: "text-white",
      },
      {
        title: "Trinity College",
        subtitle: "UK",
        logo: "/partners/trinity.png",
        bg: "from-[#5a2d6f] to-[#7a3f91]",
        text: "text-white",
      },
      {
        title: "Associated Board Of The",
        subtitle: "Royal Schools Of Music",
        logo: "/partners/abrsm.png",
        bg: "from-[#8b1f24] to-[#c53030]",
        text: "text-white",
      },
      {
        title: "Harmonic Studios",
        subtitle: "Roorkee, India",
        logo: "/golden_logo-Photoroom.png",
        bg: "from-[#2d5a1f] to-[#3f9140]",
        text: "text-white",
      },

      
    ];
  
    return (
      <section id="partners" className="py-20 bg-[#0b0b0f]">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-heading text-gold mb-3 sm:mb-16 text-center">
            Certification
          </h2>
          
  
          <div className="grid md:grid-cols-4 gap-8">
            {partners.map((p, i) => (
              <div
                key={i}
                className={`h-[140px] rounded-2xl bg-gradient-to-r ${p.bg}
                            shadow-lg flex items-center justify-between
                            px-8 transition-all duration-300
                            hover:-translate-y-2 hover:shadow-xl`}
              >
                
                <div className={`font-sans ${p.text}`}>
                  <p className="text-lg font-semibold leading-snug">
                    {p.title}
                  </p>
                  <p className="text-sm opacity-90 mt-1">
                    {p.subtitle}
                  </p>
                </div>
                
  
              
                <div className="ml-auto flex items-center justify-center
                bg-white/90 backdrop-blur-sm
                rounded-md px-3 py-2
                shadow-lg">
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="h-7 max-w-full object-contain"
                  />
                </div>
              </div>
              
//               <div className="
//   relative h-[140px] rounded-xl
//   bg-[#12141a]
//   flex items-center px-8
//   overflow-hidden
// " key={i}>

//   <span className="absolute left-0 top-0 h-full w-1 bg-gold" />

//   <div className="ml-4">
//     <p className="text-white text-lg font-semibold">
//       {p.title}
//     </p>
//     <p className="text-sm text-gray-400">
//       {p.subtitle}
//     </p>
//   </div>

//   <img
//     src={p.logo}
//     className="ml-auto h-10 opacity-70"
//     alt=""
//   />
// </div>


            ))}
            
          </div>
        </div>
      </section>
    );
  }
  