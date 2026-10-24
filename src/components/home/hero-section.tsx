import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MousePointer2,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";
import { FilterCoffee, SoudhaSketch } from "./bengaluru-illustrations";
import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className={styles.hero}>
      <SiteHeader />

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span /> A NEW CHAPTER. ROOTED IN BENGALURU.
          </p>
          <h1 id="hero-title" className={styles.title}>
            DESIGN
            <br />
            <span className={styles.school}>
              SCHOOL<span className={styles.titlePeriod}>.</span>
            </span>
          </h1>
          <p className={styles.tagline}>
            Less watching. <span>More making.</span>
          </p>
          <p className={styles.description}>
            Twenty hands-on sessions for designers and builders in Bangalore.
            Real briefs, honest critiques, and ideas you bring to life.
          </p>
          <p className={styles.cityTag}>
            <MapPin size={13} aria-hidden="true" /> In person. In good company.
            In Bengaluru.
          </p>
          <div className={styles.actions}>
            <a href="#events" className={styles.primaryCta}>
              Explore the sessions <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href="#mission" className={styles.secondaryCta}>
              Meet Design School <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className={styles.lineage}>
            From the community behind{" "}
            <a href={site.communityUrl} target="_blank" rel="noreferrer">
              The GTM School <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </p>
        </div>

        {/* A design workbench using the page's grid and pastel palette. */}
        <div
          className={styles.workbench}
          role="img"
          aria-label="A Bengaluru creative workbench with a Vidhana Soudha postcard, a pastel poster reading Make something that matters, and a filter coffee note reading Ideas over kaapi."
        >
          <div className={styles.canvasLabel} aria-hidden="true">
            <span /> NAMMA BENGALURU / A WORK IN PROGRESS
          </div>
          <div className={styles.dashedOrbit} aria-hidden="true" />
          <div className={styles.sketch} aria-hidden="true">
            <span className={styles.paperLabel}>POSTCARD / BLR 560 001</span>
            <SoudhaSketch />
            <span className={styles.sketchCaption}>
              From Bengaluru, with love.
            </span>
          </div>
          <div className={styles.poster} aria-hidden="true">
            <span className={styles.selectionLabel}>Your next big idea</span>
            <span className={`${styles.handle} ${styles.topLeft}`} />
            <span className={`${styles.handle} ${styles.topRight}`} />
            <span className={`${styles.handle} ${styles.bottomLeft}`} />
            <span className={`${styles.handle} ${styles.bottomRight}`} />
            <div className={styles.posterTop}>
              <span>DESIGN SCHOOL</span>
              <span>BLR / VOL. 01 ↗</span>
            </div>
            <div className={styles.posterArt}>
              <div className={styles.flower}>
                {Array.from({ length: 8 }, (_, i) => (
                  <span key={i} style={{ transform: `rotate(${i * 45}deg)` }} />
                ))}
                <span className={styles.flowerCenter} />
              </div>
              <div className={styles.artCircle} />
              <div className={styles.artGrid} />
            </div>
            <p className={styles.posterTitle}>
              Make
              <br />
              something
              <br />
              <span>that matters.</span>
            </p>
            <div className={styles.posterBottom}>
              <span>AN IDEA IS JUST THE BEGINNING.</span>
              <ArrowUpRight size={23} />
            </div>
          </div>
          <div className={styles.stickyNote} aria-hidden="true">
            <span className={styles.notePin} />
            <FilterCoffee className={styles.noteCoffee} />
            Ideas over
            <br />
            <span>kaapi.</span>
            <svg viewBox="0 0 115 17" fill="none">
              <path
                d="M4 10C28 3 60 4 109 7M11 15c28-5 59-5 89-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.cursor} aria-hidden="true">
            <MousePointer2 size={27} fill="#242424" />
            <span>You, but with a new skill</span>
          </div>
          <p className={styles.canvasFooter} aria-hidden="true">
            Big ideas. A little Bengaluru.
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerIntro}>BENGALURU ROOTS. BOUNDLESS IDEAS.</p>
        <div className={styles.topics} aria-label="Session formats">
          <span>
            <i className={styles.purpleDot} />
            Real briefs
          </span>
          <span>
            <i className={styles.greenDot} />
            Live critiques
          </span>
          <span>
            <i className={styles.orangeDot} />
            Working prototypes
          </span>
        </div>
        <a href="#mission" className={styles.scrollLink}>
          Take a look around <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
