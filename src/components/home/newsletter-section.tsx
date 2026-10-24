import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { NewsletterForm } from "./newsletter-form";
import styles from "./newsletter-section.module.css";

export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className={styles.section}
    >
      <div className={styles.landscape}>
        <div className={styles.shade} aria-hidden="true" />

        <div className={styles.topline}>
          <span>
            <MapPin size={14} aria-hidden="true" /> FROM BENGALURU, WITH LOVE
          </span>
          <span>THE GARDEN CITY. A GROWING COMMUNITY. ↗</span>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            A LITTLE LETTER FROM YOUR DESIGN NEIGHBOURS
          </p>
          <h2 id="newsletter-title" className={styles.title}>
            Stay curious<span>.</span>
          </h2>
          <p className={styles.tagline}>Big ideas grow in good company.</p>

          <NewsletterForm />

          <p className={styles.description}>
            From first sketches to conversations over kaapi.
            <br className={styles.desktopBreak} />
            Keep a little of this creative city close.
          </p>
          <a href="#mission" className={styles.missionLink}>
            The idea behind it all <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <SiteFooter />
      </div>
    </section>
  );
}
