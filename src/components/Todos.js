import React, { Component } from 'react';
import Item from './Item'
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    return (
        this.props.rep.map((todo) =>
        (
            <Item key= {todo.id} task= {todo}/>
        ))
    )
  }
}

Todos.propTypes = {
    rep:PropTypes.array.isRequired
    
} 

export default Todos;


// bro, it's super compulsory to declare the names of the components in 
// first letter upper case or it will ignore the component
