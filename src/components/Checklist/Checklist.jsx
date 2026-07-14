import "./Checklist.css";
import shop1 from "../../assets/shop-1.png";

export default function Checklist() {
  return (
    <section className="section black-band">
      <div className="container two-col reverse-mobile">
        <div className="photo-stack">
          <img src={shop1} alt="Joe Tire Repair and Service business photo" />
        </div>
        <div>
          <p className="eyebrow orange">Why Choose Joe Tire?</p>
          <h2>Local service with honest advice.</h2>
          <ul className="check-list">
            <li>Fast turnaround</li>
            <li>Affordable quality used tires</li>
            <li>Friendly local service</li>
            <li>Experienced tire technicians</li>
            <li>Professional repair and mounting</li>
            <li>Safety-first recommendations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
