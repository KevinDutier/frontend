import styles from "../styles/Search.module.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/router";

import { Popover, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import { TailSpin } from "react-loader-spinner"; // spinner displayed when waiting for result

// search page, where user is redirected to when they execute a search
export default function search() {
  const router = useRouter();

  const [guitars, setGuitars] = useState([]);
  const [resultFound, setResultFound] = useState(undefined); // before search result comes, resultFound is undefined
  const [productCards, setProductCards] = useState(<></>); // before the search result comes, product card is empty
  const [sortBy, setSortBy] = useState("byPopularity"); // by default, articles are sorted by popularity
  const [anchorEl, setAnchorEl] = useState(null); // popover menu anchor

  // opens the popover
  function openPopover(event) {
    // sets the popover's anchor to the cart icon
    setAnchorEl(event.currentTarget);
  }

  // +++++++++++++++++++++++ "SORT BY" POPOVER +++++++++++++++++++++++ 

  // closes the popover
  function closePopover() {
    // sets anchor to null
    setAnchorEl(null);
  }

  // "sort by" popover function
  function sortPopover() {
    return (
      <div className={styles.sortByContainer}>
        <div className={styles.flexContainer}>
          <p className={styles.sortBy}>sort by:</p>
          <FontAwesomeIcon
            className={styles.popoverIcon}
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
            <Typography
              className={styles.popoverItem}
              onClick={() => {
                setSortBy("byBrand");
                closePopover();
              }}
            >
              brand (A-Z)
            </Typography>
            <Typography
              className={styles.popoverItem}
              onClick={() => {
                setSortBy("byCategory");
                closePopover();
              }}
            >
              category (A-Z)
            </Typography>
            <Typography
              className={styles.popoverItemLast}
              onClick={() => {
                setSortBy("byPrice");
                closePopover();
              }}
            >
              price (low to high)
            </Typography>
          </Popover>
        </div>
      </div>
    );
  }

  // +++++++++++++++++++++++  END OF "SORT BY" POPOVER +++++++++++++++++++++++ 

  // search function executed upon loading the page
  async function search() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/articles/search/${router.query.parameter}/${sortBy}`
    );
    const request = await res.json();

    // search for guitars, then set guitars to the result of the search
    setGuitars(request.searchResult);
    setResultFound(request.result);
  }

  useEffect(() => {
    // execute search function once upon loading the page, and then when sortBy is updated
    search();
  }, [sortBy]);

  // once guitars or sortBy has been updated, display results on the page
  useEffect(() => {
    setProductCards(<ProductCard guitars={guitars} />);
  }, [guitars, sortBy]);

  // ++++++++++++++++++ CODE THAT RETURNS ONE OF 3 POSSIBILITIES ++++++++++++++++++
  // 3 possibilities: still waiting for result, result found, or no results found

  // STILL WAITING FOR RESULT: returns a spinner
  const spinner = (
    <div className={styles.spinner}>
      {/* centers the spinner */}
      <TailSpin
        height="120"
        color="black"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );

  // NO RESULTS FOUND: returns a "no results found" message
  const noResultsMessage = (
    <p className={styles.spinner}>No results were found.</p>
  );

  // RESULTS WERE FOUND: results found and article data has been received from the backend: setProductCards with the data obtained from backend
  useEffect(() => {
    // @ts-ignore: property ArticleData does not exist on type  IntrinsicAttributes
    setProductCards(<ProductCard guitars={guitars} />);
  }, [guitars]);

  // result function, which returns one of these 3 possibilities
  const result = () => {
    if (resultFound === undefined)
      return spinner; // still waiting for data: return spinner
    else if (resultFound === false)
      return noResultsMessage; // no results found: return "no results found" message
    else if (resultFound === true) return productCards; // result found: return productCards
  };

  return (
    <>
      <Header />
      {sortPopover()}
      {result()}
      {/* {resultFound ? productCards : <p className={styles.noResult}>No results were found.</p>} */}
    </>
  );
}
