import store from "../Redux/store";
import "../styles/globals.css";
import "./LaunchCard.css";
import { useStore } from "../Redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
