import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'
import PostUpdated from './components/PostUpdated';

class App extends Component {
  render() {
    return (
      <div>
        <PostUpdated id="2"/>
        <Posts />
      </div>
    )
  }
}
export default App;
