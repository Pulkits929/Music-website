import AnimateOnScroll from "./AnimateOnScroll.jsx";
import { Users, GraduationCap, Clock } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#0b0b0f] py-12 sm:py-16 md:py-20 lg:py-24 relative"
    >
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold mb-4 sm:mb-6">
              Meet Your Music Teacher
            </h2>

            <h3 className="text-2xl sm:text-3xl text-white mb-2 sm:mb-3">
              Divyanshu Vashistha
            </h3>

            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              Master of Music Education • 10+ Years Experience
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-10 leading-relaxed">
              Passionate music educator helping students of all ages discover
              confidence, creativity, and musical excellence through structured
              and personalized learning.
            </p>

            {/* Stats - Fully Responsive */}
            <div className="max-w-xl">
              <div className="rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

                  {/* Experience */}
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-3 md:p-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-xl
                                    bg-gradient-to-br from-purple-500 to-indigo-500">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-white">10+ Years</p>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Experience
                      </p>
                    </div>
                  </div>

                  {/* Students */}
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-3 md:p-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-xl
                                    bg-gradient-to-br from-orange-500 to-amber-500">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-white">500+</p>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Students Taught
                      </p>
                    </div>
                  </div>

                  {/* Lessons */}
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-3 md:p-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-xl
                                    bg-gradient-to-br from-emerald-500 to-green-500">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-white">5,000+</p>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Lessons Conducted
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Image with Hover Effect */}
          <div className="order-1 lg:order-2 relative group w-full max-w-sm sm:max-w-md lg:max-w-xs xl:max-w-sm mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-purple-500/20 blur-2xl"></div>

            {/* Default Image */}
            <img
              src="/teacher_pic.jpg"
              alt="Music Teacher"
              className="relative z-10 rounded-2xl shadow-2xl object-cover w-full
                        transition-opacity duration-300
                        group-hover:opacity-0"
            />

            {/* Hover Image */}
            <img
              src="/teacher_pic_hands.jpeg"
              alt="Music Teacher Hands"
              className="absolute inset-0 z-10 rounded-2xl shadow-2xl object-cover w-full
                        opacity-0 transition-opacity duration-300
                        group-hover:opacity-100"
            />
          </div>

        </div>
      </AnimateOnScroll>
    </section>
  );
}