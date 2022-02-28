import React from 'react';
import ClassComponent from './pembahasan/ClassComponent';
import FunctionalComponent from './pembahasan/FunctionalComponent';
import Header from './pembahasan/header';

export default class BasicComponent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FunctionalComponent nama="Dini Anjelina" umur={21} hobi="nonton film" materi="Reactjs dan Nodejs" />
        <ClassComponent />
      </div>
    );
  }
}
