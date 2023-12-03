import About from "../components/About";
import Gallery from "../components/gallery/Gallery";
import List from "../components/List";
import ListMakanan from "../components/listMakanan/ListMakanan";
const Homepages = () => {
  return (
    <div>
      <About/>
      <Gallery/>
      <List />
      <ListMakanan/>
    </div>
  );
};

export default Homepages;
