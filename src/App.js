import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    tasks :[
      {
        id:1,
        task:'make the react app',
        completed:false
      },
      {
        id:2,
        task:'learn react from FCC',
        completed: false
      }
    ]
  }
  render() {
    //console.log(this.state.tasks)
    return (
      <div className="App">
        <p>This is from where I reign</p>
        <Todos rep={this.state.tasks} />
      </div>
    );
  }
}

export default App;
