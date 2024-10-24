import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Router from "./routes";
import Layout from "./layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
}

export default App;
