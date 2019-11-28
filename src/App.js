import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      blue: false,
      text: "Red"
    };
    this.handleColor = this.handleColor.bind(this)
  }

  handleColor(){
    this.setState({blue: true, text: 'Blue'})
    if(this.state.blue){
      this.setState({blue: false, text: 'Red'})
    }
  }

  render(){
    return (
      <div className="App">
        <h1 className={this.state.blue ? 'blue' : 'red'}>{this.state.text}</h1>
        <button className = {this.state.blue ? 'red' : 'blue'} onClick={this.handleColor}>Change to {this.state.blue ? 'Red' : 'Blue'}</button>
      </div>
    );
  } 
}

export default App;
