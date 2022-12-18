import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../styles/AboutPopup.module.css";

export default function AboutPopup() {
  return (
    <>
      <Popup
        trigger={<p className={styles.about}>About</p>}
        position="right center"
        modal
      >
        {(close) => (
          <div className={styles.modal}>
            <button className={styles.close} onClick={close}>
              &times;
            </button>
            <div className={styles.header}> About </div>
            <div className={styles.content}>
              Hitoshi guitars is a fictional guitar retailer website. The frontend was made with React and Next JS, while the backend uses Express JS and Mongoose. The articles' data is stored on a database (MongoDB).
              <br />
              <div className={styles.checkOut}>
                Check out the github repos for more information:
              </div>
              <br />
              <div className={styles.links}>
                <a
                  className={styles.link}
                  href="https://github.com/KevinDutier/hitoshi-guitars-frontend"
                  target="_blank"
                >
                  Hitoshi-guitars frontend repo
                </a>
                <br />
                <a
                  className={styles.link}
                  href="https://github.com/KevinDutier/hitoshi-guitars-backend"
                  target="_blank"
                >
                  Hitoshi-guitars backend repo
                </a>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
