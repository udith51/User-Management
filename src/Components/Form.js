import { useEffect, useState } from "react";
import nextId from "react-id-generator";
export default function Form(props) {

    var { formData, onSubmit } = props;

    const [userData, setUserData] = useState(formData);

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData(prev => {
            return ({
                ...prev,
                [e.target.name]: value
            })
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        formData = userData;
        formData.id = nextId();
        setUserData({
            name: "",
            age: "",
            gender: "",
            description: "",
            id: ""
        });
        onSubmit(formData);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="inn">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name here" name="name" id="name" value={userData.name} onChange={handleChange} />
                </div>
                <div className="grp2">
                    <div className="inn">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" value={userData.age} placeholder="Enter your age here" onChange={handleChange} />
                    </div>
                    <div className="inn">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" value={userData.gender} onChange={handleChange}>
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
                    <textarea name="description" id="description" placeholder="Enter User Info here" value={userData.description} onChange={handleChange}></textarea>
                </div>

                <button className="submit">Submit</button>
            </form>
        </div>
    );
}