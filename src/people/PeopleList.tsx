import * as React from "react";
import { people } from "../data";
import styles from "./PeopleList.module.scss";

export const PeopleList = () => {
  return (
    <div className={styles.PersonList}>
      {people.map((p) => (
        <div className={styles.PersonListItem}>
          <span>{p.firstName}</span>
          <span>{p.lastName}</span>
          <span>{p.email}</span>
          <span>{p.phone}</span>
        </div>
      ))}
    </div>
  );
};
