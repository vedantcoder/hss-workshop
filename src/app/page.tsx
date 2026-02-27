import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

import { HeroSection } from "@/components/sections/hero";
import { SymposiumSection } from "@/components/sections/symposium";
import { AboutSection } from "@/components/sections/about";
import { SpeakersSection } from "@/components/sections/speakers";
import { ScheduleSection } from "@/components/sections/schedule";
import { ParticipationSection } from "@/components/sections/participation";
import { RegisterSection } from "@/components/sections/register";
import { VenueSection } from "@/components/sections/venue";
import { FaqSection } from "@/components/sections/faq";
import { FlyerCarouselModal } from "@/components/ui/flyer-carousel-modal";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white">
      <FlyerCarouselModal />
      <Navbar />
      <main id="main" className="min-h-dvh">
        <HeroSection />
        <SymposiumSection />
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <ParticipationSection />
        <RegisterSection />
        <VenueSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
