import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section id="location" className="section location">
        <div className="container location-grid">
          <div className="contact-card">
            <p className="eyebrow dark">Visit or Call</p>
            <h2>Joe Tire Repair & Service</h2>
            <p className="big">326 McCombs Dr.Chaparral, New Mexico</p>
            <a className="btn primary wide" href="tel:+19158016308">
              Call Now: (915) 801-6308
            </a>
            <div className="hours">
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
          <div className="map-card">
            <iframe
              title="Map to Joe Tire Repair and Service"
              loading="lazy"
              src="https://www.google.com/maps?q=326%20McCombs%20Dr.%20Chaparral%20New%20Mexico&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h2>Need tire service today?</h2>
          <p>
            Whether it is a flat tire, sensor replacement, or a quality used
            tire, Joe Tire Repair & Service is ready to help.
          </p>
          <a className="btn black" href="tel:+19158016308">
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}
