import { useContext } from 'react'
import nextId from "react-id-generator";
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../userContext';
import { ReactForm } from 'react-forms'
import { User } from '../modelTypes';

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
        background: '#fff',
        "&.Mui-focused": {
            outline: "none"
        }
    }
});


const Form = () => {
    const classes = useStyles();
    const { addUser, editUser, updateUser } = useContext(UserContext);
    const myConfig = [
        {
            type: 'text',
            valueKey: 'name',
            fieldProps: { label: 'Name', fullWidth: true, className: classes.nameStyle },
        },
        [
            {
                type: 'text',
                valueKey: 'age',
                fieldProps: { label: 'Age', className: classes.ageStyle },
            },
            {
                type: 'select',
                valueKey: 'gender',
                fieldProps: {
                    options: [
                        { name: 'Male', value: 'Male' },
                        { name: 'Female', value: 'Female' },
                        { name: 'None', value: 'None' },
                    ],
                    className: classes.selectStyle
                },
            },
        ],
        {
            type: 'text',
            valueKey: 'description',
            fieldProps: { label: 'Description', className: classes.textAreaStyle },
        }
    ]


    const myInitialValues = editUser || { name: '', age: undefined, gender: 'None', description: '', id: '' }

    return (
        <div className={classes.formStyle}>
            <div className={classes.formWrapper}>
                <ReactForm
                    enableReinitialize
                    config={myConfig}
                    initialValues={myInitialValues}
                    onSubmit={(values: Partial<User>, helper: { resetForm: () => {} }
                    ) => {
                        if (!values.id)
                            addUser({ ...values, id: nextId() } as User)
                        else
                            updateUser(values as User);
                        helper.resetForm();
                        console.log(helper);
                    }} formId={''}
                    actionConfig={{ submitButtonProps: { className: classes.submitStyle } }}
                />
            </div>
        </div>
    )
    // const { addUser, editUser, updateUser } = useContext(UserContext)
    // const classes = useStyles();

    // const formik = useFormik({
    //     initialValues:
    //     {
    //         name: "",
    //         age: 0,
    //         gender: "",
    //         description: "",
    //         id: ""
    //     },
    //     onSubmit: values => {
    //         if (!values.id)
    //             addUser({ ...values, id: nextId() })
    //         else
    //             updateUser(values);
    //         console.log(values);
    //         formik.resetForm();
    //     }
    // })

    // return (
    //     <div className={classes.formStyle}>

    //         <form onSubmit={formik.handleSubmit} className={classes.formWrapper} noValidate autoComplete="off">

    //             <div className={classes.componentStyle} >
    //                 <label htmlFor="name">Name</label>
    //                 <TextField
    //                     id="outlined-basic"
    //                     label=""
    //                     variant="outlined"
    //                     className={classes.nameStyle}
    //                     size="small"
    //                     value={formik.values.name}
    //                     onChange={formik.handleChange}
    //                     name="name"
    //                     placeholder='Enter name here' />
    //             </div>

    //             <div className={classes.groupStyle}>
    //                 <div className={classes.componentStyle}>
    //                     <label htmlFor="age">Age</label>
    //                     <TextField
    //                         id="outlined-basic"
    //                         label=""
    //                         variant="outlined"
    //                         className={classes.ageStyle}
    //                         size="small"
    //                         value={formik.values.age}
    //                         onChange={formik.handleChange}
    //                         name="age"
    //                         placeholder='Enter age here' />
    //                 </div>

    //                 <div className={classes.componentStyle}>
    //                     <label htmlFor="gender">Gender</label>
    //                     <select
    //                         name="gender"
    //                         id="gender"
    //                         value={formik.values.gender}
    //                         onChange={formik.handleChange}
    //                         className={classes.selectStyle}>
    //                         <option value="">--Choose--</option>
    //                         <option value="Male">Male</option>
    //                         <option value="Female">Female</option>
    //                         <option value="Others">Others</option>
    //                     </select>
    //                 </div>
    //             </div>

    //             <div>
    //                 <label htmlFor="description">Description</label>
    //                 <br />
    //                 <textarea
    //                     className={classes.textAreaStyle}
    //                     name="description"
    //                     id="description"
    //                     placeholder="Enter User Info here"
    //                     value={formik.values.description}
    //                     onChange={formik.handleChange}>
    //                 </textarea>
    //             </div>

    //             <button type='submit' className={classes.submitStyle}>Submit</button>
    //         </form>
    //     </div>
    // );
}


export default Form;