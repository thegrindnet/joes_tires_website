import "./Services.css";
import image2 from "../../assets/shop-2.png";
import tire from "../../assets/tire.png";

export default function Services() {
  return (
    <>
      <section className="intro section">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Tire Service You Can Trust</p>
            <h2>Repair first. Replace only when needed.</h2>
            <p>
              At Joe Tire Repair & Service, we keep you rolling safely. From
              quick flat repairs and precision patching to sensor replacement
              and air top-offs, our team handles the details so you do not have
              to.
            </p>
            <p>
              Looking for a deal? We stock a wide selection of quality used
              tires to get you back on the road without the premium price tag.
              Expect fast service, expert mounting, and honest advice every
              time.
            </p>
          </div>
          <div className="image-card">
            <img
              src={image2}
              alt="Joe Tire Repair and Service shop exterior in Chaparral New Mexico"
            />
            <div className="floating-card">
              <strong>Need tire help today?</strong>
              <span>Call us and get back on the road.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="section services">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow dark">Our Services</p>
            <h2>Fast, affordable tire solutions</h2>
            <p>Simple service, clear pricing, and work done right.</p>
          </div>
          <div class="service-grid">
            <article class="service-card">
              <span>
                <img src={tire} className="service__tire"></img>
              </span>
              <h3>Flat Tire Repair</h3>
              <p>Quick flat repairs to help you safely get back on the road.</p>
            </article>
            <article class="service-card">
              <span>🔧</span>
              <h3>Precision Patching</h3>
              <p>
                Professional internal tire patching for longer-lasting repairs.
              </p>
            </article>
            <article class="service-card">
              <span>📟</span>
              <h3>Sensor Replacement</h3>
              <p>TPMS sensor replacement and tire pressure support.</p>
            </article>
            <article class="service-card">
              <span>💨</span>
              <h3>Air Top-Offs</h3>
              <p>
                Proper tire pressure checks and air top-offs for safer driving.
              </p>
            </article>
            <article class="service-card">
              <span>💵</span>
              <h3>Used Tires</h3>
              <p>
                Quality used tires at affordable prices for budget-conscious
                drivers.
              </p>
            </article>
            <article class="service-card">
              <span>⚙️</span>
              <h3>Mounting & Installation</h3>
              <p>Expert tire mounting with careful, dependable service.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
