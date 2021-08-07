import NavbarComponent from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import "../styles/style.scss";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarComponent />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
