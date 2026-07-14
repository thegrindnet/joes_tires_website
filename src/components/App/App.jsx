import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Checklist from "../Checklist/Checklist";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";

export default function App() {
  return (
    <div>
      <Header />

      <main id="home">
        <Hero />
        <Services />
        <Checklist />
        <Reviews />
        <Contact />
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
