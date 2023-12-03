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
                            <p>Gulai Belacan berbahan dasar udang yang dicampur dengan rempah-rempah seperti lada, kemiri, asam jawa, santan kelapa dll. Ciri utama dalam masakan tradisional Melayu adalah penggunaan rempah-rempah yang cukup banyak.</p>
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
                            <p>Gulai Patin merupakan masakan khas Jambi dimana masyarakat lokalnya sangat mempopulerkan makanan ini. Gulai ini juga dimasak dengan menggunakan santan kelapa. Bumbu lain yang digunakan dalam pembuatan masakan Gulai Ikan Patin ini adalah cabe merah, lengkuas, serai, kunyit, bawang merah dan bawah putih.</p>
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
                            <p>Mie Aceh adalah masakan mie pedas khas Aceh di Indonesia. Mie kuning tebal dengan irisan daging sapi, daging kambing, atau makanan laut (udang dan cumi) disajikan dalam sup sejenis kari yang gurih dan pedas. Mie Aceh tersedia dalam dua jenis, Mie Aceh goreng dan Mie Aceh kuah.</p>
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
                            <p>Mie Bangka atau dikenal sebagai Bakmi Bangka adalah salah hidangan tradisional masyarakat pulau Bangka.

Mie bagi masyarakat Bangka dikenal sebagai mien, mian (麵), merupakan pengaruh dari kuliner orang Hakka. Seiring dengan merantaunya orang Bangka ke berbagai daerah, hidangan mie khas Bangka tersebar di banyak daerah Indonesia</p>
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
                            <p>Otak – otak adalah makanan khas yang sangat digemari oleh masyarakat Kota Pangkalpinang. Biasanya otak – otak disajikan sebagai camilan saat berkumpul bersama keluarga atau temen. Otak-otak dibuat dari ikan yang diambil dagingnya, kemudian dihaluskan dan dibumbui.</p>
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
                            <p>Pempek adalah salah satu makanan tradisional asal Palembang provinsi Sumatera Selatan. Makanan ini terbuat dari bahan dasar sagu dan ikan karena di Bangka masyarakatnya mayoritas nelayan dan merupakan provinsi tetangga dari Palembang, oleh karena itu pempek mudah ditemui di kepulauan Bangka Belitung.</p>
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
                            <p>Pendap adalah ikan yang diolah dengan bumbu khusus bersama dengan kelapa parut dan dimasak dalam bungkusan daun talas atau daun pisang seperti ikan pepes. Harga satu porsi Pendap ini tergolong murah. Rata-rata harga satu porsinya hanya Rp6.000 sampai Rp10.000, tergantung ukuran.</p>
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
                            <p>Rendang adalah masakan daging yang berasal dari Minangkabau Sumatra Barat Indonesia. Proses memasak rendang dengan suhu rendah dalam waktu lama, menggunakan santan dan aneka rempah-rempah khas indonesia yang sedikit pedas sehingga menambah ke khas an dan kelezatannya.</p>
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
                            <p>Seruit adalah makanan khas daerah Lampung, Indonesia, yaitu masakan ikan yang digoreng atau dibakar dicampur sambal terasi, tempoyak (olahan durian) atau mangga. Jenis ikan adalah besarnya ikan sungai seperti belide, baung, layis dll, ditambah lalapan.</p>
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
                            <p>Ayam cincane adalah ayam kampung yang diolah dengan cara dilumuri bumbu rempah-rempah lalu dibakar hingga matang. Tampilannya menarik karena berkat bumbu rempah, daging ayam jadi warna merah. Rasanya menggoyang lidah. Gurih meresap sampai daging ayam.</p>
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
                            <p> Bubur pedas atau bubur sambas merupakan kuliner khas masyarakat Sambas, Pontianak, Kalimantan Barat. Tidak seperti bubur pada umumnya yang dibuat dengan memasak beras hingga lembut. Bubur pedas khas Sambas ini terbuat dari beras yang ditumbuk halus, baru lah kemudian dimasak.</p>
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
                            <p>Juhu singkah adalah masakan khas masyarakat Dayak di provinsi Kalimantan Tengah, Indonesia. Dalam bahasa Ngaju, juhu artinya masakan berkuah, sedangkan singkah artinya umbut, yang merujuk kepada batang rotan yang masih muda. Umbut rotan biasanya mudah diperoleh di dalam hutan tanpa perlu menanamnya terlebih dahulu.</p>
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
                            <p>Bahan dasar sate ini adalah temburung, sejenis hewan laut yang tampilannya mirip dengan kerang. Namun, temburung memiliki cangkang melingkar seperti terompet yang berbeda dengan kerang. Bumbu utama yang digunakan untuk meracik sate temburung terdiri atas berbagai bahan.</p>
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
                            <p>Soto Banjar merupakan salah satu kuliner yang terkenal di Indonesia. Berbeda dengan soto lainnya di Indonesia, soto ini memiliki keunikan dalam penyajian dan cita rasanya. Soto Banjar ini menggunakan ayam kampung sebagai bahan utamanya. Bumbu yang di haluskan berupa bawang merah, bawang putih, merica.</p>
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
                            <p>Binte biluhuta atau dikenal pula dengan nama milu siram merupakan makanan khas masyarakat Gorontalo, Sulawesi, Indonesia. Binde biluhuta berasal dari Bahasa Gorontalo yaitu binte yang berarti "jagung", dan biluhuta artinya "disiram". Sesuai dengan namanya, milu siram adalah makanan berbahan dasar jagung yang disajikan dengan cara disiram dengan kuah. </p>
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
                            <p>Kaledo merupakan singkatan dari Kaki Lembu Donggala, meskipun sekarang ini lebih banyak menggunakan kaki sapi. Kaledo adalah salah satu menu yang sebagian besar cocok untuk semua lidah. Dalam proses pembuatannya, daging melalui perebusan yang panjang, sehingga memiliki tekstur yang lebih empuk.</p>
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
                            <p>SJepa (atau dieja yepa), adalah makanan khas suku Mandar, Sulawesi Barat, berupa lingkaran dalam lembaran tipis. Roti pipih ini dibuat dari bahan singkong dan parutan kelapa. Warnanya putih kecokelatan dengan aroma singkong bakar dan bertekstur seperti roti.</p>
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
                            <p>Sate Pokea terdiri dari daging kerang yang diberi bumbu agak pedas manis, biasanya disantap bersama sejenis lemper tanpa isi yang dibakar da dikukus, dikenal dengan nama gogos.</p>
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
                            <p>Coto makassar atau Pallu coto mangkasarak adalah hidangan tradisional Suku Makassar, Sulawesi Selatan. Makanan ini terbuat dari jeroan sapi yang direbus dalam waktu yang lama. Rebusan jeroan bercampur daging sapi ini kemudian diiris-iris, lalu dibumbui dengan bumbu yang diracik secara khusus.</p>
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
                            <p>Tinutuan sering disebut sebagai bubur campur oleh warga asli Sulawesi Utara, karena semua bahan dicampur menjadi satu saat memasaknya, dan ketika disajikan dalam mangkuk atau piring juga tercampur tanpa ada satu bahan yang dipisahkan</p>
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
                            <p>Batagor adalah sajian yang digoreng. Tahu yang digunakan bukan tahu kuning, melainkan tahu putih. Batagor yang sudah digoreng kemudian dipotong atau digunting, dan disiram dengan sambal kacang. Rasa dari sambal kacang cukup bervariasi.</p>
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
                            <p>Seperti yang Sobat Pesona ketahui, Yogyakarta dikenal sebagai kota gudeg. Nah, gudeg itu sendiri merupakan masakan yang berbahan utama nangka muda atau oleh warga lokal disebut gori. Dalam prosesnya, potongan daging nangka ini direbus dengan gula merah dan santan dengan api kecil selama beberapa jam.</p>
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
                            <p>Soto Kudus (Hanacaraka: ꦱꦺꦴꦠꦺꦴ​ꦏꦸꦢꦸꦱ꧀) adalah soto yang berasal dari Kudus, Jawa Tengah . Soto kudus, hampir mirip dengan soto Lamongan, soto kudus berisi suwiran ayam dan taoge. Terkadang soto kudus juga menggunakan daging kerbau. Kuahnya lebih bening.</p>
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
                            <p>Rawon (Aksara Jawa:ꦫꦮꦺꦴꦤ꧀) adalah masakan khas Indonesia yang berasal dari Kabupaten Ponorogo yang berupa sup daging berkuah hitam dengan campuran bumbu khas yang menggunakan kluwek, Makanan ini telah berusia lebih dari 1.000 tahun. Rawon menyebar keluar Ponorogo karena Ponorogo memiliki peran penting dari masa ke masa, hingga dikenal sebagai masakan khas Jawa Timur (daerah Arekan), masyarakat Jawa Tengah sebelah timur (daerah Surakarta).</p>
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
                            <p>Kerak telor adalah makanan asli daerah Jakarta (Betawi), Kuliner khas Betawi ini dipercaya sudah dikenal dan banyak digemari sejak zaman penjajahan Belanda. Meski ketika itu kerak telor diciptakan tanpa sengaja, nyatanya kerak telor menjadi salah satu makanan ikonik yang punya banyak penggemar hingga saat ini.</p>
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
                            <p>Kue jojorong atau jojorong adalah makanan khas suku Banten dari Kabupaten Pandeglang. Makanan ini berbahan dasar tepung beras dan santan kelapa yang bagian dalamnya diberi gula aren. Tempat atau mangkuk kuenya berbentuk persegi dan terbuat dari daun pisang yang setiap ujungnya diikat menggunakan tusuk gigi. Oleh sebab jojorong berbahan dasar santan, kue ini harus langsung disantap ketika disajikan karena mudah basi</p>
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
                            <p>Ikan bakar Manokwari adalah salah satu hidangan khas yang berasal dari daerah Manokwari, Papua Barat, Indonesia. Hidangan ini terkenal karena cara memasak ikan yang digunakan. Caranya adalah dengan dipanggang atau dibakar di atas bara api atau arang.</p>
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
