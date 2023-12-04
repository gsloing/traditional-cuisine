import List from "../components/List";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/gallery/gallery";
import Header from "../components/Header";
import ListMakanan from "../components/listMakanan/ListMakanan";
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
