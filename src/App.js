import React, { Component } from 'react';
import './App.css';
import Block1 from '../src/block1'
import Block2 from '../src/block2'
import Header from '../src/banner'

class App extends Component {


  render() {
    return (
      <div>
      <Header />
      <main>
        <div className="wrapper">
          <Block1 />
          <Block2 />
        </div>
        </main> 
    </div>
    );
  }
}

export default App;
