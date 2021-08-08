import NavbarComponent from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ایران چوب</title>
      </Head>
      <NavbarComponent />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
