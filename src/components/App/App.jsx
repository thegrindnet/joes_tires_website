import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

export default function App() {
  return (
    <div>
      <Header />

      <main id="home">
        <Hero />
        {/* <section class="intro section">
          <div class="container two-col">
            <div>
              <p class="eyebrow dark">Tire Service You Can Trust</p>
              <h2>Repair first. Replace only when needed.</h2>
              <p>
                At Joe Tire Repair & Service, we keep you rolling safely. From
                quick flat repairs and precision patching to sensor replacement
                and air top-offs, our team handles the details so you do not
                have to.
              </p>
              <p>
                Looking for a deal? We stock a wide selection of quality used
                tires to get you back on the road without the premium price tag.
                Expect fast service, expert mounting, and honest advice every
                time.
              </p>
            </div>
            <div class="image-card">
              <img
                src="assets/shop-2.jpg"
                alt="Joe Tire Repair and Service shop exterior in Chaparral New Mexico"
              />
              <div class="floating-card">
                <strong>Need tire help today?</strong>
                <span>Call us and get back on the road.</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="services" class="section services">
          <div class="container">
            <div class="section-heading">
              <p class="eyebrow dark">Our Services</p>
              <h2>Fast, affordable tire solutions</h2>
              <p>Simple service, clear pricing, and work done right.</p>
            </div>
            <div class="service-grid">
              <article class="service-card">
                <span>🛞</span>
                <h3>Flat Tire Repair</h3>
                <p>
                  Quick flat repairs to help you safely get back on the road.
                </p>
              </article>
              <article class="service-card">
                <span>🔧</span>
                <h3>Precision Patching</h3>
                <p>
                  Professional internal tire patching for longer-lasting
                  repairs.
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
                  Proper tire pressure checks and air top-offs for safer
                  driving.
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
        </section> */}

        {/* <section class="section black-band">
          <div class="container two-col reverse-mobile">
            <div class="photo-stack">
              <img
                src="assets/shop-1.jpg"
                alt="Joe Tire Repair and Service business photo"
              />
            </div>
            <div>
              <p class="eyebrow orange">Why Choose Joe Tire?</p>
              <h2>Local service with honest advice.</h2>
              <ul class="check-list">
                <li>Fast turnaround</li>
                <li>Affordable quality used tires</li>
                <li>Friendly local service</li>
                <li>Experienced tire technicians</li>
                <li>Professional repair and mounting</li>
                <li>Safety-first recommendations</li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* <section id="reviews" class="section reviews">
          <div class="container">
            <div class="section-heading">
              <p class="eyebrow dark">Customer Reviews</p>
              <h2>Trusted by local drivers</h2>
            </div>
            <div class="review-grid">
              <article class="review">
                <span>★★★★★</span>
                <p>
                  “Very helpful. They got my trailer tire fixed up in no time.”
                </p>
                <strong>Michael Ortega</strong>
              </article>
              <article class="review">
                <span>★★★★★</span>
                <p>
                  “Great service, friendly personnel, great prices, fast
                  service.”
                </p>
                <strong>Andres Olvera</strong>
              </article>
              <article class="review featured">
                <span>★★★★★</span>
                <p>
                  “Fast, professional, and very honest. The owner went above and
                  beyond and made sure I got a good tire at a fair price.”
                </p>
                <strong>Robert Gurrola</strong>
              </article>
              <article class="review">
                <span>★★★★★</span>
                <p>
                  “Great price. Amazing service! They even had new tires at
                  affordable prices.”
                </p>
                <strong>Richard Sanchez</strong>
              </article>
              <article class="review">
                <span>★★★★★</span>
                <p>“Excellent and fast service. They repaired my tire.”</p>
                <strong>Kenny Willis</strong>
              </article>
              <article class="review">
                <span>★★★★★</span>
                <p>“Great service. And a great price.”</p>
                <strong>Adrian Y</strong>
              </article>
            </div>
          </div>
        </section> */}

        {/* <section id="location" class="section location">
          <div class="container location-grid">
            <div class="contact-card">
              <p class="eyebrow dark">Visit or Call</p>
              <h2>Joe Tire Repair & Service</h2>
              <p class="big">326 McCombs Dr.Chaparral, New Mexico</p>
              <a class="btn primary wide" href="tel:+19158016308">
                Call Now: (915) 801-6308
              </a>
              <div class="hours">
                <h3>Business Hours</h3>
                <p>
                  <strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 8:00 AM – 3:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
            <div class="map-card">
              <iframe
                title="Map to Joe Tire Repair and Service"
                loading="lazy"
                src="https://www.google.com/maps?q=326%20McCombs%20Dr.%20Chaparral%20New%20Mexico&output=embed"
              ></iframe>
            </div>
          </div>
        </section> */}

        {/* <section class="cta">
          <div class="container cta-inner">
            <h2>Need tire service today?</h2>
            <p>
              Whether it is a flat tire, sensor replacement, or a quality used
              tire, Joe Tire Repair & Service is ready to help.
            </p>
            <a class="btn black" href="tel:+19158016308">
              Call Now
            </a>
          </div>
        </section> */}
      </main>

      {/* <footer>
        <div class="container footer-grid">
          <div>
            <img
              src="assets/logo.png"
              alt="Joe Tire Repair and Service logo"
              class="footer-logo"
            />
            <p>
              Fast tire repair, quality used tires, and honest local service in
              Chaparral, New Mexico.
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>326 McCombs Dr. Chaparral, NM</p>
            <p>
              <a href="tel:+19158016308">(915) 801-6308</a>
            </p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Mon-Fri: 8AM-5PM Saturday: 8AM-3PM Sunday: Closed</p>
          </div>
        </div>
      </footer> */}

      {/* <a class="mobile-call" href="tel:+19158016308">Call Now: (915) 801-6308</a> */}
    </div>
  );
}
