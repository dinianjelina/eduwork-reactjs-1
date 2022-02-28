import React from 'react';

class ClassComponent extends React.Component {
  state = {
    value: 0,
  };

  handlePlus = () => {
    if (this.state.value < 4) {
      this.setState({ value: this.state.value + 1 });
    }
  };

  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div className="class-component">
        <p>Enter your rating for my profile, guys.</p>
        <ul>
          <li>Bad : 1</li>
          <li>Good : 2</li>
          <li>Very Good : 3</li>
          <li>Amazing : 4</li>
        </ul>
        <div className="button">
          <button onClick={this.handleMinus}> - </button>
          <span> {this.state.value} </span>
          <button onClick={this.handlePlus}> + </button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
