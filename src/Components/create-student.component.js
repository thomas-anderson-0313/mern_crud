// CreateStudent Component for add new student

// Import Modules
import React from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
export default function CreateStudent() {
    const [formValues, setFormValues] =
        React.useState({ name: '', email: '', rollno: '' })
    // onSubmit handler
    const onSubmit = studentObject => {
        axios.post(
            'http://localhost:4000/students/create-student',
            studentObject)
            .then(res => {
                if (res.status === 200) {
                    alert('Student successfully created');
                    setFormValues(studentObject)
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return student form
    return (
        <StudentForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Student
        </StudentForm>
    )
}
