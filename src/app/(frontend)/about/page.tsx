import { AboutFooter } from "./_components/about-footer";
import { ExpertiseSection } from "./_components/expertise-section";
import { HeaderSection } from "./_components/header-section";
import { WhyUsSection } from "./_components/why-us-section";

export default function About() {
  return (
    <main className="pt-16">
      <header className="container grid grid-cols-2 gap-3 py-24">
        <h1 className="font-aloevera text-5xl font-semibold leading-tight">
          We pioneer <span></span>
          <br />
          innovative solutions that transform{" "}
          <span className="text-brand">modern living</span> and{" "}
          <span className="text-orange-600">workspaces.</span>
        </h1>
        <p className="text-balance text-2xl leading-relaxed">
          At M2Mtek, we innovate solutions that transform living and workspaces.
          Our mission is to empower individuals and businesses with products
          that blend technology, functionality, and design for enhanced
          productivity and comfort.
        </p>
      </header>
      <HeaderSection />
      <WhyUsSection />
      <ExpertiseSection />
      <AboutFooter />
    </main>
  );
}
