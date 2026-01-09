import AnimateOnScroll from "./AnimateOnScroll.jsx";
export default function About() {
    return (
      <section id="about" className="scroll-mt-15 py-20 max-w-full pt-32 bg-purple-700/30 mx-auto px-6 ">
        <AnimateOnScroll>
          <div>
        <h2 className="font-heading text-4xl text-gold mb-6">Meet Your Music Teacher</h2>
        <h3 className="text-2xl mb-2">Divyanshu Vashistha</h3>
        <p className="text-gray-400 mb-4">
          Master of Music Education • 10+ Years Experience
        </p>
        <p className="text-gray-300 max-w-3xl">
          Passionate music educator helping students of all ages discover confidence,
          creativity, and musical excellence.
        </p>
          </div>
          <div className="">
          <div className="relative z-30 mb-0 mt-15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl backdrop-blur-md 
                          bg-black/70 border border-white/10
                          shadow-2xl">
  
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
  
              {/* Experience */}
              <div className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400">
                  🎼
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">10+ Years</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Experience
                  </p>
                </div>
              </div>
  
              {/* Students */}
              <div className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400">
                  👨‍🎓
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">500+</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Students Taught
                  </p>
                </div>
              </div>
  
              {/* Lessons */}
              <div className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400">
                  🎶
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">5,000+</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Lessons Conducted
                  </p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
          </div>
        
        
        </AnimateOnScroll>
      </section>
    );
  }
  