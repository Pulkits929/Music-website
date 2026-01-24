import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
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
      <div className="relative mt-4 md:mt-6 z-20 w-full h-full flex items-center">
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
          <p className="text-gray-200 text-lg md:text-2xl mb-8 max-w-xl">
            Personalized live 1:1 online Music lessons for Piano, Guitar, Drums, Tabla & Music Theory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scrollToSection("services")}
    className="w-full cursor-pointer sm:w-auto bg-white hover:bg-yellow-400 text-sm sm:text-base md:text-lg uppercase text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
  >
    Explore Courses <ion-icon name="arrow-forward-outline"></ion-icon>
  </motion.button>

  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => scrollToSection("book")}
  className="
    w-full sm:w-auto
    bg-yellow-500 hover:bg-yellow-400
    text-sm sm:text-base md:text-lg uppercase
    text-black
    px-6 sm:px-8 py-3 sm:py-4
    rounded-full
    flex items-center justify-center gap-2
    transition-all duration-300 cursor-pointer
  "
>
  <span>Book a free trial</span>
  <ion-icon name="arrow-forward-outline"></ion-icon>
</motion.button>

</div>
  
        </motion.div>
        
      </div>
    </section>
    
  );
}
