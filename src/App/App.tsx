import React from "react";
import styles from "./App.module.scss";
import { PeopleList } from "../people/PeopleList";
function App() {
  return (
    <div className={styles.App}>
      <h1>People Exercise</h1>
      <PeopleList />
      <div className={styles.footer}>
        <a
          href="https://github.com/relode-dev/people-exercise"
          target="_blank"
          rel="noreferrer"
        >
          visit this project's github page
        </a>
      </div>
    </div>
  );
}

export default App;
