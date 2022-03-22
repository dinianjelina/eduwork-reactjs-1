import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import CardNews from './Component/CardNews';
import NavbarNews from './Component/NavbarNewsApp';
import SearchNews from './Component/SearchInput';

export default class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      keyword: '',
      isLoading: false,
    };
    console.log('CONSTRUCTOR');
    this.apiKey = process.env.REACT_APP_API;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    console.log(this.state.isLoading);
    console.log('DID MOUNT');
    // fetch(`https://newsapi.org/v2/everything?q=apple&from=2022-02-21&to=2022-02-21&sortBy=popularity&apiKey=22e72310a32345d880bdb3dd23b552d9`)
    fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=b01d83cd9d034bc08c4e57514065a82b`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          news: response.articles,
          isLoading: false,
        });
        console.log(this.state.news);
      });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ keyword: e.target.value });
    this.setState({ isLoading: true });
    fetch(`https://newsapi.org/v2/everything?q=${this.state.keyword}&apiKey=${this.apiKey}`)
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((response) => {
        this.setState({
          news: [...response.articles],
          isLoading: false,
        });
        console.log(response.articles);
      });
  };

  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div>
        <NavbarNews />
        <SearchNews handleClick={this.handleClick} />
        {this.state.isLoading ? (
          <div style={style}>
            <RotatingLines />
          </div>
        ) : (
          <CardNews news={this.state.news} />
        )}
      </div>
    );
  }
}
