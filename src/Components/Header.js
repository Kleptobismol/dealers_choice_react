import React from 'react'

const Header = ({ component }) => {
    return (
        <h1 onClick={ () => component.deselectHand() }> Poker Cheatsheet </h1>
    )
}

export default Header