import React from 'react';
import logo from './dinianjelina.jpg';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className="Header text-center">
        <header className="Header-section">
          <img src={logo} className="Header-logo" alt="dinianjelina" width="150" />
          <h1 className="display-4">Dini Anjelina</h1>
          <p className="lead">Pengusaha || Web Programmer</p>
          <Button variant="link" className="btn btn-primary mt-4 shadow-sm">
            <a href="https://www.linkedin.com/in/dinianjelina/" className="text-white fw-bold" target="_blank" rel="noreferrer noopener">
              Linkedin Profile
            </a>
          </Button>
        </header>
      </div>
    );
  }
}
