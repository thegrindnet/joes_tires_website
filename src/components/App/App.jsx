import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Checklist from "../Checklist/Checklist";
import Reviews from "../Reviews/Reviews";

export default function App() {
  return (
    <div>
      <Header />

      <main id="home">
        <Hero />
        <Services />
        <Checklist />
        <Reviews />

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
