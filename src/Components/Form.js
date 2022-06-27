import { useState } from "react";
import nextId from "react-id-generator";
export default function Form(props) {

    const { details, setDetails } = props;
    const [formData, setFormData] = useState(
        {
            name: "",
            age: "",
            gender: "",
            id: ""
        }
    );

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => {
            return ({
                ...prev,
                [e.target.name]: value
            })
        })
    }
    // var id;
    function handleSubmit(e) {
        e.preventDefault();
        setFormData(prev => {
            prev.id = nextId();
        })
        setDetails(prev => {
            return ([...prev, formData])
        })
        console.log(formData);
        setFormData({
            name: "",
            age: "",
            gender: "",
        });
        console.log(details);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="inn">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name here" name="name" id="name" onChange={handleChange} value={formData.name} />
            </div>
            <div className="inn">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" onChange={handleChange} value={formData.age} />
            </div>
            <div className="inn">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={handleChange} value={formData.gender}>
                    <option value="">--Choose--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <button>Submit</button>
        </form>
    );
}