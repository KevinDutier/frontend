import styles from "../styles/Brands.module.css";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function Brands() {
  const router = useRouter();

  const images = [
    {
      source: "/categories/acoustic.jpg",
      title: "fender",
    },
    {
      source: "/categories/electric.jpg",
      title: "cort",
    },
    {
      source: "/categories/bass.jpg",
      title: "yamaha",
    },
  ];

  // function that redirects to category page
  function toCategoryPage(props) {
    router.push({ pathname: "./search", query: { parameter: props.title } });
  }

  // category images (acoustic, electric, bass image)
  const categories = images.map((image, i) => {
    // capitalizes first letter
    const titleFormatted =
      image.title.charAt(0).toUpperCase() + image.title.slice(1);

    return (
      <div className={styles.imageContainer} key={i}>
        <img key={i} src={image.source} className={styles.image} />
        <div
          className={styles.imageOverlay}
          onClick={() => toCategoryPage(image)}
        >
          <div className={styles.imageTitle}>{titleFormatted}</div>
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
          Our brands
        </Typography>
      </div>

      <div className={styles.categories}>{categories}</div>
    </>
  );
}
