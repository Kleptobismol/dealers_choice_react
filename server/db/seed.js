const connection = require('./db')
const Hand = require('./Hand')
const Comment = require('./Comment')
const { hands, comments } = require ('./data')

const syncAndSeed = async() => {
    try{
        await connection.sync({ force: true })
        await hands.map( hand => {
            Hand.create({
                name: hand.name,
                image: hand.image,
                content: hand.content
            })
        })
        await comments.map( comment => {
            Comment.create({
                user: comment.user,
                content: comment.content,
                upvotes: comment.upvotes,
                handId: comment.handId
            })
        })
    }
    catch(ex) {
        console.log(ex)
    };
}

module.exports = syncAndSeed;