import styles from "../styles/Slideshow.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slideshow() {
  const clickBanner = (props) => {
    console.log(props);
  }

  return (
    <div>
      <main className={styles.main}>
        <Carousel
          className={styles.carousel}
          autoPlay={true}  // enables autoplay
          interval="4000"  // how long before showing next slide
          transitionTime="700"  // how long is the animation
          infiniteLoop={true}  // loops back to first image after reaching the last one
          showThumbs={false}  // hides thumbnails
          swipeable={true}  // allows user to drag images with the mouse (default: true)
          emulateTouch={true}  // enables swipe on non-touch screens
          stopOnHover={true}  // stops slideshow on hover
          useKeyboardArrows={true}  // enables user to use keyboard arrows
          onClickItem={(props) => clickBanner(props)}
        >
          <div>
            <img src="/banners/banner0.jpg" />
            <p className="legend">Have a look at our Fender collection !</p>
          </div>
          <div>
            <img src="/banners/banner1.jpg" />
            <p className="legend">The Jaguar's 60th anniversary</p>
          </div>
          <div>
            <img src="/banners/banner2.jpg" />
            <p className="legend">Check out our new basses !</p>
          </div>
        </Carousel>
      </main>
    </div>
  );
}
