import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function electric() {
  let [guitars, setGuitars] = useState([]);
  let [productCard, setProductCard] = useState(<p>searching...</p>);  // TODO: add a loading icon or animation here

  // search function executed upon loading the page
  async function search() {
    const search = await fetch(
      `https://hitoshi-guitars-backend.vercel.app/articles/search/electric`
    ).then((res) => res.json())

    // search for guitars, then set guitars to the result of the search
    setGuitars(search.searchResult);
  }

  useEffect(() => {
    // execute search function upon loading the page
    search();
  }, []);

  // once guitars has been updated with the result of the search, display it on the page
  useEffect(() => {
    setProductCard(<ProductCard guitars={guitars} />)
  }, [guitars])

  return (
    <>
      <Header />
      {productCard}
    </>
  );
}
