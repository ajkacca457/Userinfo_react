import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {bookinfo} from "./bookinfo"
import Header from "./header"

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
        books:bookinfo
    }
  }

  render(){
    return(
      <div className="App">
        <Header></Header>
      </div>
    )
  }
}


export default App;
