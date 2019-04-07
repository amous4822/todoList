import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList App</h1>
            <Link style={linkstyle} to="/">Home</Link> |  
            <Link style={linkstyle} to="/about"> About</Link>
        </header>
    )
}

const linkstyle = {
    color:'white',
    textDecoration:'none'
}

const headerStyle = {
    background:'#333',
    color:'white',
    textAlign:'center'
}


export default Header;