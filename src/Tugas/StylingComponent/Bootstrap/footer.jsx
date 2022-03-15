import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div class="footer bg-primary text-white text-center mt-5">
        <p>
          Created by{' '}
          <a href="https://www.instagram.com/dinianjelina_/" rel="noreferrer" class="text-white fw-bold" target="_blank">
            Dini Anjelina
          </a>
        </p>
      </div>
    );
  }
}
