import * as React from "react";
import { Person } from "../types";
import styles from "./PeopleList.module.scss";


interface fieldInputProp {
    id: string;
    text: string;
    valError: boolean;
    disabled: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    edit: number;
    rec: Person;
    init: Person;
}


// ---------------------------------------------------------------------
export const FieldInput = (prop: fieldInputProp) => {


    if (prop.edit === prop.init.id) {
        return (
            <>
                <label htmlFor={prop.id} className={styles.AccessibleHide}>{prop.text}</label>
                <input name={prop.id} className={prop.valError ? styles.err : ""} type="text" required disabled={prop.disabled} onChange={(e) => { prop.handleChange(e); }} value={prop.rec[prop.id]} />
            </>);
    } else {
        return (<>{prop.init[prop.id]}</>);
    };

}

