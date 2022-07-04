import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Cards from './Components/Cards';
import { form } from './model';
import { makeStyles } from '@material-ui/core/styles';
import bgImage from "./img/bg.webp"

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

export const App: React.FC = () => {

  var [details, setDetails] = useState<form[]>([]);
  const [formData, setFormData] = useState<form>({
    name: "",
    age: 0,
    gender: "",
    description: "",
    id: ""
  });

  function onSubmit(data: form): void {
    console.log('Sub');
    console.log(data);
    setDetails(prev => {
      return ([...prev, data])
    })
  }

  function onEdit(id: string) {
    var upd = details.filter(d => {
      return (d.id == id);
    })
    console.log(upd[0]);
    setFormData(upd[0]);
    console.log(formData);
  }

  function onDelete(id: string) {
    setDetails((prev) => {
      return (prev.filter(p => {
        return (p.id !== id);
      }))
    })
  }
  const classes = useStyles();
  return (
    <div className={classes.appStyle}>
      <Cards
        details={details}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <Form formData={formData} onSubmit={onSubmit} />
    </div>
  )
}