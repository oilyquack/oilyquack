import type { Component, JSX } from "solid-js";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import styles from "./App.module.css";

interface AppProps {
  children?: JSX.Element;
}

const App: Component<AppProps> = props => {
  return (
    <>
      <Navigation />
      <div class={styles.app}>{props.children}</div>
      <Footer />
    </>
  );
};

export default App;
