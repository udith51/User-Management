import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from "./img/bg.webp"
import Form from './components/Form';
import Cards from './components/Cards';
import { UserContext, useUserManagement } from './userContext'

const useStyles = makeStyles({
  appStyle: {
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


const App: React.FC = () => {
  const classes = useStyles();
  const UserManagement = useUserManagement();
  return (
    <div className={classes.appStyle}>
      <UserContext.Provider value={UserManagement}>
        <Cards />
        <Form />
      </UserContext.Provider>
    </div >
  )
}

export default App;