import styles from "../styles/SearchBar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  // converts input text to lower case
  function inputHandler(e) {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  // function called when user clicks on "search" (or presses "enter")
  function handleSearch() {
    // if search field is empty, do not proceed
    if (inputText.trim() === "") {
      alert("Search field is empty");
      return;
    }

    // if search field is filled, redirect to search page with the user's input text
    router.push({ pathname: "./search", query: { parameter: inputText } });
  }

  // if user presses enter, execute search function
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchBar}
        type="text"
        onChange={inputHandler}
        placeholder="Search"
        minLength="1"
        maxLength="28"
        onKeyDown={handleKeyDown}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        onClick={() => handleSearch()}
      />
    </div>
  );
}
