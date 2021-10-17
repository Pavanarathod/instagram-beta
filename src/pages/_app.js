import "tailwindcss/tailwind.css";
import "../styles/Header.css";
import "../styles/Footer.css";
import "../styles/Post.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
