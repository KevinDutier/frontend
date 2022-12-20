import styles from "../styles/Categories.module.css";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function Categories() {
  const router = useRouter();

  const images = [
    {
      source: "/categories/acoustic.jpg",
      parameter: "category/acoustic",
      title: "Acoustic",
    },
    {
      source: "/categories/electric.jpg",
      parameter: "category/electric",
      title: "Electric",
    },
    { source: "/categories/bass.jpg", parameter: "category/bass", title: "Bass" },
  ];

  // function that redirects to category page
  function toCategoryPage(props) {
    router.push(
      { pathname: "./category", query: { parameter: props } },
      `/${props}`
    );
  }

  // category images (acoustic, electric, bass image)
  const categories = images.map((image, i) => {
    return (
      <div className={styles.imageContainer} key={i} >
        <img
          key={i}
          src={image.source}
          className={styles.image}
          // width={300}
          // height={300}
        />
        <div
          className={styles.imageOverlay}
          onClick={() => toCategoryPage(image.parameter)}
        >
          <div className={styles.imageTitle}>{image.title}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={styles.head}>
        <Typography
          className={styles.ourCategories}
          sx={{
            fontSize: "26px",
            margin: "44px 0px 0px 24px",
            fontWeight: "400",
          }}
        >
          OUR CATEGORIES
        </Typography>
      </div>

      <div className={styles.categories}>{categories}</div>
    </>
  );
}
