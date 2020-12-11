import React from 'react'
import axios from 'axios'
import Hands from './Components/Hands.js'
import Hand from './Components/Hand.js'
import Comments from './Components/Comments'
import Header from './Components/Header.js'

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            hands: [],
            selectedHand: []
        }
    }

    async componentDidMount() {
        this.setState({
            hands: (await axios.get('/hands')).data
        })
    }

    async selectHand(id) {
        await axios.get(`/hands/${ id }`)
        .then(res => res.data)
        .then(hand => this.setState({ selectedHand: hand }))
    }

    deselectHand() {
        this.setState({ selectedHand: [] })
      }

    render() {
        const { hands, selectedHand } = this.state
        return (
            <div>
                <Header component={ this }/>
                <Hands hands={ hands } selectedHand={ selectedHand } component={ this }/>
                <Hand selectedHand={ selectedHand }/>
                <Comments selectedHand={ selectedHand }/>
            </div>
        )
    }
}