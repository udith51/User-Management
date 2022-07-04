import { form } from "../model";
import Card from "./Card";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardsStyle: {
        margin: 10,
        width: "50vw",
        display: "flex",
        height: "min-content",
        flexWrap: "wrap",
        justifyContent: "center"
    }
})


interface Props {
    details: form[],
    onEdit: (id: string) => void,
    onDelete: (id: string) => void
}

export default function Cards({ details, onEdit, onDelete }: Props) {

    function handleEdit(id: string) {
        onEdit(id);
    }

    function handleDelete(id: string) {
        onDelete(id);
    }
    const classes = useStyles();
    return (
        <div className={classes.cardsStyle}>
            {details.map(d => {
                return (
                    <Card card={d} key={d.id} handleEdit={handleEdit} handleDelete={handleDelete} />
                );
            })}
        </div>
    )
}