import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import TechRequirements from "../components/TechRequirements";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";

import Partners from "../components/Partners";
import Footer from "../components/Footer";
import GetInTouch from "../components/getintouch";
import LearningInAction from "../components/LearningInAction";
import CoursesSection from "../components/CourseDrawer";
export default function Home() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        {/* <Services /> */}
        <CoursesSection/>
        <Partners />
        <HowItWorks />
        <Testimonials />
        <LearningInAction />
        <Booking />
        <GetInTouch />
        
        <Footer />
      </>
    );
  }