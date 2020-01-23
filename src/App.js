import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main features={this.props.features}/>
      </div>
    );
  }
}

export default App;
