import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../styles/OrderPopup.module.css";

// order popup that says "thank you for your purchase"; which appears once user "confirms" an order
export default function OrderPopup(props) {
  // if cart is empty, display "your cart is empty", else display thank you message 
  function cartEmptyCheck() {
    if (props.cart.length === 0) return <>Your cart is empty.</>
    else return <>Your items will be shipping shortly. <br /> Thank you for your purchase !</>
  }

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
            <div className={styles.header}> Order confirmation </div>
            <div className={styles.content}>
              {cartEmptyCheck()}
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
