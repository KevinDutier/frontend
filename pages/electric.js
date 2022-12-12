import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function electric() {
  const guitars = [
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
    {
      brand: "Fender",
      model: "Little Fender LX1",
      price: "549.00",
      img: "https://www.woodbrass.com/images/woodbrass/FMIC+0144502515.JPG",
    },
  ];

  return (
    <>
      <Header />
      <ProductCard guitars={guitars} />
    </>
  );
}
