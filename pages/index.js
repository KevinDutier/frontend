import Header from '../components/Header';
import Categories from '../components/Categories';
import Slideshow from '../components/Slideshow';
// import { BrowserRouter } from "react-router-dom";

// homepage
function Index() {
  return (
    <>
        <Header/>
        <Slideshow/>
        <Categories/>
    </>
  )
}

export default Index;
