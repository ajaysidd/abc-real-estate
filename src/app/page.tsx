import HeroSection from "@/components/home/hero-section";
import FeaturedProperties from "@/components/home/featured-properties";
import FeaturedProjects from "@/components/home/featured-projects";
import WhyChooseUs from "@/components/home/why-choose-us";
import CallToAction from "@/components/home/call-to-action";
import ContactSection from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main>

      <HeroSection />

      <FeaturedProperties />

      <FeaturedProjects />

      <WhyChooseUs />

      <CallToAction />

      <ContactSection />

    </main>
  );
}