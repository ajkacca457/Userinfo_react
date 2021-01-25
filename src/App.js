import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bookinfo} from "./bookinfo";
import Header from "./header";
import Book from "./book"

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
        {this.state.books.map(item=>
          <Book key={item.id} info={item}></Book>)}
      </div>
    )
  }
}


export default App;
