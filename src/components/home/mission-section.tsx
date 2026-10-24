import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { FilterCoffee, GardenSprig } from "./bengaluru-illustrations";
import { site } from "@/content/site";
import local from "./home-sections.module.css";

export function MissionSection() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-title"
      className={local.mission}
    >
      <div className={local.missionGrid} aria-hidden="true" />
      <div className={local.missionOrbit} aria-hidden="true" />
      <GardenSprig className={local.missionSprig} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className={local.eyebrow}>ROOTED IN BENGALURU. MADE FOR MAKING.</p>
          <h2
            id="mission-title"
            className="text-4xl md:text-6xl font-black tracking-wider mb-8 text-gray-900"
          >
            OUR MISSION
          </h2>
          <ScrollRevealText text={site.mission} className={local.missionCopy} />
          <div className={local.coffeeNote}>
            <FilterCoffee className={local.coffeeDrawing} />
            <p>
              Good design. Great conversations.
              <br />
              <span>Preferably over filter coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
