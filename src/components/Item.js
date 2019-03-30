import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
  
  setStyle = () =>{
     
    return { 
      
      border: '1px solid black', 
      backgroundColor:'#f4f4f4',
      display: this.props.task.completed ? 'none' : null
    }
  }

  render() {
    return (
      <div style={this.setStyle()}>

        <p> 
          {`${this.props.task.task}`}
          <input type="checkbox"></input>
        </p>

      </div>
    )
  }
}


/* variable method to assign classes
const style = {
  color:'red',
  textDecoration:'line-through'
}
*/

//for doc purposes so that in later stage we can remember 
//and validate the nature of props passed
Item.propTypes = {
  task:PropTypes.object.isRequired
}


