import "./Header.css";

export default function Header() {
  return (
    <header class="header">
      <a class="brand" href="#home" aria-label="Joe Tire Repair & Service home">
        <img src="assets/logo.png" alt="Joe Tire Repair and Service logo" />
        <span>Joe Tire</span>
      </a>
      <nav>
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#location">Location</a>
        <a class="nav-phone" href="tel:+19158016308">
          Call Now
        </a>
      </nav>
    </header>
  );
}
