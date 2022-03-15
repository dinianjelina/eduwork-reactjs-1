import React from 'react';
import Bootstrap from './Bootstrap/navbar';
import About from './Bootstrap/about';
import Contact from './Bootstrap/contact';
import Footer from './Bootstrap/footer';
import Jumbotron from './Bootstrap/jumbotron';
import Projects from './Bootstrap/projects';

export default class StylingComponent extends React.Component {
  render() {
    return (
      <div>
        <Bootstrap />
        <Jumbotron />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
