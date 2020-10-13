import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Redirect } from "react-router-dom";
import { authRequest, clearAuth } from '../../redux/redusers/Auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';

export default function FormLogin() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        return () => {
            clearAuth()
        }
    }, [])

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(authRequest(e.target.formGroupUserName.value, e.target.formGroupPassword.value))
    }

    return (
        <>
            <Form className="pt-2 pb-2" onSubmit={onFormSubmit}>
                <Form.Group controlId="formGroupUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" defaultValue=" " />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-warning">
                    {auth.errorMessage}
                </Form.Text>
                <Button className="mt-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {auth.isAuthenticated ?
                <Redirect to={{ pathname: "/profile" }} />
                :
                null
            }
        </>
    )
}
