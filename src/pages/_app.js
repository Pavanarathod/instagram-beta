import "tailwindcss/tailwind.css";
import "../styles/Header.css";
import "../styles/Footer.css";
import "../styles/Post.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../redux/app/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
