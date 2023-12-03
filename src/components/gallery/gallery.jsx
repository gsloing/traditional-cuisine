import React from 'react'

const Gallery = () => {
  return (
    <section className="site-section" id="section-gallery">
          <div className="container">
            <div className="row site-custom-gutters">
              <div className="col-md-12 text-center mb-5 site-animate">
                <h2 className="display-4">Gallery</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">
                      Ini adalah gallery makanan khas daerah Indonesia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/Food-Picture/Sumatra/rendang(sumatera barat).jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/Food-Picture/Sumatra/rendang(sumatera barat).jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/Food-Picture/Sulawesi/sul3(coto-makassar).jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/Food-Picture/Sulawesi/sul3(coto-makassar).jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_3.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_3.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_2.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_2.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_3.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_3.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_1.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_1.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Gallery