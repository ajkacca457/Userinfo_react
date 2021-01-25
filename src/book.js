import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Book extends Component {

  render(){
    const {img,name,author,price}= this.props.info;
    return(
      <div className="book">
      <img src={img} alt="bookimage"/>
      <div>
        <h4>{name}</h4>
        <p>{author}</p>
        <p>{price}</p>
        </div>
      </div>
    )
  }
}


export default Book;
