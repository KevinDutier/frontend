import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/router";

export default function category() {
  const router = useRouter();

  let [guitars, setGuitars] = useState([]);
  let [productCard, setProductCard] = useState(<></>);

  // search function executed upon loading the page
  async function search() {
    const search = await fetch(
      `https://hitoshi-guitars-backend.vercel.app/articles/search/${router.query.category}`
    ).then((res) => res.json());

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
