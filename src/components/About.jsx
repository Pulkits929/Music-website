import AnimateOnScroll from "./AnimateOnScroll.jsx";
import { Users, Building2, GraduationCap, Clock } from "lucide-react";


export default function About() {
  return (
    <section
  id="about"
  className="scroll-mt-15 bg-[#0b0b0f] py-13 relative"
>

      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-around">

          {/* LEFT: Text Content */}
          <div className="ml-5">
            <h2 className="font-heading text-5xl text-gold mb-6">
              Meet Your Music Teacher
            </h2>

            <h3 className="text-3xl text-white mb-3">
              Divyanshu Vashistha
            </h3>

            <p className="text-gray-400 mb-6">
              Master of Music Education • 10+ Years Experience
            </p>

            <p className="text-gray-300 max-w-xl mb-10 leading-relaxed">
              Passionate music educator helping students of all ages discover
              confidence, creativity, and musical excellence through structured
              and personalized learning.
            </p>

            {/* Stats (secondary, subtle) */}
            <div className="max-w-xl">
  <div className="rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-xl">

    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 ">

      {/* Experience */}
      <div className="flex items-center gap-4 p-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl
                        bg-gradient-to-br from-purple-500 to-indigo-500">
          <Clock className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">10+ Years</p>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Experience
          </p>
        </div>
      </div>

      {/* Students */}
      <div className="flex items-center gap-4 p-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl
                        bg-gradient-to-br from-orange-500 to-amber-500">
          <Users className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">500+</p>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Students Taught
          </p>
        </div>
      </div>

      {/* Lessons */}
      <div className="flex items-center gap-4 p-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl
                        bg-gradient-to-br from-emerald-500 to-green-500">
          <GraduationCap className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">5,000+</p>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Lessons Conducted
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-purple-500/20 blur-2xl"></div>
            <img
              src="/teacher_pic.jpg"
              alt="Music Teacher"
              className="relative rounded-2xl shadow-2xl object-cover w-full max-w-xs mx-auto"
            />
          </div>

        </div>
      </AnimateOnScroll>
    </section>
  );
}
