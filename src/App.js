import Form from './Components/Form';
import './App.css';
import Cards from './Components/Cards';
import { useState } from "react";
import UpdateForm from './Components/UpdateForm';

export default function App() {
  var [details, setDetails] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    description: "",
    id: ""
  });

  // function getData(id) {
  //   var data = details.filter(d => {
  //     return (d.id === id);
  //   })
  //   setNewFormData(data);
  //   console.log(newFormData);
  // }

  function onSubmit(data) {
    console.log('Sub');
    console.log(data);
    setDetails(prev => {
      return ([...prev, data])
    })
  }

  function onEdit(id) {
    var upd = details.filter(d => {
      return (d.id == id);
    })
    console.log(upd);
    setFormData(upd[0]);
    console.log(formData);
  }

  function onDelete(id) {
    setDetails((prev) => {
      return (prev.filter(p => {
        return (p.id !== id);
      }))
    })
  }


  return (
    <div className="app">
      <Cards details={details} onEdit={onEdit} onDelete={onDelete} />
      <Form formData={formData} onSubmit={onSubmit} />
    </div>
  );
}