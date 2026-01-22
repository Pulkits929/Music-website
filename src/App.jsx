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
      {/* <Gallery></Gallery> */}
      <Booking></Booking>
      <Contact></Contact>
      <Footer></Footer> 
      
    </>
  );
}



