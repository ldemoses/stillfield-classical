import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import { useReveal } from "./hooks/useReveal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#care", label: "Care" },
  { href: "#packages", label: "Packages" },
  { href: "#trust", label: "Approach" },
  { href: "#work", label: "Begin" },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-shell">
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-nav__inner">
          <a className="site-nav__brand" href="#top" onClick={closeMenu}>
            Stillfield
          </a>
          <ul className="site-nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="site-nav__cta" href="#work">
            Book a consult
          </a>
          <button
            className="site-nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#work" onClick={closeMenu}>
            Book a consult
          </a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" aria-label="Stillfield Classical">
          <div className="hero__media">
            <img
              src="/images/stillfield-hero.jpg"
              alt="Misty meadow grasses at the edge of a quiet woodland"
            />
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__content">
            <p className="hero__brand">Stillfield</p>
            <h1 className="hero__headline">
              Classical homeopathy for the whole person
            </h1>
            <p className="hero__support">
              Gentle, precise care that works with your vital force—not against
              your symptoms.
            </p>
            <div className="hero__actions">
              <a className="btn btn-primary" href="#work">
                Schedule a consult
              </a>
              <a className="btn btn-ghost" href="#packages">
                View care packages
              </a>
            </div>
          </div>
        </section>

        <section className="philosophy" id="about">
          <div className="section-split">
            <div className="reveal">
              <span className="section__eyebrow">Philosophy</span>
              <h2 className="section__title">Restore balance at the root</h2>
              <div className="philosophy__copy">
                <p>
                  Stillfield Classical is a private practice devoted to
                  individualized homeopathy. We listen for the pattern beneath
                  the diagnosis—physical, emotional, and constitutional—then
                  select a single remedy matched to you.
                </p>
                <p>
                  When the vital force is disturbed, symptoms appear as the
                  body’s clearest language. Rather than quieting that language,
                  classical homeopathy invites the organism to reorganize toward
                  resilience and lasting ease.
                </p>
              </div>
              <p className="philosophy__quote">
                Health is not the absence of symptoms. It is the return of
                vitality.
              </p>
            </div>
            <div className="section-media reveal reveal-delay-1">
              <img
                src="/images/stillfield-care.jpg"
                alt="Glass remedy vials and dried herbs on linen in soft daylight"
              />
            </div>
          </div>
        </section>

        <section className="section" id="care">
          <div className="reveal">
            <span className="section__eyebrow">How care works</span>
            <h2 className="section__title">A clear, unhurried process</h2>
            <p className="section__lead">
              Every case begins with depth, not haste. You describe your story
              in full; we study it carefully before recommending a remedy.
            </p>
          </div>

          <div className="care-steps">
            <article className="care-step reveal">
              <div className="care-step__num" aria-hidden="true">
                01
              </div>
              <div>
                <h3>Initial evaluation</h3>
                <p>
                  A 90–120 minute conversation covering your health history,
                  temperament, sleep, digestion, moods, and the unique details
                  of your complaint. Nothing is rushed or reduced to a checklist.
                </p>
              </div>
            </article>
            <article className="care-step reveal reveal-delay-1">
              <div className="care-step__num" aria-hidden="true">
                02
              </div>
              <div>
                <h3>Case analysis</h3>
                <p>
                  After your session, we take dedicated study time to compare
                  your totality of symptoms with the materia medica and select
                  the remedy that best matches your pattern.
                </p>
              </div>
            </article>
            <article className="care-step reveal reveal-delay-2">
              <div className="care-step__num" aria-hidden="true">
                03
              </div>
              <div>
                <h3>Follow-up & refinement</h3>
                <p>
                  Typically four to eight weeks later, we review how you have
                  responded and adjust timing, potency, or direction as needed.
                  Continuity is part of the medicine.
                </p>
              </div>
            </article>
          </div>

          <div className="care-concerns reveal">
            <div>
              <h3>Common reasons people seek care</h3>
              <ul className="concern-list">
                <li>Recurring migraines & sleep disruption</li>
                <li>Digestive imbalance & food sensitivities</li>
                <li>Skin flare patterns</li>
                <li>Anxiety, low mood, grief</li>
                <li>Hormonal & thyroid concerns</li>
                <li>Childhood ear infections & colic</li>
                <li>Acute illness support</li>
                <li>Long-standing symptoms not settling</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="packages" id="packages">
          <div className="section">
            <div className="reveal">
              <span className="section__eyebrow">Packages & pricing</span>
              <h2 className="section__title">Transparent care options</h2>
              <p className="section__lead">
                Choose the depth of support that fits your season of health.
                Remedies are typically included; payment details are confirmed
                before your first visit.
              </p>
            </div>

            <div className="package-grid">
              <article className="package is-featured reveal">
                <span className="package__label">New patients</span>
                <h3>Initial Evaluation</h3>
                <p className="package__price">
                  $475 <span>/ adults</span>
                </p>
                <p className="package__meta">$385 under 18 · 90–120 minutes</p>
                <p>
                  An in-depth first visit for chronic or complex concerns,
                  followed by written guidance and your first remedy.
                </p>
                <ul className="package__list">
                  <li>Full case-taking session</li>
                  <li>Individual remedy selection</li>
                  <li>Secure follow-up plan</li>
                </ul>
              </article>

              <article className="package reveal reveal-delay-1">
                <span className="package__label">Continuing care</span>
                <h3>Follow-Up Visit</h3>
                <p className="package__price">
                  $165 <span>/ session</span>
                </p>
                <p className="package__meta">Approximately 45–50 minutes</p>
                <p>
                  Review your response, refine potency or remedy, and decide
                  next steps together.
                </p>
                <ul className="package__list">
                  <li>Response assessment</li>
                  <li>Remedy adjustments as needed</li>
                  <li>Between-visit messaging window</li>
                </ul>
              </article>

              <article className="package reveal reveal-delay-1">
                <span className="package__label">Short-term</span>
                <h3>Acute Care</h3>
                <p className="package__price">
                  $115 <span>/ visit</span>
                </p>
                <p className="package__meta">30–45 minutes · same-week when available</p>
                <p>
                  Focused support for recent-onset illness or injury when you
                  already know classical homeopathy is a fit.
                </p>
                <ul className="package__list">
                  <li>Targeted acute case-taking</li>
                  <li>Remedy recommendation</li>
                  <li>Brief check-in within 72 hours</li>
                </ul>
              </article>

              <article className="package reveal reveal-delay-2">
                <span className="package__label">Best value</span>
                <h3>Season of Care</h3>
                <p className="package__price">
                  $780 <span>/ 3 months</span>
                </p>
                <p className="package__meta">Initial + 3 follow-ups bundled</p>
                <p>
                  For patients ready for steady accompaniment through a healing
                  season—ideal when patterns are layered or long-standing.
                </p>
                <ul className="package__list">
                  <li>Priority scheduling</li>
                  <li>Email check-ins between visits</li>
                  <li>Save $190 vs. à la carte</li>
                </ul>
              </article>
            </div>

            <p className="packages__note reveal">
              Sample pricing for demonstration. Please cancel or reschedule at
              least 48 hours in advance. Virtual visits are available nationwide;
              in-person appointments are offered in Bend, Oregon by arrangement.
            </p>
          </div>
        </section>

        <section className="trust" id="trust">
          <div className="trust__inner">
            <div className="trust__panel">
              <div className="reveal">
                <span className="section__eyebrow">Education & trust</span>
                <h2 className="section__title">What the vital force means here</h2>
                <p className="section__lead">
                  Soft guidance for people who want to understand the medicine
                  before they begin—not marketing claims, just orientation.
                </p>
                <dl className="trust__facts">
                  <div>
                    <dt>One remedy at a time</dt>
                    <dd>
                      Classical prescribing favors a single, carefully matched
                      remedy so the response remains clear and interpretable.
                    </dd>
                  </div>
                  <div>
                    <dt>Whole-person matching</dt>
                    <dd>
                      We consider sensation, modality, emotion, and constitution—
                      not only a named diagnosis—because the remedy must fit you.
                    </dd>
                  </div>
                  <div>
                    <dt>Collaborative boundaries</dt>
                    <dd>
                      Homeopathy can sit alongside conventional care. We never
                      ask you to abandon needed medical support.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="trust-media reveal reveal-delay-1">
                <img
                  src="/images/stillfield-vital.jpg"
                  alt="Calm forest stream with mossy stones in soft daylight"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section">
            <div className="reveal">
              <span className="section__eyebrow">Work with me</span>
              <h2 className="section__title">Begin with a thoughtful first step</h2>
              <p className="section__lead">
                Share a little about what brings you, and Mira will reply within
                two business days with next available times—or a clear no if
                another path would serve you better.
              </p>
            </div>

            {submitted ? (
              <div className="form-success" role="status">
                <h3>Request received</h3>
                <p>
                  Thank you. This demo form does not send messages yet—when the
                  clinic goes live, your note will reach the practice inbox
                  directly.
                </p>
              </div>
            ) : (
              <form className="work-form reveal is-visible" onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input name="name" type="text" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label>
                  I’m interested in
                  <select name="interest" defaultValue="initial">
                    <option value="initial">Initial Evaluation</option>
                    <option value="season">Season of Care package</option>
                    <option value="acute">Acute Care visit</option>
                    <option value="question">A quick question first</option>
                  </select>
                </label>
                <label>
                  What would you like help with?
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="A few sentences are enough."
                    required
                  />
                </label>
                <div className="work-form__actions">
                  <button className="btn btn-primary" type="submit">
                    Request a consult
                  </button>
                  <a className="btn btn-ghost" href="mailto:hello@stillfield.example">
                    Or email directly
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <div className="site-footer__brand">Stillfield Classical</div>
            <p className="site-footer__tag">
              Individualized classical homeopathy for adults, children, and
              families.
            </p>
          </div>
          <div className="site-footer__grid">
            <div>
              <h3>Practitioner</h3>
              <p>Mira Ellison, CCH</p>
              <p>Certified Classical Homeopath</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>
                <a href="mailto:hello@stillfield.example">
                  hello@stillfield.example
                </a>
              </p>
              <p>
                <a href="tel:+15415550184">(541) 555-0184</a>
              </p>
            </div>
            <div>
              <h3>Visit</h3>
              <p>Virtual care nationwide</p>
              <p>In-person by appointment · Bend, OR</p>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Stillfield Classical</span>
            <span>Sample clinic site · Placeholder contact details</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
