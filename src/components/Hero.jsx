function Hero() {
  return (
    <div className="main-banner" id="welcome">
      <div className="container">
        <div className="row">
          {/* Left side content */}
          <div className="col-lg-6 align-self-center">
            <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
              <div className="row">
                <div className="col-lg-12">
                  <h6>Welcome to Chain App Dev</h6>
                  <h2>Best App Development Agency</h2>
                  <p>
                    Chain App Dev is a professional template with Bootstrap 5.0.2 CSS 
                    for your app-related websites. This template is provided by TemplateMo.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="border-first-button scroll-to-section">
                    <a href="#services">Discover More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="col-lg-6">
            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
              <img src="/assets/slider-dec.png" alt="App Preview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
