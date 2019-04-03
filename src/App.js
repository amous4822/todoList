import React, { Component } from 'react';
import './App.css'
import uuid from 'uuid'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddItem from './components/AddItem'

class App extends Component {

  //state can be considered as the data hovering over the entire
  //application and all other components access it indirectly
  //one level down.
  state = {
    tasks :[
      {
        id:uuid.v4(),
        task:'make the react app',
        completed:false
      },
      {
        id:uuid.v4(),
        task:'making decision',
        completed:false
      },
      {
        id:uuid.v4(),
        task:'learn react from FCC',
        completed: false
      }
    ]
  }

  change=(id)=>{
    this.setState({ tasks: this.state.tasks.map((obj)=>{
      if(obj.id === id){
        obj.completed = !obj.completed;
      }
      return obj;
    })})
  }

  AddTodo = (task) => {

    //console.log(task)
    const newTodo = {
      id:uuid.v4(),
      task,
      completed:false
    }

    this.setState({tasks : [...this.state.tasks, newTodo]})
  }

  delete= (id) => {
    // this.setState({ task: [...this.state.tasks.filter(obj => 
    //   obj.id !== id )]})
    this.setState( {tasks : 
      this.state.tasks.filter((obj)=> obj.id !== id)
  })
}
 
  render() {
    //console.log(this.state.tasks)
    return (
      <div className="container">
        <Header/>
        <AddItem addItem={this.AddTodo} />
        <Todos rep={this.state.tasks} 
               change={this.change}
               delete={this.delete}
        />
      </div>
    );
  }
}

export default App;
