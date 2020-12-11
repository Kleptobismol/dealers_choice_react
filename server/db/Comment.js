const { STRING, TEXT, INTEGER } = require('sequelize');
const connection = require('./db');
const Hand = require('./Hand')

const Comment = connection.define('comment', {
    user: {
        type: STRING,
        notNull: true,
        notEmpty: true
    },
    content: {
        type: TEXT,
        notNull: true,
        notEmpty: true
    },
    upvotes: {
        type: INTEGER,
        defaultValue: 0
    }
});

Comment.belongsTo(Hand);
Hand.hasMany(Comment);

module.exports = Comment;