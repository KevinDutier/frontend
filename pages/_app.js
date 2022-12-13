import "../styles/globals.css";
import Head from "next/head";

// redux imports
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducers/cart";

function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: { cart },
  });

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Hitoshi Guitars</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
