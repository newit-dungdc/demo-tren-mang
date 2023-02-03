import Hero from "../components/hero";
import About from "../components/about";
import Navbar from "../components/navbar";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Tokenomics from "../components/tokenomics";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-bg">
      <title>𝗢𝗰𝘁𝗼𝗽𝘂𝘀 [prophet]</title>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Footer />
      <div className="animate-to-bottom animate-to-top animate-to-right animate-fadeIn"></div>
    </div>
  );
}
