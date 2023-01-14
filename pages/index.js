import Header from '../components/Header';
import Categories from '../components/Categories';
import Brands from '../components/Brands';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';

// homepage
function Index() {
  return (
    <>
        <Header/>
        <Slideshow/>
        <Categories/>
        <Brands/>
        <Footer/>
    </>
  )
}

export default Index;
