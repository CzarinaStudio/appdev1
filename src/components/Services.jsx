function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="row">
          {/* Section Heading */}
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h2>Our Services</h2>
              <span>What We Offer</span>
            </div>
          </div>

          {/* Service Item 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="icon">
                <img src="/assets/service-icon-01.png" alt="Service 1" />
              </div>
              <h4>App Development</h4>
              <p>
                We create fast, modern, and secure mobile apps tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="icon">
                <img src="/assets/service-icon-02.png" alt="Service 2" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Stunning, user-friendly designs that keep your customers engaged.
              </p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="icon">
                <img src="/assets/service-icon-03.png" alt="Service 3" />
              </div>
              <h4>Cloud Solutions</h4>
              <p>
                Scalable cloud integration services to improve efficiency and security.
              </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="icon">
                <img src="/assets/service-icon-04.png" alt="Service 4" />
              </div>
              <h4>24/7 Support</h4>
              <p>
                Our team is here to provide technical assistance anytime you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
