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
import { TailSpin } from "react-loader-spinner";

// redux imports
import { useDispatch } from "react-redux";
import { addArticle } from "../reducers/cart";
import { addArticlePrice } from "../reducers/cartTotal";
import { useEffect, useState } from "react";

export default function Article() {
  const [article, setArticle] = useState({});
  const [images, setImages] = useState([]);
  const [brandCapitalized, setBrandCapitalized] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  // function that fetches article data from the db
  async function search() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/articles/${router.query.reference}`
    );
    const request = await res.json();

    // wait for result, then set article data
    if (!request.searchResult) {
      return;
    } else {
      setArticle(await request.searchResult);
    }

    // maps images (diplayed in the carousel) from db
    setImages(
      await request.searchResult.img.map((image, i) => {
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
      })
    );

    // capitalizes brand's first character
    setBrandCapitalized(request.searchResult.brand.charAt(0).toUpperCase() + request.searchResult.brand.slice(1));
  }

  // searches for article data in the db upon loading the page
  useEffect(() => {
    if (!router.query) return; // on first render, router.query is undefined, so we wait for it to be truthy to execute the search

    search(); // once router.query is truthy, execute search
  }, [router.query]); // retry useEffect when router.query is updated

  // passes the article's data and dispatches the function from the reducer (add)
  function handleAddClick(props) {
    dispatch(addArticle(props)); // add item to cart
    dispatch(addArticlePrice(props)); // add item price to cart total
  }

  // alice carousel function to prevent issues when dragging images
  const handleDragStart = (e) => e.preventDefault();

  function displayArticle() {
    if (!article.model) {
      // if article si not complete yet, display spinner
      return (
        <div className={styles.message}>
          <TailSpin
            height="120"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      );
    }

    // if article fetch is complete, display article data
    if (article.model) {
      return (
        <>
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

            {/* RIGHT SECTION */}
            <div className={styles.right}>
              {/* contains top right (article info: brand, model, price and add to cart) */}
              <div className={styles.topRight}>
                {/* contains the brand the "add" button */}
                <div className={styles.container}>
                  <p className={styles.brand}>{brandCapitalized}</p>

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
        </>
      );
    }
  }

  // if article data has been fetched, display it
  return <>{article && displayArticle()}</>;
}
