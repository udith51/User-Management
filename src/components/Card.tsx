import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { User } from '../modelTypes';
import { UserContext } from '../userContext';
import { Link } from "react-router-dom";

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
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#56B6D3",
        marginRight: 5
    },
    deleteStyle: {
        fontFamily: 'Playfair Display',
        height: 30,
        borderRadius: 5,
        border: "none",
        fontEeight: 400,
        fontSize: 18,
        cursor: "pointer",
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: "#ce4f4b",
        marginRight: 5
    },
    viewStyle: {
        fontFamily: 'Playfair Display',
        height: 30,
        borderRadius: 5,
        border: "none",
        fontEeight: 400,
        fontSize: 18,
        cursor: "pointer",
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        marginRight: 5
    }
})

interface cardProp {
    card: User
}

export default function Card({ card }: cardProp) {
    const classes = useStyles();
    const users = useContext(UserContext);

    let link = `id/${card.id}`;

    return (
        <div className={classes.cardStyle}>
            Name: {card.name}
            <br />
            Age: {card.age}
            <br />
            Gender: {card.gender}
            <br />
            Description: {card.description}
            <div className={classes.btnStyle}>
                <Link to={link}><button className={classes.viewStyle} onClick={() => { users.setCurrentUser(card.id) }}>View</button></Link>
                <button className={classes.editStyle} onClick={() => { users.setEditUser(card.id) }}>Edit</button>
                <button className={classes.deleteStyle} onClick={() => { users.deleteUser(card.id) }}>Delete</button>
            </div>
        </div>
    );
}