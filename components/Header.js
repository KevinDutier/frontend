import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Popover, Typography } from "@mui/material";
import { useState } from "react";

// redux imports
import { useDispatch } from "react-redux";
import { removeArticle } from "../reducers/cart";
import { useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [anchorEl, setAnchorEl] = useState(null);
  const [total, setTotal] = useState(0);

  // opens the popover
  function openPopover(event) {
    // calculates total price
    for (let i = 0; i < cart.length; i++) {
      setTotal((total += parseInt(cart[i].price)));
    }
    // sets the popover's anchor to the cart icon
    setAnchorEl(event.currentTarget);
  }

  // closes the popover
  function closePopover() {
    // wait for popover to close, then reset total
    setTimeout(function resetTotal() {setTotal(0)}, 130);
    // sets anchor to null
    setAnchorEl(null);
  }

  // passes the article's data and dispatches the function from the reducer (remove)
  function handleRemoveClick(props) {
    dispatch(removeArticle(props));
    setTotal(total - props.price);
  }

  // maps the articles from the cart
  const cartArticles = cart.map((article, i) => {
    // capitalizes first letter
    const brandFormatted =
      article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

    return (
      <div key={i} className={styles.popoverContainer}>
        <div className={styles.popover}>
          <img className={styles.image} src={article.img} />
          <div className={styles.popoverText}>
            <p className={styles.brand}>{brandFormatted}</p>
            <p className={styles.model}>{article.model}</p>
            <p className={styles.price}>{article.price} €</p>
          </div>
        </div>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.xIcon}
            onClick={() => handleRemoveClick(article)}
          />
      </div>
    );
  });

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerItems}>
          <div className={styles.headerItemsLeft}>
            <Link href="./">
              <p className={styles.about}>About</p>
            </Link>
          </div>
          <Link href="./">
            <img className={styles.logo} src="logo2.png" height="62" />
          </Link>
          <div className={styles.headerItemsRight}>
            <FontAwesomeIcon
              className={styles.cart}
              icon={faCartShopping}
              onClick={openPopover}
            />
            <Popover
              open={Boolean(anchorEl)}
              onClose={() => closePopover()}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {/* <Typography className={styles.yourCart}>Your cart :</Typography> */}
              {cartArticles}
              <Typography className={styles.popoverLast}>
                <Typography>Subtotal: {total} €</Typography>
                <Link href="./cartReview">
                  <button>Order</button>
                </Link>
              </Typography>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
