const { STRING, TEXT } = require('sequelize');
const connection = require('./db');

const Hand = connection.define('hand', {
    name: {
        type: STRING
    },
    image: {
        type: STRING
    },
    content: {
        type: TEXT
    }
});

module.exports = Hand;