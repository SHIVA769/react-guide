import React from 'react';

/*
export default class Profile extends React.Component{
         handleClick = () => {
    alert("Hi there, user!");
  };

  render() {
    return (
      <div onClick={this.handleClick()}>
                <p>Click this text to see the event bubbling</p> 
             {" "}
        <button onClick={()=>this.handleClick()}>Click me</button>   
         {" "}
      </div>
    );
  }
  }
  */

export default class Profile extends React.Component{
    handleClick = () => {
    console.log("Hi there, user!");
  };

  render() {
    return (
      <div onClick={this.handleClick()}>
                <p>Click this text to see the event bubbling</p> 
             {" "}
        <button onClick={this.handleClick()}>Click me</button>   
         {" "}
      </div>
    );
  }
}


