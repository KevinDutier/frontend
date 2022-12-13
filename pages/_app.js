import '../styles/globals.css';
import Head from 'next/head';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hitoshi Guitars</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
