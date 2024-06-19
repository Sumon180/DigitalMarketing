import About from "@/components/About";
import Benifits from "@/components/Benifits";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Proccess from "@/components/Proccess";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      {/* <Proccess /> */}
      <Testimonial />
      <Project />
      <Pricing />
      <Benifits />
      <Blog />
      <Footer />
    </div>
  );
}
