import { ArrowUp, ArrowUpRight } from "lucide-react";
import { footerNavigation, site } from "@/content/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerMain}>
        <a
          href="#hero"
          className={styles.brand}
          aria-label="Design School home"
        >
          <span className={styles.brandMark} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            Design School<span className={styles.brandPeriod}>.</span>
          </span>
        </a>
        <nav className={styles.nav} aria-label="Footer navigation">
          {footerNavigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <a href="#hero" className={styles.backToTop} aria-label="Back to top">
          <ArrowUp size={19} aria-hidden="true" />
        </a>
      </div>
      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Design School. Made in Bengaluru. For the
          endlessly curious.
        </p>
        <a href={site.communityUrl} target="_blank" rel="noreferrer">
          From the community behind The GTM School{" "}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
