import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import StudentForm from "./StudentForm";

const StudentTableRow = (props) => {
    const { _id, name, email, rollno } = props.obj;
    const [editStatus, setEditStatus] = React.useState(false)
    const [formValues, setFormValues] = React.useState({
        name: "",
        email: "",
        rollno: "",
    });

    const onSubmit = (studentObject) => {
        axios
            .put(
                "http://localhost:4000/students/update-student/" +
                _id,
                studentObject
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
        setEditStatus(false)
        setFormValues(studentObject)
    };

    // Load data from server and reinitialize student form
    React.useEffect(() => {
        axios
            .get(
                "http://localhost:4000/students/update-student/"
                + _id
            )
            .then((res) => {
                const { name, email, rollno } = res.data;
                setFormValues({ name, email, rollno });
            })
            .catch((err) => console.log(err));
    }, [formValues]);

    const deleteStudent = () => {
        axios
            .delete(
                "http://localhost:4000/students/delete-student/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    const editStudent = () => {
        setEditStatus(true)
    }
    return (
        <tr>
            {editStatus === false ?
                <>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{rollno}</td>
                    <td>
                        <Button onClick={editStudent}
                            size="sm" variant="primary">
                            Edit
                        </Button>
                        <Button onClick={deleteStudent}
                            size="sm" variant="danger">
                            Delete
                        </Button>
                    </td>
                </> :
                <StudentForm
                    initialValues={formValues}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    Update Student
                </StudentForm>
            }
        </tr>
    );
};

export default StudentTableRow;