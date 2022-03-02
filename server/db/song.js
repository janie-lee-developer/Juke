const db = require('./db');
const { STRING } = db.Sequelize;

const Song = db.define('song', {
    name: {
        type: STRING,
        allowNull: false
    },
    audioUrl: {
        type: STRING
    },
    genre: {
        type: STRING
    }
});

module.exports = Song;