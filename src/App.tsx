import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from "./img/bg.webp"
import Form from './components/Form';
import Cards from './components/Cards';
import { UserContext } from './userContext'
import { useState } from 'react';
import { userForm } from './modelTypes';
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

interface allUsersType {
  editingUser: userForm,
  addedUsers: userForm[]
}

const App: React.FC = () => {


  const [allUsers, setAllUsers] = useState<allUsersType>({
    editingUser: {
      name: "",
      age: 0,
      gender: "",
      id: "",
      description: ""
    },
    addedUsers: []
  },
  );
  const classes = useStyles();
  return (
    <div className={classes.appStyle}>
      <UserContext.Provider value={{ allUsers, setAllUsers }}>
        <Cards />
        <Form />
      </UserContext.Provider>
    </div >
  )
}

export default App;