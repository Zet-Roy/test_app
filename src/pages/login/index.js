import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FormLogin from './FormLogin'

export default function Login() {
    return (
        <Row className="ml-0 mr-0 justify-content-center">
            <Col xs={4} className="bg-info mt-5">
                <FormLogin />
            </Col>
        </Row>
    )
}
