import Hero from "../components/sections/Hero.jsx";
import OurStory from "../components/sections/OurStory.jsx";
import SignatureExperience from "../components/sections/SignatureExperience.jsx";
import Ingredients from "../components/sections/Ingredients.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import BrandExperience from "../components/sections/BrandExperience.jsx";
import VisitUs from "../components/sections/VisitUs.jsx";
import FAQSection from "../components/sections/FAQ.jsx";
import Contact from "../components/sections/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <SignatureExperience />
      <Ingredients />
      <Gallery />
      <BrandExperience />
      <VisitUs />
      <FAQSection />
      <Contact />
    </>
  );
}
