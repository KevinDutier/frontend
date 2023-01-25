import styles from "../styles/ProductCard.module.css";
import { useRouter } from "next/router";

export default function ProductCard(props) {
  const router = useRouter();
  const guitars = props.guitars;

  function toArticlePage(i) {
    router.push({pathname: "./article", query: {reference: guitars[i].reference}})
  };

  // maps one guitar card per guitar
  const guitarMap = guitars.map((guitar, i) => {
    return (
      <div className={styles.card} key={i} >
          <div className={styles?.cardInfo} onClick={() => toArticlePage(i)} >
          <img className={styles.image} src={guitar?.img[0]} />
            <p className={styles.brand}>{guitar?.brand}</p>
            <p className={styles.model}>{guitar?.model}</p>
            <p className={styles.price}>{guitar?.price} €</p>
          </div>
      </div>
    );
  });

  return (
  <div className={styles.container}>
    {guitarMap}
  </div>
  );
}
