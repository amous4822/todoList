import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css'
import uuid from 'uuid'
import Todos from './components/Todos'
import Header from './components/Header'
import AddItem from './components/AddItem'
import About from './components/About';

class App extends Component {

  //state can be considered as the data hovering over the entire
  //application and all other components access it indirectly
  //one level down.
  state = {
    tasks :[
      {
        id:uuid.v4(),
        task:'make the react app',
        time:'10:00',
        completed:false
      },
      {
        id:uuid.v4(),
        task:'making decision',
        time:'13:10',
        completed:false
      },
      {
        id:uuid.v4(),
        task:'learn react from FCC',
        time:'11:90',
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

  setTime = (send)=> {
    console.log("time:",send)
  }
 
  render() {
    //console.log(this.state.tasks)
    return (
      <div className="container">
           
        <Router>
        <Header/>
        <Route exact path='/' render = {props => (
          
          <React.Fragment>
            <AddItem addItem={this.AddTodo} />
            <Todos rep={this.state.tasks} 
                 change={this.change}
                 delete={this.delete}
                 setTime={(send)=>this.setTime(send)}
            />
          </React.Fragment>

        )}/>

        <Route path="/about" component={About}/>

        </Router>
      </div>
    );
  }
}

export default App;
