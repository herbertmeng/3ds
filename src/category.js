import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './index.css';
class Category extends Component {
  render() {
    return (
      <div className="App">
         <Header />
      </div>
    );
  }
}
ReactDOM.render(<Category />, document.getElementById('root'));
