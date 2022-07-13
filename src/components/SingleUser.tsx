import { makeStyles } from '@material-ui/core';
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    singleUserStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 50,
        padding: 10,
        borderRadius: 8,
        background: "rgba(0,0,0,0.3)",
    },
    componentStyle: {
        display: "flex",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    keyStyle: {
        marginRight: 5
    },
    backStyle: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 16,
        background: "transparent",
        textDecoration: "underline",
        border: "none",
        cursor: "pointer"
    }
})



const SingleUser = () => {
    const classes = useStyles();
    let params = useParams();
    const navigate = useNavigate();
    const user = useContext(UserContext);
    return (
        <>
            <button onClick={() => navigate(-1)} className={classes.backStyle}>Go back</button>
            <div className={classes.singleUserStyle}>
                {user.currentUser?.name ?
                    <div className={classes.componentStyle}>
                        <div className={classes.keyStyle}>Name:</div>
                        <div className="value">{user.currentUser?.name}</div>
                    </div> : ''
                }
                {user.currentUser?.age ?
                    <div className={classes.componentStyle}>
                        <div className={classes.keyStyle}>Age:</div>
                        <div className="value">{user.currentUser?.age}</div>
                    </div> : ''
                }
                {user.currentUser?.gender ?
                    <div className={classes.componentStyle}>
                        <div className={classes.keyStyle}>Gender:</div>
                        <div className="value">{user.currentUser?.gender}</div>
                    </div> : ''
                }
                {user.currentUser?.description ?
                    <div className={classes.componentStyle}>
                        <div className={classes.keyStyle}>Description:</div>
                        <div className="value">{user.currentUser?.description}</div>
                    </div> : ''
                }
            </div>
        </>
    )
}

export default SingleUser