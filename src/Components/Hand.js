import React from 'react'

const Hand = ({ selectedHand }) => {
    if (selectedHand.length > 0) {
        return(
            <div className='container'>
                { selectedHand.map( (hand, idx) => {
                    return (
                        <div id={'hand' + idx.toString()}>
                            <h2 className='display-bottom'>{ hand.name }</h2>
                            <div id='cards'>
                                <img src={ hand.image }/>
                            </div>
                            <h3 className='display-top'>{ hand.content }</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
    else { return null }
}

export default Hand