import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { User } from '../modelTypes';
import { UserContext } from '../userContext';

const useStyles = makeStyles({
    cardStyle: {
        fontFamily: 'Playfair Display',
        fontWeight: 500,
        width: "40%",
        border: "none",
        borderRadius: 8,
        backgroundColor: "rgba(126, 27, 128, 0.3)",
        padding: 14,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    btnStyle: {
        display: "flex",
        marginTop: 15,
        justifyContent: "space-between"
    },
    editStyle: {
        fontFamily: 'Playfair Display',
        height: 30,
        borderRadius: 5,
        border: "none",
        fontEeight: 400,
        fontSize: 18,
        cursor: "pointer",
        width: 100,
        backgroundColor: "#56B6D3",
    },
    deleteStyle: {
        fontFamily: 'Playfair Display',
        height: 30,
        borderRadius: 5,
        border: "none",
        fontEeight: 400,
        fontSize: 18,
        cursor: "pointer",
        width: 100,
        backgroundColor: "#ce4f4b",
    }
})

interface cardProp {
    card: User
}

export default function Card({ card }: cardProp) {
    const classes = useStyles();
    const users = useContext(UserContext);

    function onEdit(id: string) {
        console.log(id);
    }

    return (
        <div className={classes.cardStyle}>
            Name:{card.name}
            <br />
            Age:{card.age}
            <br />
            Gender:{card.gender}
            <br />
            Description:{card.description}
            <div className={classes.btnStyle}>
                <button className={classes.editStyle} onClick={() => { users.setEditUser(card.id) }}>Edit</button>
                <button className={classes.deleteStyle} onClick={() => { users.deleteUser(card.id) }}>Delete</button>
            </div>
        </div>
    );
}