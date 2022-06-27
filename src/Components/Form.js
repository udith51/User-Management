import { useEffect, useState } from "react";
import nextId from "react-id-generator";
export default function Form(props) {

    const { details, setDetails, newFormData, setNewFormData } = props;

    const [formData, setFormData] = useState(
        {
            name: "",
            age: "",
            gender: "",
            description: "",
            id: ""
        }
    );
    // useEffect(() => {
    //     setFormData(newFormData);
    // }, [newFormData]);
    // console.log(formData);

    if (newFormData[0]) {
        console.log(newFormData[0]);
        console.log(formData);
        setFormData(newFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => {
            return ({
                ...prev,
                [e.target.name]: value
            })
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        setDetails(prev => {
            return ([...prev, { ...formData, id: nextId() }])
        })
        setFormData({
            name: "",
            age: "",
            gender: "",
            description: "",
            id: ""
        });
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="inn">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name here" name="name" id="name" onChange={handleChange} value={formData.name} />
                </div>
                <div className="grp2">
                    <div className="inn">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" onChange={handleChange} value={formData.age} placeholder="Enter your age here" />
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
                </div>
                <div className="inn">
                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea name="description" id="description" placeholder="Enter User Info here" onChange={handleChange} value={formData.description}></textarea>
                </div>

                <button className="submit">Submit</button>
            </form>
        </div>
    );
}