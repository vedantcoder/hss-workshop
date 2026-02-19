import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SpeakersSection } from "@/components/sections/speakers";
import { ScheduleSection } from "@/components/sections/schedule";
import { ParticipationSection } from "@/components/sections/participation";
import { ApplicationSection } from "@/components/sections/application";
import { VenueSection } from "@/components/sections/venue";
import { FaqSection } from "@/components/sections/faq";
import { RegisterSection } from "@/components/sections/register";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main id="main" className="min-h-dvh">
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <ParticipationSection />
        <ApplicationSection />
        <VenueSection />
        <FaqSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
