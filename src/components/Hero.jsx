import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pb-32 ">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-115 "
      >
        <source src="https://res.cloudinary.com/dmdtpqfel/video/upload/v1767893767/hero_video_ynscbr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-white-950/60 via-black/70 to-black/80
 z-10" />

      {/* Content */}
      <div className="relative mt-10 z-20 w-full h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl px-8 md:px-16"
        >
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-4 leading-tight">
            Experience Music. <br />
            <span className="text-yellow-500">Feel the Art.</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
            Personalized music lessons for Piano, Guitar, Drums, Tabla & Music Theory.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const coursesSection = document.getElementById("services");
              if (coursesSection) {
                coursesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white mr-6 hover:bg-yellow-400 text-lg uppercase text-black px-8 py-4 rounded-full transition-colors"
          >
            Explore Courses
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const bookingSection = document.getElementById("book");
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-lg uppercase text-black px-8 py-4 rounded-full transition-colors"
          >
            Book a free trial
          </motion.button>  
        </motion.div>
        
      </div>
    </section>
    
  );
}
