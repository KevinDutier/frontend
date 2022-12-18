import { useRouter } from "next/router";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCircleCheck,
  faTruckFast,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { Carousel } from "react-responsive-carousel";

// redux imports
import { useDispatch } from "react-redux";
import { addArticle } from "../reducers/cart";
import { addArticlePrice } from "../reducers/cartTotal";

export default function Article() {
  // gets the article data from the previous page
  const router = useRouter();
  const article = router.query;
  
  const dispatch = useDispatch();

  // passes the article's data and dispatches the function from the reducer (add)
  function handleAddClick(props) {
    dispatch(addArticle(props));  // add item to cart
    dispatch(addArticlePrice(props));  // add item price to cart total
  }

  // capitalizes first letter
  const brandFormatted =
    article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

  // alice carousel function to prevent issues when dragging images
  const handleDragStart = (e) => e.preventDefault();

  // maps the article's images
  const images = article.img.map((image, i) => {
    return (
      <div key={i} className={styles.imageContainer}>
        <img
          key={i}
          className={styles.image}
          src={image}
          onDragStart={handleDragStart}
          role="presentation"
        />
      </div>
    );
  });

  return (
    <div className={styles.main}>
      {/* LEFT SECTION (contains carousel) */}
      <div className={styles.left}>
        <AliceCarousel
          className={styles.carousel}
          mouseTracking
          items={images}
          autoWidth={true}
          infinite={true}
          keyboardNavigation={true}
        />
      </div>

      {/* original carousel, made with react-reponsive carousel */}
      {/* <div className={styles.left}>
        <Carousel
          className={styles.carousel}
          autoPlay={false} // disables autoplay
          transitionTime="700" // how long is the animation
          infiniteLoop={true} // loops back to first image after reaching the last one
          showStatus={false} // hides "1 of 3" in the corner
          showThumbs={false} // hides thumbnails
          swipeable={true} // allows user to drag images with the mouse (default: true)
          emulateTouch={true} // enables swipe on non-touch screens
          useKeyboardArrows={true} // enables user to use keyboard arrows
        >
          {images}
        </Carousel>
      </div> */}

      {/* RIGHT SECTION */}
      <div className={styles.right}>
        {/* contains top right (article info: brand, model, price and add to cart) */}
        <div className={styles.topRight}>
          {/* contains the brand the "add" button */}
          <div className={styles.container}>
            <p className={styles.brand}>{brandFormatted}</p>
            <div className={styles.buttonAnimation}>
              <button
                className={styles.button}
                onClick={() => handleAddClick(article)}
              >
                <FontAwesomeIcon
                  className={styles.cartIcon}
                  icon={faCartPlus}
                />
                Add
              </button>
            </div>
          </div>
          {/* end of container */}

          <p className={styles.model}>{article.model}</p>
          <p className={styles.price}>{article.price} €</p>
        </div>
        <div className={styles.icons}>
          <p className={styles.iconText}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faCircleCheck}
              style={{ color: "green", fontSize: 24 }}
            />
            In stock
          </p>
          <p className={styles.iconText}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTruckFast}
              style={{ color: "#358bff", fontSize: 20 }}
            />
            Free shipping
          </p>
          <p className={styles.iconText}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faShieldHalved}
              style={{ color: "#358bff", fontSize: 22 }}
            />
            3-year warranty
          </p>
        </div>
      </div>
    </div>
  );
}
