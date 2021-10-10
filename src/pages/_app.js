import "tailwindcss/tailwind.css";
import "../styles/Header.css";
import "../styles/Footer.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
