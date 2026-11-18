import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import { useReveal } from "./hooks/useReveal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#training", label: "Training" },
  { href: "#work", label: "Begin" },
];

const clients = [
  {
    label: "Aging in place",
    title: "Independent Living",
    body: "For those looking to optimize their health and establish fundamental foundations for longevity and aging in place.",
    image: "/images/eoa-home.jpg",
    alt: "Home entrance representing independent living",
  },
  {
    label: "Intentional living",
    title: "Assisted Living",
    body: "Improve or maintain quality of life and continue living intentionally. In addition to care based on client goals, a full home evaluation is included—for private homes, adult group homes, or assisted living facilities.",
    image: "/images/eoa-bridge.jpg",
    alt: "Bridge over a lake representing assisted living support",
  },
  {
    label: "Conscious Dying",
    title: "End of Life Care",
    body: "Assisting clients and their loved ones through this life transition with support and education.",
    image: "/images/eoa-hands.jpg",
    alt: "Hands together representing end of life care",
  },
  {
    label: "Support and education",
    title: "Caregiver Education",
    body: "Providing education and support for those caring for loved ones.",
    image: "/images/eoa-caregiver.jpg",
    alt: "Women holding hands representing caregiver education",
  },
];

const services = [
  {
    title: "Naturopathic Medicine",
    lead: "Create foundations for optimal aging",
    body: "A holistic approach that blends modern scientific knowledge with the ancient wisdom of natural healing—treating the root cause of disease with safe, gentle therapies that stimulate the body to begin healing.",
    image: "/images/eoa-medicine.jpg",
    alt: "Naturopathic medicine for adult and geriatric care",
  },
  {
    title: "Elder Home Care",
    lead: "Naturopathic consultations in your home",
    body: "Home visits in the Portland, Oregon area. Initial consults happen in the client’s home; follow-ups can be in home or online—so energy can stay with daily life, not transit.",
    image: "/images/eoa-home.jpg",
    alt: "Elder home care visits",
  },
  {
    title: "Virtual Consultations",
    lead: "Seeking our expertise but not near us?",
    body: "Online consultations bring the health information you need no matter your location. Telehealth consults are available from anywhere in the country.",
    image: "/images/stillfield-care.jpg",
    alt: "Virtual consultation workspace",
  },
  {
    title: "Palliative & End of Life Care",
    lead: "Conscious Dying",
    body: "Therapeutics and accompaniment that support clients and families through transitioning with dignity and presence.",
    image: "/images/eoa-hands.jpg",
    alt: "Palliative and end of life care",
  },
  {
    title: "Caregiver Education",
    lead: "Taking care of those who care for loved ones",
    body: "Navigating the medical system, behavioral and cognitive change, and planning for the future can overwhelm. This service offers information, education, and personal support for the caregiver.",
    image: "/images/eoa-caregiver.jpg",
    alt: "Caregiver education and support",
  },
  {
    title: "Workshops & Retreats",
    lead: "Return to your true essence",
    body: "Workshops and retreats throughout the United States—plus private workshops available upon request.",
    image: "/images/eoa-workshops.jpg",
    alt: "Workshops and retreats",
  },
];

const expertise = [
  { title: "Dementia", detail: "Cognitive decline" },
  { title: "Food Intolerance Testing", detail: "Nutrition for the aging body" },
  { title: "Urinary Incontinence", detail: "Pelvic floor therapy" },
  { title: "Pre/Post Surgery Recovery", detail: "Optimize healing and reduce pain" },
  {
    title: "Exercise Specialist",
    detail: "Muscular and cardiovascular health. Fall reduction program.",
  },
  {
    title: "Home & Environmental Recommendations",
    detail: "Modifications and adaptations to keep you in the activities you love",
  },
  { title: "End of Life Support", detail: "Therapeutics to support transitioning" },
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
            Schedule a consult
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
            Schedule a consult
          </a>
        </nav>
      </div>

      <main id="top">
        <section className="hero" aria-label="Stillfield Classical">
          <div className="hero__media">
            <img
              src="/images/eoa-hero.jpg"
              alt="Warm light through trees along a quiet path"
            />
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__content">
            <p className="hero__brand">Stillfield</p>
            <h1 className="hero__headline">
              Create foundations for healthy aging
            </h1>
            <p className="hero__support">
              Restore your essence. Celebrate your wisdom. Care for adults and
              elders seeking a new way to experience the golden years.
            </p>
            <div className="hero__actions">
              <a className="btn btn-primary" href="#work">
                Schedule a consultation
              </a>
              <a className="btn btn-ghost" href="#services">
                Explore services
              </a>
            </div>
          </div>
        </section>

        <section className="philosophy" id="about">
          <div className="section-split">
            <div className="reveal">
              <span className="section__eyebrow">About</span>
              <h2 className="section__title">Return to your true essence</h2>
              <div className="philosophy__copy">
                <p>
                  At Stillfield Classical, our mission is simple — to help
                  individuals return to their true essence so they can experience
                  and celebrate the wisdom and beauty aging has to offer. Our
                  goal is to optimize independence and quality of life for our
                  clients and their families.
                </p>
                <p>
                  Aging doesn’t start when we get old. That is why we serve
                  adults and elders looking for a new way to experience the
                  golden years—through geriatric natural medicine, home-centered
                  care, and classical homeopathy.
                </p>
              </div>
              <p className="philosophy__quote">
                Create foundations for healthy aging. Restore your essence.
              </p>
            </div>
            <div className="section-media reveal reveal-delay-1">
              <img
                src="/images/eoa-medicine.jpg"
                alt="Natural medicine materials for adult and geriatric care"
              />
            </div>
          </div>
        </section>

        <section className="section clients" id="clients">
          <div className="reveal">
            <span className="section__eyebrow">Who we serve</span>
            <h2 className="section__title">Clients we serve</h2>
            <p className="section__lead">
              From aging in place to caregiver support, care meets people where
              they live—and where life is changing.
            </p>
          </div>
          <div className="client-grid">
            {clients.map((client, index) => (
              <article
                key={client.title}
                className={`client-card reveal ${index % 2 === 1 ? "reveal-delay-1" : ""}`}
              >
                <div className="client-card__media">
                  <img src={client.image} alt={client.alt} />
                </div>
                <p className="client-card__label">{client.label}</p>
                <h3>{client.title}</h3>
                <p>{client.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="section">
            <div className="reveal">
              <span className="section__eyebrow">Services</span>
              <h2 className="section__title">
                Creating foundations for optimal aging
              </h2>
              <p className="section__lead">
                Naturopathic and geriatric care in clinic, at home, and online—
                plus education and retreats that help people return to essence.
              </p>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`service-row reveal ${index % 2 === 1 ? "is-reversed" : ""}`}
                >
                  <div className="service-row__media">
                    <img src={service.image} alt={service.alt} />
                  </div>
                  <div className="service-row__copy">
                    <h3>{service.title}</h3>
                    <p className="service-row__lead">{service.lead}</p>
                    <p>{service.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise" id="expertise">
          <div className="section">
            <div className="reveal">
              <span className="section__eyebrow">Areas of expertise</span>
              <h2 className="section__title">All things aging</h2>
              <p className="section__lead">
                Focused support across cognition, recovery, movement, home
                environment, and end-of-life therapeutics.
              </p>
            </div>
            <div className="expertise-grid">
              {expertise.map((item, index) => (
                <article
                  key={item.title}
                  className={`expertise-item reveal ${index > 0 ? `reveal-delay-${Math.min(index, 2)}` : ""}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="training" id="training">
          <div className="section">
            <div className="reveal">
              <span className="section__eyebrow">For practitioners</span>
              <h2 className="section__title">
                Advanced homeopathy training & mentorship
              </h2>
              <p className="section__lead">
                Taught by Dr. Eli Camp, ND, DHANP—live clinical training and
                deep mentorship for students and practitioners ready to refine
                classical homeopathic practice.
              </p>
            </div>

            <div className="training-grid">
              <article className="training-card is-featured reveal">
                <span className="training-card__label">Clinical mentorship</span>
                <h3>Homeopathic Clinical Training Program</h3>
                <p className="training-card__meta">
                  Aug 2026 – Jun 2027 · Tuesdays 6:00–8:30 PM CT · Live on Zoom
                </p>
                <p>
                  A live, interactive year of supervised clinical experience:
                  real-world case discussion, repertorization, remedy
                  differentiation, posology, follow-up, and case management.
                  Appropriate for students, graduates, and experienced
                  homeopaths seeking collaborative mentorship. Hours may count
                  toward NASH clinical requirements.
                </p>
                <ul className="training-card__list">
                  <li>Weekly peer case review</li>
                  <li>Case taking through case management</li>
                  <li>Obstacles to cure & acute prescribing</li>
                  <li>Bring your own active cases</li>
                </ul>
                <a
                  className="btn btn-outline"
                  href="https://www.ecampnd.com/product/homeopathic-clinical-training-program/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on eCamp ND
                </a>
              </article>

              <article className="training-card reveal reveal-delay-1">
                <span className="training-card__label">Full pathway</span>
                <h3>Homeopathic Practitioner Training Program</h3>
                <p className="training-card__meta">
                  Four-part · ~500 hours over ~2 years · Next cohort Sept 2027
                </p>
                <p>
                  Classical homeopathy from first class onward—class, clinical
                  hours, and group plus one-to-one Zoom mentoring. Parts 3 &amp;
                  4 include live case-taking, software training, and completion
                  of credential-style cases for NASH registration pathways.
                </p>
                <ul className="training-card__list">
                  <li>Didactic + clinical + mentoring hours</li>
                  <li>Live and independent case work</li>
                  <li>Long-term case management</li>
                  <li>Limited to 10 students per cohort</li>
                </ul>
                <a
                  className="btn btn-outline"
                  href="https://www.ecampnd.com/product/homeopathic-practitioner-training-program/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on eCamp ND
                </a>
              </article>
            </div>

            <p className="training__note reveal">
              Advanced training and mentorship are offered by{" "}
              <a
                href="https://www.ecampnd.com/"
                target="_blank"
                rel="noreferrer"
              >
                Dr. Eli Camp, ND
              </a>
              . Explore lectures, auditor options, and additional courses on
              ecampnd.com.
            </p>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section">
            <div className="reveal">
              <span className="section__eyebrow">Begin</span>
              <h2 className="section__title">Schedule a consultation</h2>
              <p className="section__lead">
                Share a little about what brings you. We’ll reply with next
                steps for care, caregiver support, or training interest.
              </p>
            </div>

            {submitted ? (
              <div className="form-success" role="status">
                <h3>Request received</h3>
                <p>
                  Thank you. This form is a demo inbox for now—when messaging is
                  connected, your note will reach the practice directly.
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
                  <select name="interest" defaultValue="consult">
                    <option value="consult">Adult / geriatric consult</option>
                    <option value="home">Elder home care visit</option>
                    <option value="virtual">Virtual consultation</option>
                    <option value="caregiver">Caregiver education</option>
                    <option value="eol">Palliative / end of life care</option>
                    <option value="training">Homeopathy training & mentorship</option>
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
                    Send request
                  </button>
                  <a className="btn btn-ghost" href="mailto:drludenia@essenceofaging.com">
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
              Foundations for healthy aging—naturopathic care, home visits, and
              classical homeopathy.
            </p>
          </div>
          <div className="site-footer__grid">
            <div>
              <h3>Practitioner</h3>
              <p>Dr. Janel Ludenia ND, OTR/L</p>
              <p>Geriatric natural medicine</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>
                <a href="mailto:drludenia@essenceofaging.com">
                  drludenia@essenceofaging.com
                </a>
              </p>
              <p>
                <a href="tel:+15032703818">(503) 270-3818</a>
              </p>
            </div>
            <div>
              <h3>Visit</h3>
              <p>19190 SW 90th Ave #411</p>
              <p>Tualatin, OR 97062</p>
              <p>Virtual care nationwide · Home visits in Portland area</p>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Stillfield Classical</span>
            <span>
              Training by{" "}
              <a
                href="https://www.ecampnd.com/"
                target="_blank"
                rel="noreferrer"
              >
                eCamp ND
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
