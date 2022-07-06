import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { UserContext } from '../userContext';
import Card from './Card';

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
    const users = useContext(UserContext);
    console.log(users.allUsers.addedUsers);
    return (
        <div className={classes.cardsStyle}>
            {users.allUsers.addedUsers.map(user => {
                return (
                    <Card card={user} key={user.id} />
                );
            })}
        </div>
    )
}