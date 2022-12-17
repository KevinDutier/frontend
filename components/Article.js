import { useRouter } from "next/router";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

// redux imports
import { useDispatch } from "react-redux";
import { addArticle, removeArticle } from "../reducers/cart";

export default function Article() {
  // gets the article data from the previous page
  const router = useRouter();
  const article = router.query;

  const dispatch = useDispatch();

  // passes the article's data and dispatches the function from the reducer (add)
  function handleAddClick(props) {
    dispatch(addArticle(props));
  }

  function resetCart() {
    dispatch(emptyCart());
  }

  // capitalizes first letter
  const brandFormatted =
    article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

    // maps the article's images
    const images = article.img.map((image, i) => {
      return (
        <div key={i} className={styles.imageContainer}>
          <img key={i} className={styles.image} src={image} />
        </div>
      )
    })

  return (
    <div className={styles.main}>
      {/* LEFT SECTION */}
      <div className={styles.left}>
        <Carousel
          className={styles.carousel}
          autoPlay={false} // disables autoplay
          transitionTime="700" // how long is the animation
          infiniteLoop={true} // loops back to first image after reaching the last one
          showStatus={false}  // hides "1 of 3" in the corner
          showThumbs={false}  // hides thumbnails
          // thumbWidth={64}
          swipeable={true} // allows user to drag images with the mouse (default: true)
          emulateTouch={true} // enables swipe on non-touch screens
          useKeyboardArrows={true} // enables user to use keyboard arrows
        >
          {images}
        </Carousel>
      </div>

      {/* RIGHT SECTION */}
      <div className={styles.right}>
        <div className={styles.model}>
          <Typography>{brandFormatted}</Typography>
          <Typography>{article.model}</Typography>
          <Typography>{article.price} €</Typography>
        </div>
        <div className={styles.price}></div>
        <div className={styles.ANIMATION}>
          <button
            className={styles.button}
            onClick={() => handleAddClick(article)}
          >
            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartPlus}
              style={{ fontSize: 20, color: "white", cursor: "pointer" }}
            />
            Add to cart
          </button>
        </div>
        <div className={styles.list}>
          <p>in stock</p>
          <p>free shipping</p>
        </div>
      </div>
    </div>
  );
}
