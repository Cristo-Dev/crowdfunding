import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layouts/Preloader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {preloader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
