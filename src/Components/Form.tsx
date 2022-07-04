import React, { useState } from 'react'
import { form } from '../model'
import nextId from "react-id-generator";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    formStyle: {
        width: "50vw",
        height: "100vh",
        fontFamily: 'Playfair Display',
        fontWeight: 600,
        fontSize: 18,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    formWrapper: {
        borderRadius: 10,
        backgroundColor: "rgba(53, 53, 53, 0.47)",
        padding: 25,
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    componentStyle: {
        display: "flex",
        alignItems: "center",
        marginBottom: 15
    },
    nameStyle: {
        marginLeft: 10,
        background: "#fff",
        borderRadius: 10,
        width: "35ch",
        "&.Mui-focused": {
            outline: "none"
        }
    },
    ageStyle: {
        marginLeft: 10,
        background: "#fff",
        borderRadius: 10,
        width: "15ch",
    },
    submitStyle: {
        fontFamily: 'Playfair Display',
        height: 30,
        borderRadius: 5,
        border: "none",
        fontWeight: 400,
        fontSize: 18,
        cursor: "pointer",
        width: 100,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#57AF57",
    },
    groupStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textAreaStyle: {
        width: "100%",
        marginTop: 10,
        minHeight: 200,
        borderRadius: 5,
        border: "none",
        padding: 5,
        "&.Mui-focused": {
            outline: "none"
        }

    },
    selectStyle: {
        height: 40,
        borderRadius: 5,
        border: "none",
        padding: 5,
        marginLeft: 20,
        marginBottom: 20,
        "&.Mui-focused": {
            outline: "none"
        }
    }
});


interface Props {
    formData: form,
    onSubmit: (data: form) => void
}

const Form = ({ formData, onSubmit }: Props) => {

    const classes = useStyles();

    const [userData, setUserData] = useState<form>(formData);

    function handleChange(e: React.SyntheticEvent) {
        const { name, value } = e.target as HTMLInputElement;
        setUserData(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
        console.log(userData);
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        formData = userData;
        formData.id = nextId();
        setUserData({
            name: "",
            age: 0,
            gender: "",
            description: "",
            id: ""
        });
        onSubmit(formData);
    }

    return (
        <div className={classes.formStyle}>
            <form onSubmit={handleSubmit} className={classes.formWrapper} noValidate autoComplete="off">
                <div className={classes.componentStyle} >
                    <label htmlFor="name">Name</label>
                    <TextField id="outlined-basic" label="" variant="outlined" className={classes.nameStyle} size="small" value={userData.name} onChange={handleChange} name="name" placeholder='Enter name here' />
                </div>
                <div className={classes.groupStyle}>
                    <div className={classes.componentStyle}>
                        <label htmlFor="age">Age</label>
                        <TextField id="outlined-basic" label="" variant="outlined" className={classes.ageStyle} size="small" value={userData.age} onChange={handleChange} name="age" placeholder='Enter age here' />
                    </div>
                    <div className={classes.componentStyle}>
                        <label htmlFor="gender">Gender</label>
                        {/* <FormControl className={classes.formControl}>
                            <Select
                                value={userData.gender}
                                onChange={handleChange}
                                displayEmpty
                                // className={}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>
                                    Enter Gender here
                                </MenuItem>
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"None"}>None</MenuItem>
                            </Select>
                            <FormHelperText>Enter Gender here</FormHelperText>
                        </FormControl> */}

                        <select name="gender" id="gender" value={userData.gender} onChange={handleChange} className={classes.selectStyle}>
                            <option value="">--Choose--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <br />
                    <textarea className={classes.textAreaStyle} name="description" id="description" placeholder="Enter User Info here" value={userData.description} onChange={handleChange}></textarea>
                </div>

                <button className={classes.submitStyle}>Submit</button>
            </form>
        </div>
    );
}


export default Form;