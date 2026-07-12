import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="eyebrow">Chaparral, New Mexico Tire Repair</p>
        <h1>Keeping Chaparral Rolling Safely</h1>
        <p className="hero-text">
          Fast tire repairs, precision patching, TPMS sensor replacement, air
          top-offs, expert mounting, and quality used tires at honest prices.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="tel:+19158016308">
            Call Now: (915) 801-6308
          </a>
          <a className="btn secondary" href="#services">
            View Services
          </a>
        </div>
        <div className="trust-row">
          <span>✓ Fast Service</span>
          <span>✓ Honest Prices</span>
          <span>✓ Quality Used Tires</span>
        </div>
      </div>
    </section>
  );
}
