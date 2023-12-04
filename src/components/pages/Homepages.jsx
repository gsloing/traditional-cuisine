import List from "../List";
import About from "../About";
import Footer from "../Footer";
import Gallery from "../gallery/gallery";
import Header from "../Header";
import ListMakanan from "../listMakanan/listMakanan";
const Homepages = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Gallery/>
      <ListMakanan/>
      <List />
      <Footer/>
    </div>
  );
};

export default Homepages;
