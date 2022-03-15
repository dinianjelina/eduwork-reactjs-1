import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '././img/1.jpg';
import img2 from '././img/2.jpg';
import img3 from '././img/3.jpg';
import img4 from '././img/4.jpg';
import img5 from '././img/5.jpg';

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <Container>
          <Row className="row text-center mb-3">
            <Col>
              <h2>My Projects</h2>
            </Col>
          </Row>
          <Row className="row justify-content-center">
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
