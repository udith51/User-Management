import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from "./img/bg.webp"
import { UserContext, useUserManagement } from './userContext'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error';
import SingleUser from './components/SingleUser';


const App: React.FC = () => {
  const UserManagement = useUserManagement();
  return (
    <div>
      <UserContext.Provider value={UserManagement}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='id/:id' element={<SingleUser />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </div >
  )
}

export default App;