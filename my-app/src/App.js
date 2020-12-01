import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Cardlist } from './component/list/list.component';

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
       <Cardlist friend={this.state.friend} />  


      </div>

    )
  }
}



export default App;
