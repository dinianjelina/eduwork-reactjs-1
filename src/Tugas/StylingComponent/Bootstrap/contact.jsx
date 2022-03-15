import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <Container>
          <Row className="row text-center mb-3">
            <Col>
              <h2>Contact</h2>
            </Col>
          </Row>
          <Row className="row justify-content-center">
            <Col md={6} className="mb-3">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
