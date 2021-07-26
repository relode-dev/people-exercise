import React from "react";
import styles from "./App.module.scss";
import * as services from "../dataServices";
import { PeopleList } from "../people/PeopleList";

function App() {

    const [total, setTotal] = React.useState<number>(0);

    return (
        <div className={styles.App}>
            <h1>People</h1>
            <h2 style={{ color: "#aaa" }}>Total: <span className={styles.primaryColor}>{total}</span></h2>
            <PeopleList setTotal={setTotal} />
            <div className={styles.footer}></div>
        </div >
    );
}

export default App;
