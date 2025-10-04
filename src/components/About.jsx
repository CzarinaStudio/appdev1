function About() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>About <em>Our App</em> &amp; How It Works</h2>
              <p>
                This section explains more about the features of the app,
                how it helps users manage tasks effectively, and why it’s built
                with performance and simplicity in mind.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="box-item">
                  <h4><a href="#">Secure</a></h4>
                  <p>All your data is encrypted and safe.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item">
                  <h4><a href="#">Fast</a></h4>
                  <p>Optimized for speed and reliability.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 align-self-center">
            <div className="about-image">
              <img src="assets/images/about-image.png" alt="About illustration" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
