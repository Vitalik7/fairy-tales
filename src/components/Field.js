import React, { Component } from 'react';
import '../styles/style.css'

export default class Field extends Component {
  render() {
    return (
      <div className='App' >
        <header className="App-header">
          <h2> Всі казки </h2>
        </header>
        <div className='tale'>

          <h3 className='name'> Біда Навчить </h3>
          <p className='author'> Леся Українка </p>
          <hr/>
        </div>

      </div>
    );
  }
}
