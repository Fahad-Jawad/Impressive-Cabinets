import Image from "next/image";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import WorkingAreas from "./sections/WorkingAreas";
import WorkQuality from "./sections/WorkQuality";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

export default function Home() {
  return (
  <>
  <Header />
  <AboutUs />
  <Services />
  <Projects />
  <WorkingAreas />
  <WorkQuality />
  <Testimonials />
  <ContactUs />
<Footer />
  </>
  );
}
