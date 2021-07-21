import React from "react";
import styles from "./App.module.scss";
import * as services from "../dataServices";

import { PeopleList } from "../people/PeopleList";
function App() {
  // need to get the current count of people
  const count = "some count here";

  return (
    <div className={styles.App}>
      <h1>People Exercise</h1>
      <h2>total people: {count}</h2>
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
