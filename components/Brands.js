import styles from "../styles/Brands.module.css";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function Brands() {
  const router = useRouter();

  const images = [
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/9/91/Fender_guitars_logo.svg",
      title: "fender",
    },
    {
      source: "https://i.imgur.com/UveuJVK.png",
      title: "squier",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Lag_guitars_logo.png",
      title: "LAG",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Martin_guitar_logo.png",
      title: "martin",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cort_guitars_logo.png/200px-Cort_guitars_logo.png",
      title: "cort",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ibanez_logo.svg/200px-Ibanez_logo.svg.png",
      title: "ibanez",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yamaha_logo.svg/1920px-Yamaha_logo.svg.png",
      title: "yamaha",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Gretsch_company_logo.png",
      title: "gretsch",
    },
    {
      source: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Rickenbacker_logo.svg",
      title: "rickenbacker",
    },
  ];

  // function that redirects to category page
  function toSearchPage(props) {
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
          onClick={() => toSearchPage(image)}
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
