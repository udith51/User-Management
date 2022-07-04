import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/Form';
import Cards from './components/Cards';
import bgImage from './img/bg.webp'

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

function App() {

  const classes = useStyles();
  return (
    <div className={classes.appStyle}>
      <Cards />
      <Form />
    </div>
  );
}

export default App;
