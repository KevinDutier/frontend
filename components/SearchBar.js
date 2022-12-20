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
    // if search field is empty, do not proceed
    if (inputText.trim() === "") {
      alert("Search field cannot be empty");
      return;
    }

    // search field is filled: redirects to search result
    router.push(
      { pathname: "./category", query: { parameter: inputText } },
      `/${inputText}`
    );

    // TODO: if already on ./category, just launch search without router.push()
  }

  // TODO: make it execute search when pressing ENTER as well
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

      <input
        className={styles.searchBar}
        type="text"
        onChange={inputHandler}
        placeholder="Search"
        minLength="1"
        maxLength="28"
      />
      {/* <button className={styles.button} onClick={() => handleSearchClick()}>
        Search
      </button> */}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        onClick={() => handleSearchClick()}
        // style={{fontSize: 19}}
      />
    </div>
  );
}
