import styles from "../styles/SearchBar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

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
  }

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="text"
        onChange={inputHandler}
        placeholder="Search"
        minLength="1"
        maxLength="28"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        onClick={() => handleSearchClick()}
      />
    </div>
  );
}
