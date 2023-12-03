const Footer = () => {
  return (
    <div>
        <footer className="site-footer site-bg-dark site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 site-animate">
                    <h2 className="site-heading-2">About Us</h2>
                    <p>
                      This is a Final Project for our Front-End Web Development class, this is a projet to introduce some of Indonesian traditional cuisine.
                      We hope that this website would be able to help people that want to know some of Indonesian cuisine.
                    </p>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-3 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">The Development Team Member</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="https://www.instagram.com/gabyloing/" className="py-2 d-block">
                            Gaby Loing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/briannalxndraa/" className="py-2 d-block">
                            Brianna Rhebok
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/vicananana_/" className="py-2 d-block">
                            Veronica Tauran
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/koyanagiyukiii/" className="py-2 d-block">
                            Koyanagi Yuki
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/betahkenrick/" className="py-2 d-block">
                            Kendrick Betah
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/devanprabowo1/" className="py-2 d-block">
                            Devan Prabowo
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-md-2 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">Useful links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-2 d-block">
                            Foods
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Drinks
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Breakfast
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Brunch
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Dinner
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <div className="col-md-2 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">Useful links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-2 d-block">
                            Foods
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Drinks
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Breakfast
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Brunch
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Dinner
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row site-animate">
              {/* <div className="col-md-12 text-center">
                <div className="site-footer-widget mb-4">
                  <ul className="site-footer-social list-unstyled ">
                    <li className="site-animate">
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="site-animate">
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li className="site-animate">
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-md-12 text-center">
                <p>
                  ©{" "}
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | Made with{" "}
                  <i className="icon-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>{" "}
                  &amp; distributed by{" "}
                  <a href="https://themewagon.com" target="_blank">
                    ThemeWagon
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer