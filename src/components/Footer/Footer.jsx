import "./Footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <img
            src={logo}
            alt="Joe Tire Repair and Service logo"
            className="footer-logo"
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
        <a class="mobile-call" href="tel:+19158016308">
          Call Now: (915) 801-6308
        </a>
      </div>
    </footer>
  );
}
