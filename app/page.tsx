import Navbar          from "@/components/Navbar";
import HeroSection     from "@/components/sections/HeroSection";
import AboutSection    from "@/components/sections/AboutSection";
import MenuSection     from "@/components/sections/MenuSection";
import ReviewsSection  from "@/components/sections/ReviewsSection";
import LocationSection from "@/components/sections/LocationSection";
import Footer          from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
