import { useRouter } from "next/router";
import styles from "../styles/Article.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";

// redux imports
import { useDispatch } from "react-redux";
import { addArticle } from "../reducers/cart";

export default function Article() {
  // gets the article data from the previous page
  const router = useRouter();
  const article = router.query;

  const dispatch = useDispatch();

    // passes the article's data and dispatches the function from the reducer (add)
  function handleAddClick(props) {
    dispatch(addArticle(props));
  };

  function resetCart() {
    dispatch(emptyCart());
  };

  // capitalizes first letter
  const brandFormatted =
    article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

  return (
    <div className={styles.main}>
        {/* LEFT SECTION */}
        <div className={styles.left}>
            {/* add carousel here */}
            <div >
                <img className={styles.image} src={article.img}/>
            </div>
                <p>other images</p>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles.right}>
            <div className={styles.model}>
                <Typography>{brandFormatted}</Typography>
                <Typography>{article.model}</Typography>
                <Typography>{article.price} €</Typography>
            </div>
            <div className={styles.price}>
            </div>
            <div className={styles.ANIMATION}>
                <button className={styles.button} onClick={() => handleAddClick(article)}>
                    <FontAwesomeIcon className={styles.cartIcon} icon={faCartPlus} style={{ fontSize: 20, color: "white", cursor: "pointer" }}/>
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
