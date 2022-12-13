// import { Popover, Button } from 'antd';
// import 'antd/dist/antd.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Article.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Article() {
  const router = useRouter();
  const article = router.query;

  function addToCart() {
    console.log(`add ${article.model} to cart`)
  }

  // capitalizes first letter
  const brandFormatted =
    article?.brand.charAt(0).toUpperCase() + article?.brand.slice(1);

  console.log(article);

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
                <h1>{brandFormatted}</h1>
                <h2>{article.model}</h2>
                <p>{article.price} €</p>
            </div>
            <div className={styles.price}>
            </div>
            <div className={styles.add}>
                <button className={styles.button} onClick={() => addToCart()}>
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
