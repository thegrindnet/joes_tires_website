import "./Header.css";
import NavBar from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <a
        className="header_logo"
        href="#home"
        aria-label="Joe Tire Repair & Service home"
      >
        <img src="assets/logo.png" alt="Joe Tire Repair and Service logo" />
        <span>Joe Tire</span>
      </a>
      <NavBar />
    </header>
  );
}
