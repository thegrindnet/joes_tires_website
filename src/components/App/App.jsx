import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Checklist from "../Checklist/Checklist";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

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
      <Footer />
    </div>
  );
}
