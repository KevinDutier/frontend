import { useRouter } from "next/router";
import styles from "../styles/Slideshow.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function Slideshow() {
  const router = useRouter();

  const clickBanner = (props) => {
    let redirect = undefined;

    if (props === 0) redirect = "b/fender"
    if (props === 1) redirect = "b/fender"
    if (props === 2) redirect = "c/bass"

    console.log(redirect);

    // FIXME: clicking here makes logo disappear
    router.push({pathname: "./category", query: {category: redirect}}, `/${redirect}`)
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
          showStatus={false}
          showThumbs={false}  // hides thumbnails
          swipeable={true}  // allows user to drag images with the mouse (default: true)
          emulateTouch={true}  // enables swipe on non-touch screens
          stopOnHover={true}  // stops slideshow on hover
          useKeyboardArrows={true}  // enables user to use keyboard arrows
          onClickItem={(index) => clickBanner(index)}
        >
          <div>
            <img src="/banners/banner0.jpg" />
          </div>
          <div>
            <img src="/banners/banner1.jpg" />
          </div>
          <div>
            <img src="/banners/banner2.jpg" />
          </div>
        </Carousel>
      </main>
    </div>
  );
}
