import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { MethodSection } from "./components/method-section";
import { QuoteSection } from "./components/quote-section";
import { ScrollToTop } from "./components/scroll-to-top";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { SubjectsSection } from "./components/subjects-section";

export default function Home() {
  return <main className="site-shell">
    <SiteHeader />
    <HeroSection />
    <AboutSection />
    <SubjectsSection />
    <MethodSection />
    <QuoteSection />
    <ContactSection />
    <SiteFooter />
    <ScrollToTop />
  </main>;
}
