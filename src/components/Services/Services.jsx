import "./Services.css";
import image2 from "../../assets/shop-2.png";

export default function Services() {
  return (
    <>
      <section className="intro section">
        <div className="container two-col">
          <div>
            <p className="eyebrow dark">Tire Service You Can Trust</p>
            <h2>Repair first. Replace only when needed.</h2>
            <p>
              At Joe Tire Repair & Service, we keep you rolling safely. From
              quick flat repairs and precision patching to sensor replacement
              and air top-offs, our team handles the details so you do not have
              to.
            </p>
            <p>
              Looking for a deal? We stock a wide selection of quality used
              tires to get you back on the road without the premium price tag.
              Expect fast service, expert mounting, and honest advice every
              time.
            </p>
          </div>
          <div className="image-card">
            <img
              src={image2}
              alt="Joe Tire Repair and Service shop exterior in Chaparral New Mexico"
            />
            <div className="floating-card">
              <strong>Need tire help today?</strong>
              <span>Call us and get back on the road.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
