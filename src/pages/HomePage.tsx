import Countdown from "react-countdown";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowToApply from "../components/HowToApply";
import Footer from "../components/Footer";


function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <HowToApply />
      <Countdown />
      <Footer />
    </div>
  );
}

export default HomePage;