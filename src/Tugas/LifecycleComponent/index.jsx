import React from 'react';
import NavbarNews from './Component/NavbarNewsApp';
import SearchNews from './Component/SearchInput';

export default class NewsApp extends React.Component {
  render() {
    return (
      <div>
        <NavbarNews />
        <SearchNews />
      </div>
    );
  }
}
