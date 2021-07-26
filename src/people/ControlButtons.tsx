import * as React from "react";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';


interface controlButtonsProp {
    id: number;
    edit: number;
    handleEdit: () => void;
    handleDelete: () => void;
    save: () => void;
    cancel: () => void;
    disabled: boolean;
}


export const ControlButtons = (prop: controlButtonsProp) => {


    if (prop.edit === prop.id) {
        return (<>
            <IconButton aria-label="save" onClick={prop.save} disabled={prop.disabled}>
                <CheckCircleIcon />
            </IconButton>
            <IconButton aria-label="cancel" onClick={prop.cancel} disabled={prop.disabled}>
                <CancelIcon />
            </IconButton>
        </>)
    } else {
        return (<>
            <IconButton aria-label="edit" onClick={prop.handleEdit} disabled={prop.disabled}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={prop.handleDelete} disabled={prop.disabled}>
                <DeleteIcon />
            </IconButton>
        </>);
    }

}
