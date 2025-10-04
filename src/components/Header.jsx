function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/" className="logo">
                <img src="/assets/logo.png" alt="Chain App Dev" />
              </a>

              {/* Menu */}
              <ul className="nav">
                <li><a href="#welcome" className="active">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li>
                  <div className="gradient-button">
                    <a href="#get-started">Get Started</a>
                  </div>
                </li>
              </ul>

              {/* Mobile menu trigger */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
