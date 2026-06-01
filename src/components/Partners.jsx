import { useNavigate } from "react-router-dom";

export default function Partners() {
  const navigate = useNavigate();
  
    const partners = [
      {
        title: "Rock School",
        subtitle: "UK",
        logo: "/partners/rsl1.png",
        bg: "from-[#1a5d7e] to-[#1f7fae]",
        text: "text-white",
        name:"rsl",
      },
      {
        title: "Trinity College",
        subtitle: "UK",
        logo: "/partners/trinity1.png",
        bg: "from-[#5a2d6f] to-[#7a3f91]",
        text: "text-white",
        name:"trinity",
      },
      {
        title: "Associated Board Of The Royal Schools Of Music",
        subtitle: "UK",
        logo: "/partners/abrsm3.png",
        bg: "from-[#8b1f24] to-[#c53030]",
        text: "text-white",
        name:"abrsm",
      },
      {
        title: "Harmonic Studios",
        subtitle: "Roorkee, India",
        logo: "/logoharmonic.png",
        bg: "from-[#108263] to-[#0a1628]",
        height: "h-15",
        text: "text-white",
        name:"harmonicstudios",
      },

      
    ];
  
    return (
      <section id="partners" className="py-20 bg-[#0b0b0f]">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-heading text-gold mb-3 sm:mb-16 text-center">
            Certification
          </h2>
          
  
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 ">
            {partners.map((p, i) => (
              <div
                key={i}
                className={`h-[140px] rounded-2xl bg-gradient-to-br ${p.bg}
                            shadow-lg  items-center justify-between
                            px-8 transition-all duration-300
                            hover:-translate-y-2 hover:shadow-xl cursor-pointer
                            grid grid-cols-2`}
                onClick={() => navigate(`/${p.name}`)}
              >
                
                <div className={`font-sans ${p.text} col-span-1 `}>
                  <p className="text-lg font-semibold leading-snug">
                    {p.title}
                  </p>
                  <p className="text-sm opacity-90 mt-1">
                    {p.subtitle}
                  </p>
                </div>
                
  
              
                <div className="ml-auto flex items-center justify-center
                 
                rounded-md px-3 py-2
                ">
                  <img
                    src={p.logo}
                    alt={p.title}
                    
                    className={`${p.height ? p.height : "h-22"} w-auto object-contain`}
                  />
                </div>
              </div>
              



            ))}
            
          </div>
        </div>
      </section>
    );
  }
  