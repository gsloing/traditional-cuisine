import React from 'react'

const listMakanan = () => {
  return (
    <div>  <section className="site-section bg-light" id="section-news">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-5 site-animate">
          <h2 className="display-4">Makanan Khas Daerah Indonesia</h2>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <p className="lead">
                Berikut ini adalah makanan khas di setiap daerah di
                Indonesia direpresentasikan dari setiap provinsi di
                Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="media d-block mb-4 text-center site-media site-animate">
            <img
              src="/public/images/Food-Picture/Sumatra/rendang(sumatera barat).jpg"
              alt="Free Template by colorlib.com"
              className="img-fluid"
            />
            <div className="media-body p-md-5 p-4">
              <h5 className="mt-0 h4">Rendang</h5>
              <h6 className="mt-0 h4">Sumatera Barat</h6>
              <p className="mb-4">
              Masakan khas daerah Sumatera Barat adalah Rendang. Masakan yang satu ini tidak hanya dikenal di Indonesia saja, tetapi dikenal sampai di manca negara. Rendang adalah makanan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu yang lama dengan menggunakan santan kelapa berbumbu rempah dan cabai. Proses memasaknya memakan waktu berjam-jam hingga yang tinggal hanyalah potongan daging berwarna hitam pekat. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="media d-block mb-4 text-center site-media site-animate">
            <img
              src="/public/images/Food-Picture/Sulawesi/sul3(coto-makassar).jpg"
              alt="Free Template by colorlib.com"
              className="img-fluid"
            />
            <div className="media-body p-md-5 p-4">
              <h5 className="mt-0 h4">Coto Makassar</h5>
              <h6 className="mt-0 h4">Sulawesi Selatan</h6>
              <p className="mb-4">
              Coto makassar atau Pallu coto mangkasarak adalah hidangan tradisional Suku Makassar, Sulawesi Selatan. Makanan ini terbuat dari jeroan sapi yang direbus dalam waktu yang lama. Rebusan jeroan bercampur daging sapi ini kemudian diiris-iris, lalu dibumbui dengan bumbu yang diracik secara khusus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="media d-block mb-4 text-center site-media site-animate">
            <img
              src="/public/images/Food-Picture/Jawa/jawa8 (Rawon).jpg"
              alt="Free Template by colorlib.com"
              className="img-fluid"
            />
            <div className="media-body p-md-5 p-4">
              <h5 className="mt-0 h4">Rawon</h5>
              <h6 className="mt-0 h4">Jawa Timur</h6>
              <p className="mb-4">
              Rawon adalah masakan khas Indonesia yang berasal dari Jawa Timur yang berupa sup daging berkuah hitam dengan campuran bumbu khas yang menggunakan kluwek, Makanan ini telah berusia lebih dari 1.000 Tahun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default listMakanan