import React from 'react'

const Hands = ({ hands, selectedHand, component }) => {
    if (selectedHand.length === 0) {
        return (
            <div>
                { hands.map (hand => {
                    return (
                        <div>
                            <h2><a onClick={ () => component.selectHand(hand.id)}>{ hand.name }</a></h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Hands