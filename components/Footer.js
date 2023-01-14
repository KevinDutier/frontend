import style from "../styles/Footer.module.css";
import { CFooter } from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <CFooter>
      <div className={style.footer}>
        <div className={style.content}>
          <div>
            <span>Hitoshi Guitars</span>
          </div>

          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} className={style.icon} />
              +01 234 567 88
            </span>

            <span>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              info@example.com
            </span>
          </div>
        </div>
      </div>
    </CFooter>
  );
}
