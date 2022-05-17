import Main from "../components/Main";
import { searchApi } from "../components/Utils/SearchApi";
import { createStore } from "../Redux/store";
import { setSearchItem } from "../Redux/Slices/SearchReducer";

export default function Home({ url, initialReduxState }) {
  return <Main url={url} />;
}

export const getServerSideProps = async (context) => {
  const launchYear = context.query.launch_year;
  const launchSuccess = context.query.launch_success;
  const landSuccess = context.query.land_success;
  const store = createStore();

  const response = await searchApi(launchYear, launchSuccess, landSuccess);
  store.dispatch(setSearchItem(response.data));

  return {
    props: {
      initialReduxState: store.getState(),
    },
  };
};
