import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <a href="#services">Services</a>
      <a href="#reviews">Reviews</a>
      <a href="#location">Location</a>
      <a className="nav-phone" href="tel:+19158016308">
        Call Now
      </a>
    </nav>
  );
}
