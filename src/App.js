import Form from './Components/Form';
import './App.css';
import Cards from './Components/Cards';
import { useState } from "react";

export default function App() {
  var [details, setDetails] = useState([]);
  return (
    <div className="app">
      <Cards details={details} setDetails={setDetails} />
      <Form details={details} setDetails={setDetails} />
    </div>
  );
}