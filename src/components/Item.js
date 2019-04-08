import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Timer from './Timer';


export default class Item extends Component {
  
  //arrow function to set the style 
  setStyle = () =>{
    
    return {    
      border: '1px solid black', 
      backgroundColor:'#f4f4f4',
      color: this.props.task.completed ? 'red' : null
    }
  }

  

  render() {

    //destructuring for easy access of variables
    const {id , task,time} = this.props.task;

    return (
      //sets the style usinf setStyle()
      
      <div style={this.setStyle()}>
        <p>
          {`${task}`}
          <input type="checkbox" 
            onChange= {this.props.change.bind(this,id)} />

            <button style={btnStyle} onClick= { this.props.delete.bind(this,id) }>
              D
            </button>  
        </p>

        <Timer updateTime={(send,is) => this.props.setTime(send,is)} 
          keyId= {id}
          setTime = {time}

        />
        
      </div>
    )
    
  }
}

const btnStyle = {
  height:'20px',
  width:'20px',
  cursor:'pointer',
  float:'right',
  marginLeft:'20%',
  backgroundColor:'red',
  border:'red',
  borderRadius: '50%'

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


