function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Choose The <em>Best Plan</em> For You</h2>
              <p>
                Select from our affordable plans designed to meet your needs.
              </p>
            </div>
          </div>

          {/* Pricing Card 1 */}
          <div className="col-lg-4">
            <div className="pricing-item">
              <h4>Basic</h4>
              <div className="price">
                <h6>$10</h6>
                <span>/ month</span>
              </div>
              <ul>
                <li>✔ 10 Projects</li>
                <li>✔ Basic Support</li>
                <li>✔ Access to community</li>
              </ul>
              <div className="border-button">
                <a href="#">Get Started</a>
              </div>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="col-lg-4">
            <div className="pricing-item active">
              <h4>Standard</h4>
              <div className="price">
                <h6>$25</h6>
                <span>/ month</span>
              </div>
              <ul>
                <li>✔ Unlimited Projects</li>
                <li>✔ Priority Support</li>
                <li>✔ Advanced features</li>
              </ul>
              <div className="border-button">
                <a href="#">Choose Plan</a>
              </div>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="col-lg-4">
            <div className="pricing-item">
              <h4>Premium</h4>
              <div className="price">
                <h6>$50</h6>
                <span>/ month</span>
              </div>
              <ul>
                <li>✔ Everything in Standard</li>
                <li>✔ 24/7 Dedicated Support</li>
                <li>✔ Custom Solutions</li>
              </ul>
              <div className="border-button">
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
