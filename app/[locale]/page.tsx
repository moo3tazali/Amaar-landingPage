import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import OurStory from "@/components/OurStory";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <OurStory />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
