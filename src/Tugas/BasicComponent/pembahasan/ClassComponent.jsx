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
      <div>
        <p>
          Enter your rating for my profile, guys.
          <br />
          Bad : 1 <br /> Good : 2 <br /> Very Good : 3 <br /> Amazing : 4
        </p>
        <button onClick={this.handleMinus}> - </button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus}> + </button>
      </div>
    );
  }
}

export default ClassComponent;
