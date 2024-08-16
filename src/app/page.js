import Image from "next/image";
import Navbar from "../../components/navbar";
import Introbox from "../../components/Introbox";
import About from "../../components/About";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import Email from "../../components/Email";
import Footerr from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Introbox />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Email />
      </div>
      <Footerr />
    </>
  );
}
