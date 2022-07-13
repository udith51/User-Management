import { makeStyles } from '@material-ui/core/styles';
import bgImage from "../img/bg.webp"
import Form from './Form';
import Cards from './Cards';
import { useUserManagement } from '../userContext'

const useStyles = makeStyles({
    homeStyle: {
        display: "flex",
        backgroundImage: 'url(' + bgImage + ')',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        width: "100vw",
        minHeight: "100vh"
    }
})


const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeStyle}>
            <Cards />
            <Form />
        </div >
    )
}

export default Home;