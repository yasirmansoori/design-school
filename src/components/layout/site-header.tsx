"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mainNavigation } from "@/content/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.brand} aria-label="Design School home">
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
      <nav aria-label="Main navigation" className={styles.desktopNav}>
        {mainNavigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>
      <a href="#events" className={styles.headerCta}>
        Find your session <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <button
        ref={menuButton}
        type="button"
        className={styles.menuButton}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
        aria-controls="hero-mobile-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      {isMenuOpen && (
        <nav
          id="hero-mobile-nav"
          aria-label="Mobile navigation"
          className={styles.mobileNav}
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
