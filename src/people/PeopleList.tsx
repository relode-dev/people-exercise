import * as React from "react";
import styles from "./PeopleList.module.scss";
import * as services from "../dataServices";
import { Person } from "../types";

export const PeopleList = () => {
  const [data, setData] = React.useState<Person[]>([]);

  React.useEffect(() => {
    const fn = async () => {
      const people = await services.retrievePeople();
      setData(people);
    };
    fn();
  }, []);

  return (
    <div className={styles.PersonList}>
      {data.map((p: Person) => (
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
