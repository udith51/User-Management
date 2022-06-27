import { useEffect, useState } from "react";
import nextId from "react-id-generator";

export default function UpdateForm(props) {


    const { details, setDetails, newFormData, setNewFormData } = props;


    function handleChange(e) {
        const { name, value } = e.target;
        setNewFormData(prev => {
            return ({
                ...prev,
                [e.target.name]: value
            })
        })
    }
    function handleSubmit(e) {
        e.preventDefault();

        // setDetails(prev => {
        //     return ([...prev, { ...formData, id: nextId() }])
        // })
        console.log(newFormData);
        setNewFormData({
            name: "",
            age: "",
            gender: "",
            id: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="inn">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name here" name="name" id="name" onChange={handleChange} value={newFormData.name} />
            </div>
            <div className="inn">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" onChange={handleChange} value={newFormData.age} />
            </div>
            <div className="inn">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" onChange={handleChange} value={newFormData.gender}>
                    <option value="">--Choose--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <button>Update</button>
        </form>
    );
}