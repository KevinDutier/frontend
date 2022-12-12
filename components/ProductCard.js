import { useEffect, useState } from "react";
import styles from "../styles/ProductCard.module.css";
import { TailSpin } from "react-loader-spinner";

export default function ProductCard(props) {
  const guitars = props.guitars;

  // <p className={styles.message}>No results found.</p>

  // as long as guitars.length = 0, return spinner
  if (!guitars.length)
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

  // maps one guitar card per guitar
  const guitarMap = guitars.map((guitar, i) => {
    // capitalizes first letter
    const brandFormatted =
      guitar?.brand.charAt(0).toUpperCase() + guitar?.brand.slice(1);

    return (
      <div className={styles.card} key={i}>
        <img className={styles.image} src={guitar?.img} />
        <div className={styles?.cardInfo}>
          <h2 className={styles.brand}>{brandFormatted}</h2>
          <h3 className={styles.model}>{guitar?.model}</h3>
          <p className={styles.price}>{guitar?.price} €</p>
        </div>
      </div>
    );
  });

  return <div className={styles.container}>{guitarMap}</div>;
}
