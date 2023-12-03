import List from "../components/List";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/Header";

const Homepages = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Gallery/>
      <List />
      <Footer/>

    </div>
  );
};

export default Homepages;
