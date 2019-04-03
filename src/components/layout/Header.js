import React from 'react'

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList App</h1>
        </header>
    )
}

const headerStyle = {
    background:'#333',
    color:'white',
    textAlign:'center'
}


export default Header;