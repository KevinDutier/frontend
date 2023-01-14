import Header from '../components/Header';
import Categories from '../components/Categories';
import Brands from '../components/Brands';
import Slideshow from '../components/Slideshow';

// homepage
function Index() {
  return (
    <>
        <Header/>
        <Slideshow/>
        <Categories/>
        <Brands/>
    </>
  )
}

export default Index;
