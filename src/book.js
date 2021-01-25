import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Book extends Component {
constructor(props){
  super(props)
  this.state={
    showBook:false
  }
}

toggleBook=()=>{
  this.setState({
    showBook: !this.state.showBook
  })
}


  render(){
    const {id,img,name,author,price,description}= this.props.info;

  const displaybook=(status)=>{
  if(status===true){
    return <p className="info">{description}</p>
  }else {
   return null
  }
    }

    return(
      <div className="book">
      <img src={img} alt="bookimage"/>
      <div>
        <h4>{name}</h4>
        <p>{author}</p>
        <h4>{price}</h4>
        </div>
        <button type="button" className="btn" onClick={this.toggleBook}>Show Info</button>
        {displaybook(this.state.showBook)}
      </div>
    )
  }
}


export default Book;
