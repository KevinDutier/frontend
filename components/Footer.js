import styles from "../styles/Footer.module.css";
import { CFooter } from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <CFooter>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div>
            <span>Hitoshi Guitars</span>
          </div>

          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              +01 234 567 88
            </span>

            <span>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              info@example.com
            </span>
          </div>
        </div>
      </div>
    </CFooter>
  );
}
