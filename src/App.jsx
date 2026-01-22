import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import TechRequirements from "./components/TechRequirements";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import GetInTouch from "./components/getintouch";
import LearningInAction from "./components/LearningInAction";


export default function App() {
  return (
    <>
    
      <Navbar />
      <Hero></Hero>
      
      <About></About>
      <Services></Services>
      <Partners></Partners>
      
      <HowItWorks></HowItWorks>
      {/* <TechRequirements></TechRequirements> */}
      <Testimonials></Testimonials>
      <LearningInAction></LearningInAction>
      {/* <Gallery></Gallery> */}
      <Booking></Booking>
      <GetInTouch></GetInTouch>
      <Contact></Contact>
      <Footer></Footer> 

      
    </>
  );
}



