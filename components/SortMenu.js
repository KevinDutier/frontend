import styles from "../styles/SortMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { Popover, Typography } from "@mui/material";
import { useState } from "react";

export default function SortMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  // opens the popover
  function openPopover(event) {
    // sets the popover's anchor to the cart icon
    setAnchorEl(event.currentTarget);
  }

  // closes the popover
  function closePopover() {
    // sets anchor to null
    setAnchorEl(null);
  }

  return (
    <div>
      <p className={styles.sort}>sort by</p>
      <FontAwesomeIcon
            className={styles.cart}
            icon={faSort}
            onClick={openPopover}
      />
      <Popover
        open={Boolean(anchorEl)}
        onClose={() => closePopover()}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <button>
            <p>aa</p>
        </button>
            <Typography className={styles.popoverLast}>
            <Typography>Subtotal:€</Typography>
            </Typography>
      </Popover>
    </div>
  );
}
