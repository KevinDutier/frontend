import styles from '../styles/Header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {

  return (
    <div>
        <div className={styles.header}>
            <div className={styles.headerItems}>
              <div className={styles.headerItemsEdge}>
                <Link href="./">
                  <img className={styles.logo} src="logo.png" width="40" height="40" />
                  {/* <h1 className={styles.title}>HITOSHI Guitars</h1> */}
                </Link>
              </div>
                <input className={styles.textInput} type="text" id="search" placeholder="Search" />
                <div className={styles.headerItemsRight}>
                    <FontAwesomeIcon className={styles.icons} icon={faCartShopping} style={{ fontSize: 22, color: "white" }}/>
                    <FontAwesomeIcon className={styles.icons} icon={faUser} style={{ fontSize: 22, color: "white" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}
