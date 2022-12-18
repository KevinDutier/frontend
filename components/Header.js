import styles from "../styles/Header.module.css";
import AboutPopup from "./AboutPopup";
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
  const [anchorEl, setAnchorEl] = useState(null);  // popover menu anchor
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

  // passes the article's index and dispatches the function from the reducer (remove)
  function handleRemoveClick(props, index) {
    dispatch(removeArticle(index));
    setTotal(total - props.price);
  }

  // displayed if cart is empty
  const cartEmpty = <p className={styles.emptyCart}>Your cart is empty.</p>;

  // displayed if cart has items: maps the articles from the cart
  const cartArticles = cart.map((article, i) => {
    // capitalizes first letter
    const brandFormatted =
      article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

    return (
      <div key={i} className={styles.popoverContainer}>
        <div className={styles.popover}>
          <img className={styles.image} src={article.img[0]} />
          <div className={styles.popoverText}>
            <p className={styles.brand}>{brandFormatted}</p>
            <p className={styles.model}>{article.model}</p>
            <p className={styles.price}>{article.price} €</p>
          </div>
        </div>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.xIcon}
            onClick={() => handleRemoveClick(article, i)}
          />
      </div>
    );
  });

  // displayed if cart has items: subtotal and order buttoni
  const subtotalAndOrder = <Typography className={styles.popoverLast}>
  <Typography>Subtotal: {total} €</Typography>
  <Link href="./cartReview">
    <button className={styles.button}>Order</button>
  </Link>
</Typography>

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerItems}>
          <div className={styles.headerItemsLeft}>
            <Link href="./">
              <AboutPopup />
            </Link>
          </div>
          <Link href="./">
            <img className={styles.logo} src="https://i.imgur.com/S9rJ9RD.png" height="62" />
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
              {cart.length ? cartArticles : cartEmpty} {/* if cart has items, display cartArticles. if cart is empty, display cartEmpty */}
              {cart.length ? subtotalAndOrder: <></> } {/* if cart has items, display subtotalAndOrder. if cart is empty, display nothing */}
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
