import Form from './Components/Form';
import './App.css';
import Cards from './Components/Cards';
import { useState } from "react";
import UpdateForm from './Components/UpdateForm';

export default function App() {
  var [details, setDetails] = useState([]);
  const [newFormData, setNewFormData] = useState({
    name: "",
    age: "",
    gender: "",
    description: "",
    id: ""
  });

  function getData(id) {
    var data = details.filter(d => {
      return (d.id === id);
    })
    setNewFormData(data);
    console.log(newFormData);
  }

  return (
    <div className="app">
      <Cards details={details} setDetails={setDetails} getData={getData} />
      <Form details={details} setDetails={setDetails} newFormData={newFormData} setNewFormData={setNewFormData} />
    </div>
  );
}