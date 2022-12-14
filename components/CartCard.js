import styles from "../styles/cartCard.module.css";

// redux imports
import { useDispatch } from "react-redux";
import { removeArticle } from "../reducers/cart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function cartCard() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [total, setTotal] = useState(0);

  function handleRemoveClick(props) {
    dispatch(removeArticle(props));
  };

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      setTotal((total += parseInt(cart[i].price)));
    }
  }, []);
  

  const articles = cart.map((article, i) => {
    // capitalizes first letter
    const brandFormatted =
      article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

    return (
      <div key={i} className={styles.container}>
        <div className={styles.left}>
          <img className={styles.image} src={article.img} />
          <div className={styles.leftText}>
            <p className={styles.model}>{article.model}</p>
            <p className={styles.brand}>{brandFormatted}</p>
            <p className={styles.price}>{article.price} €</p>
            <p className={styles.remove} onClick={() => handleRemoveClick(article)}>remove article</p>
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
          <p className={styles.total}>Total ({articles.length} articles): {total} €</p>
          <button className={styles.button}>Order</button>
        </div>
      </div>
    </div>
  )
}
