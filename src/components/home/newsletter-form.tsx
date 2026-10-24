"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import styles from "./newsletter-form.module.css";

export function NewsletterForm() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubscribe}>
      <label htmlFor="newsletter-email" className="sr-only">
        Your email address
      </label>
      <div className={styles.inputWrap}>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email goes here"
          required
          aria-describedby="newsletter-status"
          onChange={() => setShowNotice(false)}
        />
        <button type="submit" aria-label="Subscribe to the newsletter">
          <ArrowRight size={23} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </div>
      <div id="newsletter-status" className={styles.status} role="status">
        {showNotice ? (
          <span>
            <Check size={16} aria-hidden="true" /> You’re early! Newsletter
            signups open soon. Explore our sessions in the meantime.
          </span>
        ) : (
          <p>
            Fresh sessions. Familiar faces. A little Bengaluru in your inbox.
          </p>
        )}
      </div>
    </form>
  );
}
