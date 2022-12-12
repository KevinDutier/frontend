import { useEffect, useState } from "react";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard(props) {
  const guitars = props.guitars

  if (!guitars.length) return <p className={styles.message}>No results found.</p>

  // maps one guitar card per guitar
  const guitarMap = guitars.map((guitar, i) => {
    // capitalizes first letter
    const brandFormatted = guitar?.brand.charAt(0).toUpperCase() + guitar?.brand.slice(1);

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

  return (
     <div className={styles.container}>
        {guitarMap}
      </div>
  )
}
