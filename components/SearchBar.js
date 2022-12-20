import styles from "../styles/SearchBar.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  // const error = inputText === "";

  function inputHandler(e) {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  function handleSearchClick() {
    // redirects to search result
    router.push(
      { pathname: "./category", query: { parameter: inputText } },
      `/${inputText}`
    );
  }

  // TODO: make it execute search when pressing ENTER as well
  // TODO: add check if search input is empty
  // TODO: add msg if no search result
  // FIXME: cannot launch second search
  return (
    <div className={styles.searchBarContainer}>
      {/* <TextField
        className={styles.searchBarMui}
        label="Search"
        variant="filled"
        margin="dense"
        size="small"
        onChange={inputHandler}
        // error={error}
        // helperText={error ? "Cannot be empty" : "Perfect!"}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        onClick={() => handleSearchClick()}
      /> */}
      {/* <p onClick={() => handleSearchClick()}>search</p> */}

      <input className={styles.searchBar} type="text" onChange={inputHandler} placeholder="Search" minLength="1" maxLength="28" />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        onClick={() => handleSearchClick()}
      />
    </div>
  );
}
