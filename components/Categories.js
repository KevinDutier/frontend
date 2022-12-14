import styles from "../styles/Categories.module.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();
  
  const images = [
    { source: "/categories/folk.jpg", category: "folk"},
    { source: "/categories/electric.jpg", category: "electric"},
    { source: "/categories/classical.jpg", category: "classical"},
    { source: "/categories/bass.jpg", category: "bass"},
    { source: "/categories/amps.jpg", category: "amps"},
    { source: "/categories/accessories.jpg", category: "accessories"},
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  function toCategoryPage(props) {
    router.push({pathname: "./category", query: {category: `c/${props}`}}, `/${props}`)
  }

  return (
    <>
      <div className={styles.head}>
        <h2 className={styles.headText}>OUR CATEGORIES</h2>
      </div>
      <Carousel
      className={styles.carousel}
      ssr
      partialVisbile={false}
      // deviceType={deviceType}
      showDots={true}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.map((image, i) => {
        return (
            <img className={styles.categoryImage} key={i}  onClick={() => toCategoryPage(image.category)} src={image.source} draggable={false} height="300px" width="300px" />
        );
      })}
    </Carousel>
    </>
  );
}
