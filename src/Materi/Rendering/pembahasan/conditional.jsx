import React from 'react';

export default class Conditional extends React.Component {
  //   render() {
  //     const isLogin = false;
  //     if (isLogin) {
  //       return (
  //         <div>
  //           <h1>Anda sudah login</h1>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <h1>Silakan login terlebih dahulu</h1>
  //         </div>
  //       );
  //     }
  //   }

  //   render() {
  //     const isLogin = true;
  //     let message = '';
  //     if (isLogin) {
  //       message = 'Anda sudah login';
  //     } else {
  //       message = 'Silakan login terlebih dahulu';
  //     }

  //     return (
  //       <div>
  //         <h1>{message}</h1>
  //       </div>
  //     );
  //   }

  //   render() {
  //     const isLogin = false;
  //     return <div>{isLogin ? <h1>Anda sudah login</h1> : <h1>Silakan login terlebih dahulu</h1>}</div>;
  //   }

  state = {
    isLoading: true,
  };

  render() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);

    return <div>{this.state.isLoading ? <h1>Loading...</h1> : <h1>Selamat datang di kelas MERN</h1>}</div>;
  }
}
