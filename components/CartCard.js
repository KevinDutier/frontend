import styles from "../styles/a.module.css";  // CartCard style
import OrderPopup from "./OrderPopup";

// redux imports
import { useDispatch } from "react-redux";
import { removeArticle } from "../reducers/cart";
import { removeArticlePrice, resetCartTotal } from "../reducers/cartTotal";
import { useSelector } from "react-redux";

export default function CartCard() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const cartTotal = useSelector((state) => state.cartTotal.value);

  // removing an article
  function handleRemoveClick(props, index) {
    dispatch(removeArticle(index));  // remove article from cart
    dispatch(removeArticlePrice(props));  // remove article price from cart total
    if (cart.length === 1) dispatch(resetCartTotal());  // reset cart total to 0
  };

  const articles = cart.map((article, i) => {
    // capitalizes first letter
    const brandFormatted =
      article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

    return (
      <div key={i} className={styles.container}>
        <div className={styles.left}>
          <img className={styles.image} src={article.img[0]} />
          <div className={styles.leftText}>
            <p className={styles.brand}>{brandFormatted}</p>
            <p className={styles.model}>{article.model}</p>
            <p className={styles.price}>{article.price} €</p>
            <p className={styles.remove} onClick={() => handleRemoveClick(article, i)}>remove article</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.main}>
      <div>
        {articles}
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.right}>
          <p className={styles.total}>Total : {cartTotal} €</p>
          <OrderPopup />
          {/* <button className={styles.button}>Order</button> */}
        </div>
      </div>
    </div>
  )
}
