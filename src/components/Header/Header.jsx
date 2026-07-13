import "./Header.css";
import NavBar from "../Navigation/Navigation";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <a
        className="header_logo"
        href="#home"
        aria-label="Joe Tire Repair & Service home"
      >
        <img
          className="header__logo-image"
          src={logo}
          alt="Joe Tire Repair and Service logo"
        />
      </a>
      <NavBar />
    </header>
  );
}
