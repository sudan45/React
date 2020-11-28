import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friend: []
    };
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/viewset/studentmodel/')
      .then(response => response.json())
      .then(user => this.setState({ friend: user }));

  }

  render() {
    return (
      <div className="App">
        { this.state.friend.map(friend => <h3 key={friend.id}>{friend.first_name}</h3>)}

      </div>

    )
  }
}



export default App;
