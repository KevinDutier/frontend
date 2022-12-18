import styles from "../styles/a.module.css";  // CartCard style
import OrderPopup from "./OrderPopup";

// redux imports
import { useDispatch } from "react-redux";
import { removeArticle } from "../reducers/cart";
import { removeArticlePrice } from "../reducers/cartTotal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CartCard() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const cartTotal = useSelector((state) => state.cartTotal.value);
  const [total, setTotal] = useState(0);
  const [update, setUpdate] = useState(0);

  // removing an article
  function handleRemoveClick(props, index) {
    dispatch(removeArticle(index));
    dispatch(removeArticlePrice(props));
    // resets total price
    setTotal(total - props.price);
  };

  // calculates total price upon loading the page
  useEffect(() => {
    setUpdate(update + 1);
  }, []);

  // calculates total price
  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      setTotal((total += parseInt(cart[i].price)));
    }
  }, [update]);

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
          <p className={styles.total}>Total ({articles.length} articles): {cartTotal} €</p>
          <OrderPopup />
          {/* <button className={styles.button}>Order</button> */}
        </div>
      </div>
    </div>
  )
}
