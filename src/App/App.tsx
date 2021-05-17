import React from "react";
import styles from "./App.module.scss";
import { PeopleList } from "../people/PeopleList";
function App() {
  return (
    <div className={styles.App}>
      <h1>People Exercise</h1>
      <PeopleList />
    </div>
  );
}

export default App;
