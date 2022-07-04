import Card from "./Card";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

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

export default function Cards() {

    const classes = useStyles();
    const users = useSelector(state => state.addedUsers);
    return (
        <div className={classes.cardsStyle}>
            {users.map(user => {
                return (
                    <Card card={user} key={user.id} />
                );
            })}
        </div>
    )
}