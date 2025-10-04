function Hero() {
  return (
    <div className="welcome-area" id="welcome">
      <div className="header-text">
        <div className="container">
          <div className="row">
            {/* Left Text Content */}
            <div className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12"
                 data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
              <h1>
                Get <strong>the best</strong> app for your business
              </h1>
              <p>
                This is a professional looking HTML Bootstrap 4 template
                for your business. Customize it easily as you want and
                make it look stunning.
              </p>
              <a href="#about" className="main-button-slider">
                Discover More
              </a>
            </div>

            {/* Right Image Content */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                 data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
              <img src="assets/images/slider-icon.png" className="rounded img-fluid d-block mx-auto" alt="App" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
