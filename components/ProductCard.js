import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

export default function ProductCard(props) {
  const guitars=props.guitars

  const guitarMap = guitars.map((guitar) => {
    return (
      <div className={styles.card}>
        <img className={styles.image} src={guitar.img} />
        <div className={styles.cardInfo}>
          <h2 className={styles.brand}>{guitar.brand}</h2>
          <h3 className={styles.model}>{guitar.model}</h3>
          <p className={styles.price}>{guitar.price}</p>
        </div>
      </div>
    );
  });

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.card}>
  //       <img
  //         className={styles.image}
  //         src="https://www.woodbrass.com/images/woodbrass/GMA-LX1.JPG"
  //       />
  //       <div className={styles.cardInfo}>
  //         <h2 className={styles.brand}>Martin</h2>
  //         <h3 className={styles.model}>Little Martin LX1</h3>
  //         <p className={styles.price}>549.00</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
     <div className={styles.container}>
        {guitarMap}
      </div>
  )
}
