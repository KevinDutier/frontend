import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../styles/OrderPopup.module.css";

export default function OrderPopup() {
  return (
    <>
      <Popup
        trigger={<p className={styles.orderButton}>Order</p>}
        position="right center"
        modal
      >
        {(close) => (
          <div className={styles.modal}>
            <button className={styles.close} onClick={close}>
              &times;
            </button>
            <div className={styles.header}> Order confirmed </div>
            <div className={styles.content}>
              Your items will be shipping shortly. <br /> Thank you for your purchase !
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
