import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

export default function StudentForm(props) {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Rquired"),
        email: Yup.string()
            .email("You have enter an invalid email address")
            .required("Rquired"),
        rollno: Yup.number()
            .positive("Invalid roll number")
            .integer("Invalid roll number")
            .required("Rquired"),
    });
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <div style={{ padding: "20px 0" }}>Name:</div>
                        <Field name="name" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="name"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <div style={{ padding: "20px 0" }}>Email:</div>
                        <Field name="email" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="email"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <div style={{ padding: "20px 0" }}>Roll:</div>
                        <Field name="rollno" type="number"
                            className="form-control" />
                        <ErrorMessage
                            name="rollno"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <Button variant="danger" size="lg"
                        block="block" type="submit" style={{ margin: "20px 0" }}>
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};
