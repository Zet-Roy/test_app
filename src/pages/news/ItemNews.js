import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function ItemNews({ item }) {
    return (
        <Col xs={8} className="mt-2">
            <Card>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
