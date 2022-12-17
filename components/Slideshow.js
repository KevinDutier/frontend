import { useRouter } from "next/router";
import styles from "../styles/Slideshow.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slideshow() {
  const router = useRouter();

  const clickBanner = (props) => {
    // redirects when clicking on banner image
    if (props === 0) router.push({ pathname: "./fender" }); // 1st image, redirects to fender brand page

    if (props === 1) // 2nd image, redirects to jaguar article page
      router.push(
        {
          pathname: "./article",
          query: {
            brand: "fender",
            model: "Player Jaguar",
            price: 719,
            img: [
              "https://www.woodbrass.com/images/woodbrass/FMIC+0146303513.JPG",
              "https://www.woodbrass.com/images/woodbrass/FMIC+0146303513-1.JPG",
              "https://www.woodbrass.com/images/woodbrass/FMIC+0146303513-2.JPG",
              "https://www.woodbrass.com/images/woodbrass/FMIC+0146303513-3.JPG",
              "https://www.woodbrass.com/images/woodbrass/FMIC+0146303513-4.JPG",
              "https://www.woodbrass.com/images/woodbrass/FMIC+0146303513-5.JPG",
            ],
          },
        },
        "/article/jaguar"
      );

    if (props === 2) // 3rd image, redirects to meteora article page
      router.push(
        {
          pathname: "./article",
          query: {
            brand: "fender",
            model: "Player Meteora",
            price: 999,
            img: [
              "https://i.imgur.com/2g2PghO.jpg",
              "https://i.imgur.com/ZnjFwwY.jpg",
              "https://www.fmicassets.com/Damroot/ZoomJpg/10005/0147393395_fen_ins_fbd_1_nr.jpg",
              "https://www.fmicassets.com/Damroot/ZoomJpg/10005/0147393395_fen_ins_cbr_1_nr.jpg",
              "https://www.fmicassets.com/Damroot/ZoomJpg/10005/0147393395_fen_ins_hft_1_nr.jpg",
              "https://www.fmicassets.com/Damroot/ZoomJpg/10005/0147393395_fen_ins_hbk_1_nr.jpg",
            ],
          },
        },
        "/article/meteora"
      );
  };

  return (
    <div>
      <main className={styles.main}>
        <Carousel
          className={styles.carousel}
          autoPlay={true} // enables autoplay
          interval="4000" // how long before showing next slide
          transitionTime="700" // how long is the animation
          infiniteLoop={true} // loops back to first image after reaching the last one
          showStatus={false} // hides "1 of 3" in the corner
          showThumbs={false} // hides thumbnails
          swipeable={true} // allows user to drag images with the mouse (default: true)
          emulateTouch={true} // enables swipe on non-touch screens
          stopOnHover={false} // stops slideshow on hover
          useKeyboardArrows={true} // enables user to use keyboard arrows
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
