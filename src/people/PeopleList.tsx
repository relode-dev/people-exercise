import * as React from "react";
import styles from "./PeopleList.module.scss";
import * as services from "../dataServices";
import { Person } from "../types";
import { FieldInput } from "../people/FieldInput";
import { ControlButtons } from "../people/ControlButtons";


export const PeopleList = ({ setTotal }: { setTotal: ((x: number) => void) }) => {

    const [data, setData] = React.useState<Person[]>([]);
    const [disabled, setDisabled] = React.useState<boolean>(true);
    const [valErrors, setValErrors] = React.useState<string[]>([]);
    const [editID, setEditID] = React.useState<number>(-1);

    const [newPersonRecord, setNewPersonRecord] = React.useState<Person>({ id: Math.round(Math.random() * 1000), firstName: "", lastName: "", email: "", phone: "" });
    const [editPersonRecord, setEditPersonRecord] = React.useState<Person>({ id: -1, firstName: "", lastName: "", email: "", phone: "" });


    React.useEffect(() => {
        const fn = async () => {
            const people = await services.retrievePeople();
            setData(people);
        };
        fn();
    }, []);


    React.useEffect(() => {
        setTotal(data.length);
        setDisabled(false);
    }, [data]);


    React.useEffect(() => { setValErrors([]); }, [newPersonRecord]);
    React.useEffect(() => { setValErrors([]); }, [editPersonRecord]);


    // --------------------------------------------------------------------- change events
    const newPersonEvent = (input: React.ChangeEvent<HTMLInputElement>) => {
        let p = { ...newPersonRecord };
        p[input.target.name] = input.target.value;
        setNewPersonRecord(p);
    }

    const editPersonEvent = (input: React.ChangeEvent<HTMLInputElement>) => {
        let p = { ...editPersonRecord };
        p[input.target.name] = input.target.value;
        setEditPersonRecord(p);
    }


    // --------------------------------------------------------------------- validation
    const validation = (recType: string) => {

        let rec = recType === "new" ? newPersonRecord : editPersonRecord;

        let valErr = []

        if (rec.firstName.length < 1 || rec.firstName.length > 50) { valErr.push(`firstName-${recType}`); };
        if (rec.lastName.length < 1 || rec.lastName.length > 50) { valErr.push(`lastName-${recType}`); };
        if (rec.email.length < 1) { valErr.push(`email-${recType}`); };
        if (rec.phone.length < 1) { valErr.push(`phone-${recType}`); };

        if (valErr.length > 0) {
            setValErrors(valErr);
            return false;
        }
        return true;
    }


    // --------------------------------------------------------------------- saveNewPerson
    const saveNewPerson = () => {

        if (!validation("new")) { return; };

        setDisabled(true);

        const fn = async () => {
            const people = await services.createPerson(newPersonRecord);
            setData(people);

            let p = { id: Math.round(Math.random() * 1000), firstName: "", lastName: "", email: "", phone: "" };
            setNewPersonRecord(p);
        };
        fn();
    };


    // --------------------------------------------------------------------- deletePerson
    const deletePerson = (id: number) => {

        if (!window.confirm("are you sure?")) {
            return;
        }

        setDisabled(true);
        const fn = async () => {
            const people = await services.deletePerson(id);
            setData(people);
        };
        fn();
    };


    // --------------------------------------------------------------------- editPerson
    const editPerson = (id: number) => {
        let rec = data.filter((d) => { return d.id === id })[0];
        setEditPersonRecord({ ...rec })
        setEditID(id);
    };


    // --------------------------------------------------------------------- cancelEdit
    const cancelEdit = () => {
        setEditID(-1);
    };


    // --------------------------------------------------------------------- saveEdit
    const saveEdit = () => {

        if (!validation("edit")) { return; };
        setDisabled(true);

        const fn = async () => {
            const people = await services.updatePerson(editPersonRecord);
            setData(people);
            setEditID(-1);
        };
        fn();
    };


    // --------------------------------------------------------------------- render
    return (
        <table className={styles.PersonList}>
            <thead>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((p: Person) => (
                    <tr key={"row" + p.id}>
                        <td>
                            <FieldInput
                                rec={editPersonRecord}
                                init={p}
                                id="firstName"
                                text={p.firstName}
                                edit={editID}
                                disabled={disabled}
                                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { editPersonEvent(e); }}
                                valError={valErrors.includes("firstName-edit")} />
                        </td>
                        <td>
                            <FieldInput
                                rec={editPersonRecord}
                                init={p}
                                id="lastName"
                                text={p.lastName}
                                edit={editID}
                                disabled={disabled}
                                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { editPersonEvent(e); }}
                                valError={valErrors.includes("lastName-edit")} />
                        </td>
                        <td>
                            <FieldInput
                                rec={editPersonRecord}
                                init={p}
                                id="email"
                                text={p.email}
                                edit={editID}
                                disabled={disabled}
                                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { editPersonEvent(e); }}
                                valError={valErrors.includes("email-edit")} />
                        </td>
                        <td>
                            <FieldInput
                                rec={editPersonRecord}
                                init={p}
                                id="phone"
                                text={p.phone}
                                edit={editID}
                                disabled={disabled}
                                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { editPersonEvent(e); }}
                                valError={valErrors.includes("phone-edit")} />
                        </td>
                        <td>
                            <ControlButtons
                                id={p.id}
                                edit={editID}
                                handleEdit={() => { editPerson(p.id); }}
                                handleDelete={() => { deletePerson(p.id); }}
                                save={saveEdit}
                                cancel={cancelEdit} disabled={disabled} />
                        </td>
                    </tr>
                ))}


                <tr>
                    <td>
                        <FieldInput
                            rec={newPersonRecord}
                            init={newPersonRecord}
                            id="firstName"
                            text="First Name"
                            edit={newPersonRecord.id}
                            disabled={disabled}
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { newPersonEvent(e); }}
                            valError={valErrors.includes("firstName-new")} />
                    </td>
                    <td>
                        <FieldInput
                            rec={newPersonRecord}
                            init={newPersonRecord}
                            id="lastName"
                            text="Last Name"
                            edit={newPersonRecord.id}
                            disabled={disabled}
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { newPersonEvent(e); }}
                            valError={valErrors.includes("lastName-new")} />
                    </td>
                    <td>
                        <FieldInput
                            rec={newPersonRecord}
                            init={newPersonRecord}
                            id="email"
                            text="Email"
                            edit={newPersonRecord.id}
                            disabled={disabled}
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { newPersonEvent(e); }}
                            valError={valErrors.includes("email-new")} />
                    </td>
                    <td>
                        <FieldInput
                            rec={newPersonRecord}
                            init={newPersonRecord}
                            id="phone"
                            text="Phone"
                            edit={newPersonRecord.id}
                            disabled={disabled}
                            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => { newPersonEvent(e); }}
                            valError={valErrors.includes("phone-new")} />
                    </td>
                    <td>
                        <button
                            id={styles.CreateButton}
                            disabled={disabled}
                            onClick={() => { saveNewPerson(); }}>create</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};


