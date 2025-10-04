function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Logo + Description */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-logo">
              <img src="/assets/white-logo.png" alt="Chain App Dev" />
              <p>
                Chain App Dev is a modern and professional Bootstrap 5 template for 
                showcasing app-related services and products.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#welcome">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>Email: info@chainappdev.com</li>
              <li>Phone: +123 456 789</li>
              <li>Address: 123 App Street, Tech City</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-text">
              <p>
                © 2025 Chain App Dev. All Rights Reserved. 
                <br /> Design inspired by <a href="https://templatemo.com" target="_blank" rel="noreferrer">TemplateMo</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
