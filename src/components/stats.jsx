export default function Stats() {
    return (
      <div className="relative z-30 -mt-12 -mb-12">
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
    );
  }
  