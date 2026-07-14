import "./Reviews.css";

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow dark">Customer Reviews</p>
          <h2>Trusted by local drivers</h2>
        </div>
        <div className="review-grid">
          <article className="review">
            <span>★★★★★</span>
            <p>“Very helpful. They got my trailer tire fixed up in no time.”</p>
            <strong>Michael Ortega</strong>
          </article>
          <article className="review">
            <span>★★★★★</span>
            <p>
              “Great service, friendly personnel, great prices, fast service.”
            </p>
            <strong>Andres Olvera</strong>
          </article>
          <article className="review featured">
            <span>★★★★★</span>
            <p>
              “Fast, professional, and very honest. The owner went above and
              beyond and made sure I got a good tire at a fair price.”
            </p>
            <strong>Robert Gurrola</strong>
          </article>
          <article className="review">
            <span>★★★★★</span>
            <p>
              “Great price. Amazing service! They even had new tires at
              affordable prices.”
            </p>
            <strong>Richard Sanchez</strong>
          </article>
          <article className="review">
            <span>★★★★★</span>
            <p>“Excellent and fast service. They repaired my tire.”</p>
            <strong>Kenny Willis</strong>
          </article>
          <article className="review">
            <span>★★★★★</span>
            <p>“Great service. And a great price.”</p>
            <strong>Adrian Y</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
