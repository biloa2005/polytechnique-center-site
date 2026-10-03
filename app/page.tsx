import Footer from "./components/Accueil/Footer";
import Hero from "./components/Accueil/hero";
import StatsAndFormulas from "./components/Accueil/StatsAndFormulas";
import Navbar from "./components/Navbar";

export default function Home() {
  return <main className="">
  <Navbar/>
  <Hero/>
  <StatsAndFormulas/>
   <Footer/>
  </main>;
}
