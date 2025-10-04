function Contact() {
  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Get In <em>Touch</em> With Us</h2>
              <p>
                Have questions or need support? Send us a message and we’ll get back
                to you as soon as possible.
              </p>
            </div>
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <input name="name" type="text" id="name" placeholder="Your Name" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input name="email" type="email" id="email" placeholder="Your Email" required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button">
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 align-self-center">
            <div className="contact-info">
              <ul>
                <li>
                  <span>📍 Address:</span> 123 Main Street, Your City
                </li>
                <li>
                  <span>📞 Phone:</span> (123) 456-7890
                </li>
                <li>
                  <span>📧 Email:</span> contact@yourapp.com
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
