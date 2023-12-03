const List = () => {
  return (
    <div>
      <section className="site-section bg-light" id="section-news">
        <div className="menu-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-title text-center">
                  <h2>List Makanan Per-Daerah</h2>
                  <p>
                    Berikut ini adalah list makanan dari beberapa daerah.
                  </p>
                </div>
              </div>
            </div>
            <div className="row inner-menu-box">
              <div className="col-3">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Preview
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Sumatra
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Jawa
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile1"
                    role="tab"
                    aria-controls="v-pills-profile1"
                    aria-selected="false"
                  >
                    Kalimantan
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile2"
                    role="tab"
                    aria-controls="v-pills-profile2"
                    aria-selected="false"
                  >
                    Sulawesi{/*</a*/}
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Papua
                  </a>
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\batagor(jawa barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Batagor</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\ayam cincane(kalimantan timur).jpeg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Ayam Cincane</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\tinutuan-sulut.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Tinutuan(Bubur Manado)  </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\Bika ambon (sumatera utara).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Bika Ambon</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\papeda-papua.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Papeda</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\bubur sambas(kalimantan barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Bubur Sambas</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Maluku\gohu ikan-maluku utara.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Gohu Ikan</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\sate ulat sagu-sorong.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Sate Ulat Sagu</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\udang selingkuh-papua pegunungan.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Udang Selingkuh</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sumatra Start */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="/public/images/Food-Picture/Sumatra/Bika ambon (sumatera utara).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Bika Ambon</h4>
                            <p>Saat mendengar nama kue Bika Ambon, mungkin pertanyaan yang seting terlintas di benak Anda adalah
                             mengapa nama dan asal makanan tersebut berbeda kontras sekali.  Meski menyandang nama Ambon, kue ini tidak berasal dari Ambon, satu propinsi di bagian timur Indonesia, 
                            tetapi justru berasal dari ibukota Medan, Sumatera Utara. Bika Ambon di kenal sebagai penganan nusantara sebagai kuliner khas Medan, Sumatera Utara.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\gulai belacan(riau).png"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Gulai Belacan</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="/public\images\Food-Picture\Sumatra\gulai ikan patin(jambi).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Gulai Ikan Patin</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\Mi aceh(nangroe aceh darusallam).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Mie Aceh</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\mi bangka(bangka belitung).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Mie Bangka</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="public\images\Food-Picture\Sumatra\otak otak(kepulauan riau).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Otak Otak</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\pempek(sumatera selatan).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Pempek</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\pendap(bengkulu).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Pendap</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\rendang(sumatera barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Rendang</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\seruit(bandar lampung).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Seruit</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sumatra End */}
                  {/* Kalimantan Start */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile1"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\ayam cincane(kalimantan timur).jpeg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Ayam Cincane</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\bubur sambas(kalimantan barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Bubur Sambas</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\juhu umbut rotan (kalteng).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Juhu Umbut Rotan</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\sate temburung (kaltara).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Sate Temburung</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Kalimantan\soto banjar(kalimantan selatan).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Soto Banjar</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="public\images\Food-Picture\Sumatra\otak otak(kepulauan riau).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Otak Otak</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\pempek(sumatera selatan).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Pempek</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\pendap(bengkulu).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Pendap</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\rendang(sumatera barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Rendang</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\seruit(bandar lampung).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Seruit</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* Kalimantan End */}
                  {/* Sulawesi Start */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile2"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\binte-biluhuta (gorontalo).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Binte Biluhuta</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\kaledo-sulteng.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Kaledo</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\Kue-Jepa (sulbar).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Kue Jepa</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\sate gogos-sultra.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Sate Gogos</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\sul3(coto-makassar).jpeg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Coto Makassar</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sulawesi\tinutuan-sulut.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Tinutuan (Bubur Manado)</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\pempek(sumatera selatan).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Pempek</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\pendap(bengkulu).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Pendap</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\rendang(sumatera barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Rendang</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid drinks">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Sumatra\seruit(bandar lampung).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Seruit</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                            <h5> $10.79</h5>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* Sulawesi End */}
                  {/* Jawa Start */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\batagor(jawa barat).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Batagor</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\Gudeg jogja.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Gudeg</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\Jawa1 (Soto Kudus).jpeg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Soto Kudus</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\jawa8 (Rawon).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Rawon</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\kerak-telor(dki).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Kerak Telor</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid lunch">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Jawa\kue jojorong (banten).jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Kue Jojorong</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Jawa End */}
                  {/* Papua Start */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\ikan bakar mnkwr - papua barat.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Ikan Bakar Manokwari</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\papeda-papua.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Papeda</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\sagu bagea-papua tengah.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Sagu Bagea</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\sagu sep-papua selatan.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Sagu Sep</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\sate ulat sagu-sorong.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Sate Ulat Sagu</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 special-grid dinner">
                        <div className="gallery-single fix">
                          <img
                            src="\public\images\Food-Picture\Papua\udang selingkuh-papua pegunungan.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>Udang Selingkuh</h4>
                            <p>Sed id magna vitae eros sagittis euismod.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Papua End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
