import { useEffect } from "react";
import Loader from "./components/Loader";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkedInCard from "./components/LinkedInCard";
import About from "./components/About";
import Services from "./components/Services";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Design from "./components/Design";
import ToolsWorkflow from "./components/ToolsWorkflow";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import VLibras from "./components/VLibras";

export default function App() {
  useEffect(() => {
    console.log(
      "%c BIMA DEV %c\nEngenheiro de Software | Ciência de Dados | Customer Experience (CX)\n🔗 https://www.linkedin.com/in/bimadevfull/",
      "background: linear-gradient(135deg, #00b8d4, #0066cc); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;",
      ""
    );
  }, []);

  return (
    <>
      <Loader />
      <Particles />
      <Header />
      <main className="main">
        <Hero />
        <LinkedInCard />
        <About />
        <Services />
        <Education />
        <Skills />
        <Design />
        <ToolsWorkflow />
        <Testimonials />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <VLibras />
    </>
  );
}
