import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      friend:[
        {
          'name':'sameep'
          
        },
        {
          'name':'himal'
        },
        {
          'name':'khem'
        },
      ]
    };
  }

  render(){
    return(
      <div className="App">
        { this.state.friend.map(friend=><h3>{ friend.name}</h3>)}
     
    </div>
    
    )
  }
}

  

export default App;
