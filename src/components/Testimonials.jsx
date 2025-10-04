function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>What Our <em>Clients</em> Say</h2>
              <p>
                Hear from our users who love using our application.
              </p>
            </div>
          </div>

          {/* Testimonial 1 */}
          <div className="col-lg-4">
            <div className="testimonial-item">
              <p>
                “This app completely changed how I manage my projects. Super easy
                to use and very reliable.”
              </p>
              <h4>Jane Doe</h4>
              <span>Project Manager</span>
              <img src="assets/images/testimonial-01.jpg" alt="Jane" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-lg-4">
            <div className="testimonial-item active">
              <p>
                “Amazing features at an affordable price. I highly recommend it
                to anyone looking for productivity tools.”
              </p>
              <h4>John Smith</h4>
              <span>Entrepreneur</span>
              <img src="assets/images/testimonial-02.jpg" alt="John" />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-lg-4">
            <div className="testimonial-item">
              <p>
                “Excellent support team and smooth user experience. It makes my
                workflow so much better.”
              </p>
              <h4>Sarah Lee</h4>
              <span>Freelancer</span>
              <img src="assets/images/testimonial-03.jpg" alt="Sarah" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
